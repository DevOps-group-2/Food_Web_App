import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;
import org.mindrot.jbcrypt.BCrypt;

import java.io.File;

public class main {
    public static void main(String[] args) {
        Tomcat tomcat = new Tomcat();
        tomcat.setBaseDir("temp");
        String port = System.getenv("DevOps");
        port = port !=null ? port:"8080";

        tomcat.setPort(Integer.parseInt(port));
        tomcat.getConnector();
        tomcat.addWebapp("",new File("src/main/webapp").getAbsolutePath());

        try {
            tomcat.start();
            tomcat.getServer().await();
        } catch (LifecycleException e) {
            throw new RuntimeException(e);
        }

    }
}