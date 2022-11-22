package service;

import dal.HibernateController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import model.Order;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.criteria.JpaCriteriaQuery;

import java.util.ArrayList;
import java.util.List;


@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrderService {
    private static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @POST
    public int createOrder(Order order) {
        Session session = sessionFactory.openSession();
        session.persist(order);
       return order.getId();
    }

    @Path("orders")
    @GET
    public List<Order> getOrders() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Order> query = session.getCriteriaBuilder().createQuery(Order.class);
        query.from(Order.class);
        List<Order> data = session.createQuery(query).getResultList();
        return data;
    }
}

