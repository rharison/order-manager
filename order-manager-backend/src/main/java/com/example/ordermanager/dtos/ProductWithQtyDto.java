package com.example.ordermanager.dtos;

import com.example.ordermanager.models.ProductModel;

public class ProductWithQtyDto {
    ProductModel product;
    Integer qty;

    public ProductWithQtyDto(ProductModel product, Integer qty) {
        this.product = product;
        this.qty = qty;
    }

    public ProductModel getProduct() {
        return product;
    }

    public void setProduct(ProductModel product) {
        this.product = product;
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }
}
