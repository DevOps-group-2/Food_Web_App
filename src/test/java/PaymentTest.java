/*
import dal.PaymentDal;
import service.payment.Payment;
import org.junit.jupiter.api.Test;

public class PaymentTest {
*/
/*
    Payment payment;
    PaymentDal paymentDal;
*//*


    public PaymentTest() {
        //String id = "" + Math.random();


    }

    @Test
    public void setPaymentStatusDBTest(){

        String id = "" + Math.random();

        PaymentDal paymentDal = new PaymentDal();
        Payment payment = new Payment();
        payment.orderId = id;
        payment.amount = 20;
        payment.email = "zeeeeee45@gmail.com";
        payment.tokenId = "myTockenId";
        payment.name = "Customer Name";



        paymentDal.createCheckoutDB(payment, true);

*/
/*        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        PaymentDB paymentDB = session.get(PaymentDB.class, payment.customerId);

        assertEquals(payment.name, paymentDB.getName());
        assertEquals(payment.email, paymentDB.getEmail());
        assertEquals(payment.customerId, paymentDB.getCustomerId());

        assertEquals(paymentDB.getPaymentSuccess(), "true");
        session.close();*//*


    }


*/
/*    @Test
    public void updateTest(){
        PaymentDal paymentDal = new PaymentDal();
        paymentDal.setPaymentSuccessDB(payment.customerId, true);


        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        PaymentDB paymentDB = session.get(PaymentDB.class, payment.customerId);

        assertEquals(payment.name, paymentDB.getName());
        assertEquals(payment.email, paymentDB.getEmail());
        assertEquals(payment.customerId, paymentDB.getCustomerId());
        assertEquals(paymentDB.getPaymentSuccess(), "true");
        session.close();

    }*//*

}
*/
