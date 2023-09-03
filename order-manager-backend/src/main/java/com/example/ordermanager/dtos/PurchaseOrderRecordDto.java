package com.example.ordermanager.dtos;

import com.example.ordermanager.models.ProductModel;
import com.example.ordermanager.models.PurcharseOrderProductModel;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.Length;

import java.util.List;
import java.util.Set;

public record PurchaseOrderRecordDto(
       @Valid @Size(min = 1, max = 3, message = "O pedido deve ter no mínimo 1 e no máximo 3 produtos.") Set<ProductWithQtyDto> products
) {}
