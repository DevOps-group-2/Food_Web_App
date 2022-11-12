package service;

import dal.JWTHandler;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import model.LoginData;
import model.User;

@Path("loginService")
public class LoginService {
    @POST
    public String postLoginData(LoginData login) throws NotAuthorizedException
    {
        if (login!=null && "admin".equals(login.getUsername()) && "password".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
        }
        return null;
    }
}


