package model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;

import java.util.List;

@Entity
@Table(name="DBOrders") //!!WATCH out this is a reserved name!
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Order {

    @Id @GeneratedValue
    @Column(name="idOrder")
    private int idOrder;

    @Column(name="orderedTotalPrice")
    private int orderedTotalPrice;

    @OneToMany(mappedBy="order",cascade = CascadeType.ALL)
    //@Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<Items> orderedFoodProducts;
}