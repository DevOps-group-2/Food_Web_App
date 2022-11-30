package service.payment;

import lombok.Data;

@Data
public class Payment {
    public String email, name, orderId, tokenId;
    public int amount;

}
