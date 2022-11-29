package service;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import model.Items;
import org.hibernate.Session;
import org.hibernate.query.criteria.JpaCriteriaQuery;
import java.util.List;

import static service.QuestionService.sessionFactory;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

@Path("items")
public class ItemsService {

    @GET
    public List<Items> getOrders() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Items> query = session.getCriteriaBuilder().createQuery(Items.class);
        query.from(Items.class);
        List<Items> data = session.createQuery(query).getResultList();
        return data;
    }
}
