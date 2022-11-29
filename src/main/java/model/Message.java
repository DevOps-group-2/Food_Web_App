package model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
<<<<<<< HEAD
@Table(name = "message") //WATCH out  USER is a reserved name!
=======
@Table(name = "MESSAGE") //WATCH out  USER is a reserved name!
>>>>>>> Azmi
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Message {
    @Id
    @GeneratedValue
    @Column
    private int id;
    @Column
    private String email;
    @Column
    private String message;
}
