package dal;

import model.User;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class HibernateController {//Should be a singleton…
    private final SessionFactory sessionFactory;
    public HibernateController(String dbUrl){
        Configuration configuration = new Configuration(); //NB org.hibernate.cfg.Configuration
        configuration.addAnnotatedClass(User.class); //remember to do this for all DB entities
        configuration.setProperty("hibernate.connection.username", "pg");
        configuration.setProperty("hibernate.connection.password", "de88cff33a1d28c6");
        configuration.setProperty("hibernate.connection.url", "jdbc:postgresql://" + dbUrl);
        configuration.setProperty("hibernate.hbm2ddl.auto","update"); //update Schema - don't do this in prod
        this.sessionFactory = configuration.buildSessionFactory();
    }



    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

}
