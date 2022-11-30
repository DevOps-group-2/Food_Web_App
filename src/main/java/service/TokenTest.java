package service;

import dal.JWTHandler;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import model.User;
import model.tokenDTO;


@Path("validate")
public class TokenTest{
    @POST
    @Path("tokenTest")
    public User postToken(tokenDTO token) throws NotAuthorizedException{
        try {
            try {
                User user =  JWTHandler.validate(token.getToken());
                return user;
            }
            catch (RuntimeException e){
                throw new NotAuthorizedException("bad token");
            }
        }
        catch (RuntimeException e){
            throw new NotAuthorizedException("bad token");
        }
    }
}
