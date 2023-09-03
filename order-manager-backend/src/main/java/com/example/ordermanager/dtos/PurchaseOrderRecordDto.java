package com.example.ordermanager.dtos;

import com.example.ordermanager.models.ProductModel;
import com.example.ordermanager.models.PurcharseOrderProductModel;
import org.hibernate.validator.constraints.Length;

import java.util.List;
import java.util.Set;

public record PurchaseOrderRecordDto(
        Set<ProductWithQtyDto> products
) {}
