package com.example.ordermanager.controllers;

import com.example.ordermanager.dtos.PurchaseOrderRecordDto;
import com.example.ordermanager.models.PurchaseOrderModel;
import com.example.ordermanager.repositories.PurchaseOrderRepository;
import com.example.ordermanager.services.PurchaseOrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PurcharseOrderController {
    @Autowired
    PurchaseOrderService purchaseOrderService;

    @PostMapping("/purchase-orders")
    public ResponseEntity<PurchaseOrderModel> createPurchaseOrder(@RequestBody @Valid PurchaseOrderRecordDto purchaseOrderRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(purchaseOrderService.createPurchaseOrder(purchaseOrderRecordDto));
    }
}
