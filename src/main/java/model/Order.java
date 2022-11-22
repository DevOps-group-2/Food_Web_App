package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
@Data
@NoArgsConstructor
public class Order {
    private String orderedFoodProducts;
}