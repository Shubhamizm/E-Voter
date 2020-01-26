package com.cdacproject.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cdacproject.models.ApplicationDetails;
import com.cdacproject.models.UserApplication;
import com.cdacproject.models.UserDetails;
import com.cdacproject.repositories.ApplicationDetailsRepository;
import com.cdacproject.repositories.UserApplicationRepository;
import com.cdacproject.repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class OnlineVoterServices {
	
	@Autowired
	ServletContext context;
	
	@Autowired
	UserRepository UserRepo;
	
	@Autowired
	ApplicationDetailsRepository AppRepo;
	
	@Autowired
	UserApplicationRepository UserApp;
	
	public OnlineVoterServices()
	{
		
	}
	
	
	static String getimage(String url) throws IOException
	{
		String image;
		String encodeBase64 = null;
		//File file = new File("E:\\Online Voter\\Online-VoterID-Backend\\src\\main\\Userimages\\"+url);
		File file = new File("\\userprofile\\"+url);
		String extension = FilenameUtils.getExtension(file.getName());
		FileInputStream fs = new FileInputStream(file);
		byte[] bytes = new byte[(int)file.length()];
		fs.read(bytes);
		encodeBase64 = Base64.getEncoder().encodeToString(bytes);
		image = "data:image/"+extension+";base64,"+encodeBase64;
		return image;
		
		
	}
	
	public String addapplication(MultipartFile file, String user ) throws JsonMappingException, JsonProcessingException
	{
		
		UserApplication ud = new ObjectMapper().readValue(user, UserApplication.class);	
		System.out.println(ud.getUserid());
		System.out.println(ud);
		ApplicationDetails ad = new ApplicationDetails(new Date(), ud.getUserid(), "Pending", "No comments" );
		AppRepo.save(ad);
		System.out.println(ud);
		
		//boolean isExist = new File(context.getRealPath("/userprofile/")).exists();

		boolean isExist = new File("/userprofile/").exists();
		if(!isExist)
		{
			//new File(context.getRealPath("/userprofile/")).mkdir();
			new File("/userprofile/").mkdir();
		}
		
		
		String filename = file.getOriginalFilename();
	//	File serverfile = new File("E:\\Online Voter\\Online-VoterID-Backend\\src\\main\\Userimages"+File.separator+filename);
		//File serverfile = new File(context.getRealPath("/userprofile/"+File.separator+filename));
		File serverfile = new File("/userprofile/"+File.separator+filename);
		try {
			
			FileUtils.writeByteArrayToFile(serverfile, file.getBytes());
			System.out.println(filename);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		ud.setAadharimgname(filename);
		UserApp.save(ud);
	
		
		return "Application Received!!";
		
	}
	
	public String adduser(UserDetails user)
	{
		System.out.println("here");
		System.out.println(user);
		UserDetails ne = new UserDetails(user.getFullname(),user.getEmail(),"user",user.getPassword());
		UserRepo.save(ne);
		return "User Added!!";
	}
	
	public List<ApplicationDetails> getdetails()
	{
		return AppRepo.findAll();
		
	}

	
	public UserDetails login(String email, String password)
	{
		UserDetails temp = UserRepo.findbyemail(email);
		if(temp!=null)
		{
			if(temp.getEmail().equalsIgnoreCase(email) && temp.getPassword().equalsIgnoreCase(password))
			{
				return new UserDetails(temp.getUserid(),temp.getFullname(),temp.getEmail(),temp.getRole());
			}
			else 
				return null;
		}
		else
			return null;		
	}
	
	public boolean update(ApplicationDetails ad)
	{
		ApplicationDetails add = AppRepo.findById(ad.getAppnumber()).orElse(null);
		if(add!=null)
		{
		add.setComment(ad.getComment());
		add.setStatus(ad.getStatus());
		AppRepo.save(add);
		return true;
		}
		else
			return false;
	
	}
	
	public UserApplication getapplication(int mn) throws IOException
	{
		int uid=1000; 
		
		ApplicationDetails appdetails = AppRepo.findById(mn).orElse(null);
		if(appdetails!=null)
		{
		System.out.println(appdetails);
		uid = appdetails.getUserid();
		UserApplication up = UserApp.findbyuserid(uid);
		up.setAadharimg(getimage(up.getAadharimgname()));
		return up;
		}
		else
			return null;
	}
	
	
	public boolean edit(UserDetails n)
	{
		UserDetails user = UserRepo.findById(n.getUserid()).orElse(null);
	
			if(user!=null)
			{
				user.setFullname(n.getFullname());
				user.setEmail(n.getEmail());
				user.setPassword(n.getPassword());
				UserRepo.save(user);
				System.out.println(user);
				return true;
			}
			else {
				System.out.println(n);
				return false;
			}
		}
	
	}
	
