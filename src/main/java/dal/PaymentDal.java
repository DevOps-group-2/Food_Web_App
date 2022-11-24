package dal;

import model.MyCustomer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import service.payment.Payment;
import utility.GlobalVariable;

public class PaymentDal {
    private String customerId;

    public PaymentDal(String customerId) {
        this.customerId = customerId;
    }


    public void setPaymentStatusDB(Payment payment, boolean status){
        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        MyCustomer myCustomer = new MyCustomer();
        myCustomer.setName(payment.name);
        myCustomer.setEmail(payment.email);
        myCustomer.setCustomerId(payment.customerId);
        myCustomer.setTokenId(payment.tokenId);
        myCustomer.setAmount(payment.amount);
        myCustomer.setPaymentSuccess(false);

        session.persist(myCustomer);
        transaction.commit();
        session.close();

    }

    public void wrapperTest(String customerId) {

        String HOST = GlobalVariable.HOST;
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction readTransaction = session.beginTransaction();

        MyCustomer readMyCustomer = session.get(MyCustomer.class,  customerId);
        readMyCustomer.setPaymentSuccess(true);
        session.update(readMyCustomer);
        readTransaction.commit();
        session.close();

    }
}


