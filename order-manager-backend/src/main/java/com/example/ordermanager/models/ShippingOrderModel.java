package com.example.ordermanager.models;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "shipping_orders")
public class ShippingOrderModel extends BaseEntity  {

    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
    @JoinTable(
            name = "shipping_orders_purchase_orders",
            joinColumns = @JoinColumn(name = "shipping_orders_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "purchase_order_id")
    )
    private List<PurchaseOrderModel> purchaseOrders = new ArrayList<>();

    public ShippingOrderModel() {
    }

    public ShippingOrderModel(List<PurchaseOrderModel> purchaseOrders) {
        this.purchaseOrders = purchaseOrders;
    }

    public List<PurchaseOrderModel> getPurchaseOrders() {
        return purchaseOrders;
    }

    public void setPurchaseOrders(List<PurchaseOrderModel> purchaseOrders) {
        this.purchaseOrders = purchaseOrders;
    }

    public void addPurchaseOrder(PurchaseOrderModel purcharseOrderModel) {
        this.purchaseOrders.add(purcharseOrderModel);
    }
}
