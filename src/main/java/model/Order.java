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
    private int amount;
    @Column
    private String foodID;
    @Column
    private String menu;
    @Column
    private int price;

    /*@Column - Gives me error...
    private int[] orderedFoodProducts = new int[]{ id, Integer.parseInt(menu), amount, price };*/

    /*@Column @JsonIgnore
    private String hash;*/
}