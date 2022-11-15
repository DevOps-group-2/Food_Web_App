package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name="DBOrder") //!!WATCH out this is a reserved name!
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Order {
    @Id @GeneratedValue
    @Column
    private int id;
    @Column
    private String menu;
    @Column
    private String amount;
    @Column
    private String price;
    @Column @JsonIgnore
    private String hash;
    public Order(int id, String menu, int amount, int price) {

    }
}