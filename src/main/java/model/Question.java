package model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "QUESTIONS") //WATCH out  USER is a reserved name!
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue
    @Column
    private int id;
    @Column
    private String email;
    @Column
    private String question;
}
