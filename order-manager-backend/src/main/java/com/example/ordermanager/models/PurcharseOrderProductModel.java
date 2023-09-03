package com.example.ordermanager.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "purchase_orders_products")
public class PurcharseOrderProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductModel product;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "purchase_order_id")
    private PurchaseOrderModel purchaseOrder;

    @Column(name = "product_price")
    private Integer productPrice;

    @Column(name = "product_qty")
    private Integer productQty;

    public PurcharseOrderProductModel() {
    }
    public PurcharseOrderProductModel(ProductModel product, PurchaseOrderModel purchaseOrder, Integer productPrice, Integer productQty) {
        this.product = product;
        this.purchaseOrder = purchaseOrder;
        this.productPrice = productPrice;
        this.productQty = productQty;
    }

    public ProductModel getProduct() {
        return product;
    }

    public void setProduct(ProductModel product) {
        this.product = product;
    }

    public PurchaseOrderModel getPurchaseOrder() {
        return purchaseOrder;
    }

    public void setPurchaseOrder(PurchaseOrderModel purchaseOrder) {
        this.purchaseOrder = purchaseOrder;
    }

    public Integer getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    public Integer getProductQty() {
        return productQty;
    }

    public void setProductQty(Integer productQty) {
        this.productQty = productQty;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

}
