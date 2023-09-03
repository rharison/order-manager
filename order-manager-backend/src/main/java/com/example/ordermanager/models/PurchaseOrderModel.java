package com.example.ordermanager.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serial;
import java.util.*;

@Entity
@Table(name = "purchase_orders")
public class PurchaseOrderModel extends BaseEntity {
    @Serial
    private static final long serialVersionUID = 1L;

    Integer productsAmount;
    Integer surchargeAmount;
    Integer totalAmount;

    Boolean isShipped = false;

    @JsonManagedReference
    @OneToMany(mappedBy = "purchaseOrder", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PurcharseOrderProductModel> purcharseOrderProduct = new HashSet<>();

    public PurchaseOrderModel() {}

    public PurchaseOrderModel(Integer products_amount, Integer surcharge_amount, Integer total_amount) {
        this.productsAmount = products_amount;
        this.surchargeAmount = surcharge_amount;
        this.totalAmount = total_amount;
    }

    public Integer getProductsAmount() {
        return productsAmount;
    }

    public void setProductsAmount(Integer productsAmount) {
        this.productsAmount = productsAmount;
    }

    public Integer getSurchargeAmount() {
        return surchargeAmount;
    }

    public void setSurchargeAmount(Integer surchargeAmount) {
        this.surchargeAmount = surchargeAmount;
    }

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Set<PurcharseOrderProductModel> getPurcharseOrderProduct() {
        return purcharseOrderProduct;
    }

    public void setPurcharseOrderProduct(Set<PurcharseOrderProductModel> purcharseOrderProduct) {
        this.purcharseOrderProduct = purcharseOrderProduct;
    }

    public Boolean getShipped() {
        return isShipped;
    }

    public void setShipped(Boolean shipped) {
        isShipped = shipped;
    }

    public void addPurcharseOrderProduct(PurcharseOrderProductModel purcharseOrderProductModel) {
        purcharseOrderProductModel.setPurchaseOrder(this);
        this.purcharseOrderProduct.add(purcharseOrderProductModel);
    }
}
