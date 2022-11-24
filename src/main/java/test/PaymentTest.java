package test;

import dal.PaymentDal;
import service.payment.Payment;

public class PaymentTest {

    @org.junit.Test
    public void setPaymentStatusDBTest(){
        String id = "sometiningxxxxx";
        PaymentDal paymentDal = new PaymentDal(id);
        Payment payment = new Payment();
        payment.customerId = id;
        payment.amount = 20;
        payment.email = "zeeeeee45@gmail.com";
        payment.tokenId = "kkkkkkk";
        payment.name = "Customer Name";

        paymentDal.setPaymentStatusDB(payment, false);
    }


}
