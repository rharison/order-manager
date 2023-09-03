package com.example.ordermanager.controllers;

import com.example.ordermanager.dtos.PurchaseOrderRecordDto;
import com.example.ordermanager.models.PurchaseOrderModel;
import com.example.ordermanager.repositories.PurchaseOrderRepository;
import com.example.ordermanager.services.PurchaseOrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PurcharseOrderController {
    @Autowired
    PurchaseOrderService purchaseOrderService;

    @PostMapping("/purchase-orders")
    public ResponseEntity<PurchaseOrderModel> createPurchaseOrder(@RequestBody @Valid PurchaseOrderRecordDto purchaseOrderRecordDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(purchaseOrderService.createPurchaseOrder(purchaseOrderRecordDto));
    }

    @GetMapping("/purchase-orders")
    public ResponseEntity<Iterable<PurchaseOrderModel>> getAllPurchaseOrders() {
        return ResponseEntity.status(HttpStatus.OK).body(purchaseOrderService.getAllPurchaseOrders());
    }

    @GetMapping("/purchase-orders/{id}")
    public ResponseEntity<Object> getPurchaseOrderById(@PathVariable(value="id") Long id) {
        Optional<PurchaseOrderModel> purchaseOrderModel = Optional.ofNullable(purchaseOrderService.getPurchaseOrderById(id));
        if (purchaseOrderModel.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(purchaseOrderModel.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Purchase order not found");
        }
    }

    @GetMapping("/purchase-orders/report")
    public ResponseEntity<Iterable<PurchaseOrderModel>> getReportPurchaseOrdersWithHighAmount() {
        return ResponseEntity.status(HttpStatus.OK).body(purchaseOrderService.getReportPurchaseOrdersWithHighAmount());
    }
}
