package service;

import dal.JWTHandler;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import model.LoginData;
import model.User;
import org.mindrot.jbcrypt.*;


@Path("auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {

    @GET
    public String helloWorld() {
        return "Hello World";
    }
    @POST
    @Path("login")
    public String postLoginData(LoginData login) throws NotAuthorizedException
    {
        if (login!=null){
            if("admin".equals(login.getUsername()) && BCrypt.hashpw("password", "$2a$10$CwTycUXWue0Thq9StjUM0u").equals(login.getPassword()) ){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), login.getPassword()));
            }
        }

        return "";
    }
}


