package service;

import dal.JWTHandler;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import model.LoginData;
import model.User;


@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {

    @GET
    public String helloWolrd() {
        return "Hello World";
    }
    @POST
    @Path("login")
    public String postLoginData(LoginData login) throws NotAuthorizedException
    {
        if (login!=null && "admin".equals(login.getUsername()) && "password".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
        }
        return null;
    }
}


