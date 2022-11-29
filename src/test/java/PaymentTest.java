import dal.HibernateController;
import dal.PaymentDal;
import model.PaymentDB;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import service.payment.Payment;
import utility.GlobalVariable;
import org.junit.jupiter.api.Test;

import static org.testng.AssertJUnit.*;

public class PaymentTest {
    String id = "" + Math.random();
    Payment payment = new Payment();


    public PaymentTest() {

    }

    @Test
    public void setPaymentStatusDBTest(){
        PaymentDal paymentDal = new PaymentDal(id);
        payment.customerId = id;
        payment.amount = 20;
        payment.email = "zeeeeee45@gmail.com";
        payment.tokenId = "myTockenId";
        payment.name = "Customer Name";
        paymentDal.createCheckoutDB(payment, false);


        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        PaymentDB paymentDB = session.get(PaymentDB.class, this.id);

        assertEquals(payment.name, paymentDB.getName());
        assertEquals(payment.email, paymentDB.getEmail());
        assertEquals(payment.customerId, paymentDB.getCustomerId());

        assertEquals(paymentDB.getPaymentSuccess(), "false");
        session.close();

    }


    @Test
    public void updateTest(){
        PaymentDal paymentDal = new PaymentDal(id);
        paymentDal.setPaymentSuccessDB(id, true);


        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        PaymentDB paymentDB = session.get(PaymentDB.class, this.id);

        assertEquals(payment.name, paymentDB.getName());
        assertEquals(payment.email, paymentDB.getEmail());
        assertEquals(payment.customerId, paymentDB.getCustomerId());
        assertEquals(paymentDB.getPaymentSuccess(), "true");


    }
}
