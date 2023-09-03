package com.example.ordermanager.services;

import com.example.ordermanager.dtos.ProductWithQtyDto;
import com.example.ordermanager.dtos.PurchaseOrderRecordDto;
import com.example.ordermanager.models.PurcharseOrderProductModel;
import com.example.ordermanager.models.PurchaseOrderModel;
import com.example.ordermanager.repositories.PurchaseOrderProductRepository;
import com.example.ordermanager.repositories.PurchaseOrderRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@Service
public class PurchaseOrderService {
    @Autowired
    PurchaseOrderRepository purchaseOrderRepository;

    @Autowired
    PurchaseOrderProductRepository purchaseOrderProductRepository;

    public PurchaseOrderModel createPurchaseOrder(PurchaseOrderRecordDto purchaseOrderRecordDto) {
        final int SURCHAGE_PERCENTAGE = 10;

        var purchaseOrderModel = new PurchaseOrderModel();
        BeanUtils.copyProperties(purchaseOrderRecordDto, purchaseOrderModel);

        Set<ProductWithQtyDto> products = purchaseOrderRecordDto.products();
        var productsAmount = products.stream().mapToInt(product -> product.getProduct().getPrice() * product.getQty()).sum();
        var surchargeAmount = productsAmount * SURCHAGE_PERCENTAGE / 100;
        var totalAmount = productsAmount + surchargeAmount;

        purchaseOrderModel.setProducts_amount(productsAmount);
        purchaseOrderModel.setSurcharge_amount(surchargeAmount);
        purchaseOrderModel.setTotal_amount(totalAmount);

        products.forEach(product -> {
            var purchaseOrderProductModel = new PurcharseOrderProductModel(
                    product.getProduct(),
                    purchaseOrderModel,
                    product.getProduct().getPrice(),
                    product.getQty()
            );
            purchaseOrderModel.addPurcharseOrderProduct(purchaseOrderProductModel);
        });

        return purchaseOrderRepository.save(purchaseOrderModel);
    }
    
    public PurchaseOrderModel getPurchaseOrderById(Long id) {
        return purchaseOrderRepository.findById(id).orElse(null);
    }
    
    public Collection<PurchaseOrderModel> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    public void updatePurchaseOrder(PurchaseOrderModel purchaseOrderModel) {
        purchaseOrderRepository.save(purchaseOrderModel);
    }

    public List<PurchaseOrderModel> getUnshippedPurchaseOrders() {
        return purchaseOrderRepository.findByIsShippedFalse();
    }
}
