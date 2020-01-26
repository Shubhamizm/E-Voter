package test;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
@Transactional
public interface ApplicationDetailsRepository extends JpaRepository<ApplicationDetails, Integer> {
	
	@Query(value = "select * from application_details where userid=?1",nativeQuery = true)
	ApplicationDetails findbyuserid(int userid);

}
