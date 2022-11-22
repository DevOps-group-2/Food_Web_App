package model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;

import java.util.List;

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
    private int id;

    @OneToMany(mappedBy="order")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<Items> orderedFoodProducts;

    /*private String id;
    private String menu;
    private int price;
    private int amount;

    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Order> orderedFoodProducts = new ArrayList<>();
*/
    //@ElementCollection()
    //private List<String> orderedFoodProducts;



    /*@ElementCollection()
    @CollectionTable(name="orderedFoodProducts")
    @Column(name="menu")
    private List<String> orderedFoodProducts;
    @CollectionTable(name="orderedFoodProducts")
    @Column(name="price")
    private int price;
    @CollectionTable(name="orderedFoodProducts")
    @Column(name="amount")
    private int amount;*/


    /*@ElementCollection
    @CollectionTable(
            name="orderedFoodProducts",
            joinColumns = @JoinColumn(name="id"))
        @Column(name = "id", "menu", name = "price", name = "time", amount = "amount")
    private Set<String> Images = new HashSet<String>();
*/

    //@CollectionTable(id = "Address", menu = "", price = "", time = "", amount = ""),
    //List<String> orderedFoodProducts = Arrays.asList("id", "menu", "price", "time", "amount");

    /*@Column
    private int id;
    @Column
    private String menu;
    @Column
    private int price;
    @Column
    private String time;
    @Column
    private int amount;*/


    /*@Column - Gives me error...
    private int[] orderedFoodProducts = new int[]{ id, Integer.parseInt(menu), amount, price };*/

    /*@Column @JsonIgnore
    private String hash;*/
}