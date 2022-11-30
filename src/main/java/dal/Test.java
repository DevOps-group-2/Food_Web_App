package dal;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import model.*;
import org.mindrot.jbcrypt.BCrypt;
import utility.GlobalVariable;


public class Test {
    final static String HOST = GlobalVariable.HOST;

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
    public void testCreateOrder(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Order order = new Order();
        System.out.println("ORDERID before commit: " + order.getIdOrder());
        int i = 1;
        order.setIdOrder(1);
        order.setOrderedTotalPrice(111);

        session.persist(order);
        transaction.commit();
        System.out.println("ORDERID after commit: " + order.getIdOrder());
        Transaction readTransaction = session.beginTransaction();
        Order readOrder = session.get(Order.class, order.getIdOrder());
        System.out.println("Read ORDER back: " + readOrder.toString());

        Items items = new Items();
        int ii = 1;
        order.setIdOrder(1);
        order.setOrderedTotalPrice(111);

        session.persist(items);
        transaction.commit();
        Order readItems = session.get(Items.class, items.getId()).getOrder();

        readTransaction.commit();
        session.close();
    }

    @org.junit.Test
    public void testCreate2(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        CustomerData customerData = new CustomerData();
        System.out.println("UserID before commit: " + customerData.getId());
        customerData.setEmail("usernametest@");
        session.persist(customerData);
        transaction.commit();
        System.out.println("UserID after commit: " + customerData.getId());
        Transaction readTransaction = session.beginTransaction();
        CustomerData readCustomerData = session.get(CustomerData.class, customerData.getId());
        System.out.println("Read user back: " + readCustomerData.toString());
        readTransaction.commit();
        session.close();
    }

    @org.junit.Test
    public void testQuestion(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Message message = new Message();
        System.out.println("Question ID before commit: " + message.getId());
        message.setEmail("test@mail.com");
        session.persist(message);
        transaction.commit();
        System.out.println("Question ID after commit: " + message.getId());
        Transaction readTransaction = session.beginTransaction();
        Message readMessage = session.get(Message.class, message.getId());
        System.out.println("Read quesiton back: " + readMessage.toString());
        readTransaction.commit();
        session.close();
    }

   /* @org.junit.Test
    public void createAdmin() {
        HibernateController hibernateController = new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        LoginData user = new LoginData();
        user.setUsername("admin");
        user.setPassword(BCrypt.hashpw("password", "$2a$10$CwTycUXWue0Thq9StjUM0u"));
        session.persist(user);
        transaction.commit();
        session.close();
    }*/

   //Test for checking if an order is being displayed in the orderTable at the admin page
    @org.junit.Test
    public void testFetchOrder(){
        HibernateController hibernateController =
                new HibernateController(HOST);
        SessionFactory sessionFactory = hibernateController.getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Items items = new Items();
        System.out.println(items.getIdOrder());
        session.persist(items);
        transaction.commit();
        session.close();
    }


}
