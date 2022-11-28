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
        /*order.setId(Collections.singletonList("Food1"));
        order.setMenu(Collections.singletonList("Lasagne"));
        order.setPrice(i);
        order.setAmount(i);*/
        //order.setOrderedFoodProducts();
        session.persist(order);
        transaction.commit();
        System.out.println("ORDERID after commit: " + order.getIdOrder());
        Transaction readTransaction = session.beginTransaction();
        Order readOrder = session.get(Order.class, order.getIdOrder());
        System.out.println("Read ORDER back: " + readOrder.toString());
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
        Question question = new Question();
        System.out.println("Question ID before commit: " + question.getId());
        question.setEmail("test@mail.com");
        session.persist(question);
        transaction.commit();
        System.out.println("Question ID after commit: " + question.getId());
        Transaction readTransaction = session.beginTransaction();
        Question readQuestion = session.get(Question.class, question.getId());
        System.out.println("Read quesiton back: " + readQuestion.toString());
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


}
