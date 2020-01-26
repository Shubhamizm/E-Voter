package hardCoded;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan( basePackages = {"com.cdacproject.models"} )
public class OnlineVoterIdBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineVoterIdBackendApplication.class, args);
	}

}
