package test;

import dal.HibernateController;
import dal.PaymentDal;
import model.MyCustomer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.testng.annotations.Test;
import service.payment.Payment;
import utility.GlobalVariable;

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
        paymentDal.setPaymentStatusDB(payment, false);


        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        MyCustomer myCustomer = session.get(MyCustomer.class, this.id);

        assertEquals(payment.name, myCustomer.getName());
        assertEquals(payment.email, myCustomer.getEmail());
        assertEquals(payment.customerId, myCustomer.getCustomerId());
        assertFalse(myCustomer.isPaymentSuccess());

    }


    @Test
    public void updateTest(){
        PaymentDal paymentDal = new PaymentDal(id);
        paymentDal.wrapperTest(id);


        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        MyCustomer myCustomer = session.get(MyCustomer.class, this.id);

        assertEquals(payment.name, myCustomer.getName());
        assertEquals(payment.email, myCustomer.getEmail());
        assertEquals(payment.customerId, myCustomer.getCustomerId());
        assertTrue(myCustomer.isPaymentSuccess());


    }
}
