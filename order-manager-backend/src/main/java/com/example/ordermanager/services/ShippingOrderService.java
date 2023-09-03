package com.example.ordermanager.services;

import com.example.ordermanager.models.PurchaseOrderModel;
import com.example.ordermanager.models.ShippingOrderModel;
import com.example.ordermanager.repositories.ShippingOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingOrderService {
    @Autowired
    ShippingOrderRepository shippingOrderRepository;

    @Autowired
    PurchaseOrderService purchaseOrderService;

    public void generateShippingOrdes(){
        List<PurchaseOrderModel> purchaseOrderModels = purchaseOrderService.getUnshippedPurchaseOrders();

        if(purchaseOrderModels.isEmpty()){
            return;
        }

        ShippingOrderModel shippingOrderModel = new ShippingOrderModel();

        purchaseOrderModels.forEach(purchaseOrderModel -> {
            shippingOrderModel.addPurchaseOrder(purchaseOrderModel);
            purchaseOrderModel.setShipped(true);
            purchaseOrderService.updatePurchaseOrder(purchaseOrderModel);
        });

        shippingOrderRepository.save(shippingOrderModel);
    }

}
