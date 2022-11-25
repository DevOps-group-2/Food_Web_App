package model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.sql.Time;
import java.util.Date;

import static jakarta.persistence.TemporalType.DATE;
import static jakarta.persistence.TemporalType.TIME;

@Entity
@Data
@Table(name = "test") //WATCH out  USER is a reserved name!
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor

public class CustomerData {
    @Id @GeneratedValue
    @Column
    private int id;
    @Column
    private String email;
    @Column
    private String name;
    @Column
    private int number;
    // Saves as EPOCH if this dara needs to be pulled there need to be converted
    @Column
    @Temporal(DATE)
    private Date date;
}
