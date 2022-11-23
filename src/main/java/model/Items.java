package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
    //@GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private String id; // = UUID.randomUUID().toString();

    @Column(name="menu")
    private String menu;

    @Column(name="price")
    private double price;

    @Column(name="amount")
    private int amount;

    @ManyToOne
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