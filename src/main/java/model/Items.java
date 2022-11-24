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

    @Id @GeneratedValue
    @Column(name="idOrder")
    private int idOrder;

    //@GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    @NotNull
    private String id; // = UUID.randomUUID().toString();

    @Column(name="menu")
    @NotNull
    private String menu;

    @Column(name="price")
    @NotNull
    private double price;

    @Column(name="amount")
    @NotNull
    private int amount;

    @ManyToOne(targetEntity = Order.class, cascade=CascadeType.ALL)
    @JoinColumn
    @JsonIgnore
    private Order order;

    //Hibernate requires no-args constructor
    //public Items(){}
/*
    public Items(int id, String menu, Double price, int qty, Order c){
        this.id=id;
        this.menu=menu;
        this.price=price;
        this.amount=qty;
        this.order1=c;
    }*/
}