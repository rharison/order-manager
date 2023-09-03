package com.example.ordermanager.services;

import com.example.ordermanager.dtos.ProductWithQtyDto;
import com.example.ordermanager.dtos.PurchaseOrderRecordDto;
import com.example.ordermanager.models.PurcharseOrderProductModel;
import com.example.ordermanager.models.PurchaseOrderModel;
import com.example.ordermanager.repositories.PurchaseOrderProductRepository;
import com.example.ordermanager.repositories.PurchaseOrderRepository;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.io.IOException;
import java.io.Writer;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Collection;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.logging.Logger;

import static java.lang.System.getLogger;

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

        purchaseOrderModel.setProductsAmount(productsAmount);
        purchaseOrderModel.setSurchargeAmount(surchargeAmount);
        purchaseOrderModel.setTotalAmount(totalAmount);

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

    public void getReportPurchaseOrdersWithHighAmount(Writer writer) {
        List<PurchaseOrderModel> purchaseOrderModels = purchaseOrderRepository.findByTotalAmountGreaterThan(5000);

        if(purchaseOrderModels.isEmpty()) {
            return;
        }

        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT)){
            csvPrinter.printRecord("Codigo Pedido", "Valor do Pedido");
            NumberFormat formatBrlCurrency = DecimalFormat.getCurrencyInstance(new Locale("pt", "BR"));

            for (PurchaseOrderModel purchaseOrder : purchaseOrderModels) {
                csvPrinter.printRecord(purchaseOrder.getId(), formatBrlCurrency.format(purchaseOrder.getTotalAmount() / 100.0));
            }
        } catch (IOException e) {
            System.out.println("Error while writing CSV file: " + e.getMessage());
        }
    }
}
