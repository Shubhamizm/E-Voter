package com.cdacproject.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdacproject.models.ApplicationDetails;
import com.cdacproject.models.UserApplication;
import com.cdacproject.models.UserDetails;
import com.cdacproject.services.OnlineVoterServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;


@CrossOrigin(origins = "*")
@RestController
public class FrontController {
	
	@Autowired
	OnlineVoterServices service;
	
	public FrontController()
	{
		
	}

	
	
	@PostMapping("/login")
	public UserDetails login(@RequestBody HashMap<String,String> data )
	{	
		return service.login(data.get("email"), data.get("password"));
	}
	
	
	@PostMapping("/add")
	public boolean addapp(@RequestParam("file") MultipartFile file, @RequestParam("user") String user) throws JsonMappingException, JsonProcessingException
	{
		String res = service.addapplication(file, user);
		System.out.println(res);
		return true;
		
	}
	
	@PostMapping("/signup")
	public boolean signup(@RequestBody UserDetails n )
	{
		System.out.println("signupcontrol");
		String res = service.adduser(n);
		System.out.println(res);
		return true;
	}
	
	@PostMapping("/update")
	public boolean update(@RequestBody ApplicationDetails n )
	{
		return service.update(n);
	}
	
	@PostMapping("/editprofile")
	public boolean edit(@RequestBody UserDetails n )
	{
		return service.edit(n);
	}
	
	@GetMapping("/getdetails")
	public List<ApplicationDetails> testdetails()
	{
		 return service.getdetails();

		
	}
	
	@GetMapping("/getdata")
	public UserApplication getdata(@RequestParam("x") int mn) throws IOException
	{
		return service.getapplication(mn);
	}

}
