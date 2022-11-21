package service.payment;

import com.stripe.model.Event;
import com.stripe.net.Webhook;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.server.ContainerRequest;


import java.io.StringWriter;

@Path("stripe")
@Produces(MediaType.APPLICATION_JSON)

public class StripeEndpointResource {

    public StripeEndpointResource() {
    }

    @POST
    @Path("webhook")
    public Response webhook(@Context ContainerRequest request) {

        System.out.println("from backend.");
        try{
            String endpointSecret = System.getenv("STRIPE_ENDPOINT_SECRET");
            StringWriter writer = new StringWriter();
            IOUtils.copy(request.getEntityStream(), writer, "UTF-8");
            String body = writer.toString();
            String sigHeader = request.getHeaderString("Stripe-Signature");
            Event event = Webhook.constructEvent(body, sigHeader, endpointSecret);

            System.out.println("got an event of type : "+event.getType());

        }catch(Exception e){
            System.out.println("Stripe backend failed!");
            e.printStackTrace();
        }

        return Response.ok().build();
    }
}