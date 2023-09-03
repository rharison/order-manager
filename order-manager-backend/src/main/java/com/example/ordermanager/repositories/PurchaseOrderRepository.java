package com.example.ordermanager.repositories;

import com.example.ordermanager.models.PurchaseOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrderModel, Long> {
    List<PurchaseOrderModel> findByIsShippedFalse();
    List<PurchaseOrderModel> findByTotalAmountGreaterThan(Integer totalAmount);

}
