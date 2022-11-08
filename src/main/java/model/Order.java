package model;

import jakarta.persistence.*;
/*
key={data.id}
menu={data.menu}
amount={data.amount}
price={data.price}
*/

@Entity
@Table(name = "DBUSER") //WATCH out  USER is a reserved name!
public class Order {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int data;
    @Column(name = "menu")
    private String menu;
    @Column(name = "amount")
    private String amount;
    @Column(name = "price")
    private String price;

}
// TODO: Remember Getters and setters as well
