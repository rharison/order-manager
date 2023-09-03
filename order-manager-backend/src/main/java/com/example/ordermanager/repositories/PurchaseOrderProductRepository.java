package com.example.ordermanager.repositories;

import com.example.ordermanager.models.PurcharseOrderProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseOrderProductRepository extends JpaRepository<PurcharseOrderProductModel, Long> {
}
