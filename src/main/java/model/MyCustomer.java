package model;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name="DBorderTest")
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor

public class MyCustomer {
    @Id
    @Column
    private String customerId;
    @Column
    private String email;
    @Column
    private String name;
    @Column
    private String tokenId;
    @Column
    private int amount;
    @Column
    private boolean paymentSuccess;

/*    public Customer(String customerId, String email, String name, String tokenId, int amount, boolean paymentSuccess) {

    }*/
}


