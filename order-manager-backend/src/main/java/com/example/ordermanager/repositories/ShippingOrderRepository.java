package com.example.ordermanager.repositories;

import com.example.ordermanager.models.ShippingOrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingOrderRepository extends JpaRepository<ShippingOrderModel, Long> {
}
