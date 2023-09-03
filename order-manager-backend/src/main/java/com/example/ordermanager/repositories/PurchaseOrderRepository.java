package com.example.ordermanager.repositories;

import com.example.ordermanager.models.PurchaseOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrderModel, Integer> {}
