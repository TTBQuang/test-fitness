package com.hcmus.foodservice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FoodEntryRequest {

    private UUID foodId;

    private UUID servingUnitId;

    private Double numberOfServings;
}
