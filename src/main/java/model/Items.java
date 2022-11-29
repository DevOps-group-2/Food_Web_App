package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name="DBItems") //!!WATCH out this is a reserved name!
public class Items {

    @Id
    @GeneratedValue
    @Column(name="idOrder")
    public int idOrder;

    @GeneratedValue
    @Column(name="id")
    @NotNull
    private String id; // = UUID.randomUUID().toString();

    @Column(name="menu")
    @NotNull
    private String menu;

    @Column(name="price")
    @NotNull
    private double price;

    @Column(name="status")
    @NotNull
    private boolean status;

    @Column(name="created")
    @NotNull
    private String created;

    @Column(name="amount")
    @NotNull
    private int amount;

    @ManyToOne(targetEntity = Order.class, cascade=CascadeType.ALL)
    @JoinColumn()
    @JsonIgnore
    private Order order;

}