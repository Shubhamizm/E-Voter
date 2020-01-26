package com.cdacproject.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdacproject.models.UserApplication;


@Transactional
@Repository
public interface UserApplicationRepository extends JpaRepository<UserApplication, Integer> {
	
	@Query(value = "select * from user_application where userid=?1",nativeQuery = true)
	UserApplication findbyuserid(int userid);

}
