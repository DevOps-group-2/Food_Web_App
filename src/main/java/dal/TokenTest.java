package dal;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import model.User;

public class TokenTest {
    @POST
    @Path("tokentest")
    public User postToken(String token){
        return JWTHandler.validate(token);
    }
}
