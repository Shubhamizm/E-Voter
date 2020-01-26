package com.cdacproject.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdacproject.models.ApplicationDetails;


@Repository
@Transactional
public interface ApplicationDetailsRepository extends JpaRepository<ApplicationDetails, Integer> {
	
	@Query(value = "select * from application_details where userid=?1",nativeQuery = true)
	ApplicationDetails findbyuserid(int userid);

}
