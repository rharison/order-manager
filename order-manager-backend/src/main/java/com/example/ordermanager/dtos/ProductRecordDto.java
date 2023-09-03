package com.example.ordermanager.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProductRecordDto(
        @NotBlank String name,
        String description,
        String imageUrl,
        @NotNull Integer price


) {
}
