package com.cdacproject.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cdacproject.models.UserDetails;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<UserDetails, Integer>{
	
	@Query(value = "select * from user_details where email=?1",nativeQuery = true)
			UserDetails findbyemail(String email);

}
