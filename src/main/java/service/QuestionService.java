package service;

import dal.HibernateController;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import model.Question;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.criteria.JpaCriteriaQuery;

import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("question")
public class QuestionService {
    static final SessionFactory sessionFactory = new HibernateController("pgtest.grp2.diplomportal.dk:5432/pg").getSessionFactory();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createCustomerData(Question question){
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.persist(question);
        transaction.commit();
        Transaction readTransaction = session.beginTransaction();
        readTransaction.commit();
        session.close();
        return Response.ok(question.getId()).build();
    }

    @GET
    public List<Question> getQuestion() {
        Session session = sessionFactory.openSession();
        JpaCriteriaQuery<Question> query = session.getCriteriaBuilder().createQuery(Question.class);
        query.from(Question.class);
        List<Question> data = session.createQuery(query).getResultList();
        return data;
    }

}
