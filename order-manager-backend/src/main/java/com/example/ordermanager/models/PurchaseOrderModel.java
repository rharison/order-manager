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

    Integer products_amount;
    Integer surcharge_amount;
    Integer total_amount;

    Boolean isShipped = false;

    @JsonManagedReference
    @OneToMany(mappedBy = "purchaseOrder", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<PurcharseOrderProductModel> purcharseOrderProduct = new HashSet<>();

    public PurchaseOrderModel() {}

    public PurchaseOrderModel(Integer products_amount, Integer surcharge_amount, Integer total_amount) {
        this.products_amount = products_amount;
        this.surcharge_amount = surcharge_amount;
        this.total_amount = total_amount;
    }

    public Integer getProducts_amount() {
        return products_amount;
    }

    public void setProducts_amount(Integer products_amount) {
        this.products_amount = products_amount;
    }

    public Integer getSurcharge_amount() {
        return surcharge_amount;
    }

    public void setSurcharge_amount(Integer surcharge_amount) {
        this.surcharge_amount = surcharge_amount;
    }

    public Integer getTotal_amount() {
        return total_amount;
    }

    public void setTotal_amount(Integer total_amount) {
        this.total_amount = total_amount;
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
