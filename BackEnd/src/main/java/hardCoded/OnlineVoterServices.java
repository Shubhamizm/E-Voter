package hardCoded;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
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
	
	public OnlineVoterServices()
	{
		UserDetails ua = new UserDetails(4,"Shubham","shubham@root.com","admin","shubham");
		UserDetails uu = new UserDetails(5,"Shubham","shubham@user.com","user","shubham");
		users.add(ua);
		users.add(uu);
		//UserRepo.save(ua);
		
	}
	private static List<UserDetails> users = new ArrayList<>();
	private static List<UserApplication> userapp = new ArrayList<>();
	private static List<ApplicationDetails> appdetails = new ArrayList<>();
	private static int idCounter = 0;
	private static int appCounter = 500;
	
	
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
		ApplicationDetails ad = new ApplicationDetails(new Date(), ud.getUserid(), ++appCounter, "Pending", "No comments" );
		appdetails.add(ad);
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
		userapp.add(ud);
		
		return "Application Received!!";
		
	}
	
	public String adduser(UserDetails user)
	{
		System.out.println("here");
		System.out.println(user);
		UserDetails us = new UserDetails(++idCounter, user.getFullname(),user.getEmail(),"user",user.getPassword());
		users.add(us);
		return "User Added!!";
	}
	
	public List<ApplicationDetails> getdetails()
	{
		return appdetails;
		
	}

	
	public UserDetails login(String email, String password)
	{
		for (UserDetails userDetails : users)
		{
			if(userDetails.getEmail().equalsIgnoreCase(email) && userDetails.getPassword().equalsIgnoreCase(password))
			{
					return new UserDetails(userDetails.getUserid(), userDetails.getFullname(), userDetails.getEmail(), userDetails.getRole());
			}
		}
		
			return null;
		
	}
	
	public boolean update(ApplicationDetails ad)
	{
		for (ApplicationDetails applicationDetails : appdetails) {
			
			if(applicationDetails.getAppnumber()==ad.getAppnumber())
			{
				int i = appdetails.indexOf(applicationDetails);
				ApplicationDetails add = appdetails.get(i);
				add.setComment(ad.getComment());
				add.setStatus(ad.getStatus());
				return true;
			}		
			
		}
		
		return false;
	}
	
	public UserApplication getapplication(int mn) throws IOException
	{
		int uid=1000; 
		for (ApplicationDetails applicationDetails : appdetails) 
		{
			if(applicationDetails.getAppnumber()==mn)
			{
				 uid = applicationDetails.getUserid();
				
			}
		}
		
		for (UserApplication us : userapp) 
		{
			if(us.getUserid()==uid)
			{
				us.setAadharimg(getimage(us.getAadharimgname()));
				return us;
				
			}
			
		}
		
		return null;
	}
	
	public boolean edit(UserDetails n)
	{
		for (UserDetails ud : users) 
		{
			System.out.println(ud.getUserid());
			if(ud.getUserid()==n.getUserid())
			{
			
				ud.setFullname(n.getFullname());
				ud.setEmail(n.getEmail());
				ud.setPassword(n.getPassword());
				System.out.println(ud);
				return true;
			}
		}
		System.out.println(n);
		return false;
	}
	
}
