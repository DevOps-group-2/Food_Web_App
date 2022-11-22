package service.payment;

import lombok.Data;

@Data
public class Payment {
    public int amount;
    public String tokenId;
}
