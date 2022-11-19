package dal;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import model.*;


public class Test {
    final static String HOST = "pgtest.grp2.diplomportal.dk:5432/pg";

    @org.junit.Test
    public void testCreate(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        User user = new User();
        System.out.println("UserID before commit: " + user.getId());
        user.setUsername("usernametest");
        session.persist(user);
        transaction.commit();
        System.out.println("UserID after commit: " + user.getId());
        Transaction readTransaction = session.beginTransaction();
        User readUser = session.get(User.class, user.getId());
        System.out.println("Read user back: " + readUser.toString());
        readTransaction.commit();
        session.close();
    }


    @org.junit.Test
    public void testCreate1(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Order order = new Order();
        System.out.println("ORDERID before commit: " + order.getId());
        int i = 1;
        order.setMenu("Kebab Menu");
        order.setAmount(String.valueOf(i));
        order.setPrice(String.valueOf(i));
        session.persist(order);
        transaction.commit();
        System.out.println("ORDERID after commit: " + order.getId());
        Transaction readTransaction = session.beginTransaction();
        Order readOrder = session.get(Order.class, order.getId());
        System.out.println("Read ORDER back: " + readOrder.toString());
        readTransaction.commit();
        session.close();
    }
}
