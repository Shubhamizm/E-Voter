package test;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class UserDetails {
	
	@Id
	@GeneratedValue
	private int userid;
	private String fullname;
	private String email;
	private String role;
	private String password;
	public UserDetails()
	{
	System.out.println("Hello");	
	}
	public UserDetails(int userid, String fullname, String email, String role, String password) {
		super();
		this.userid = userid;
		this.fullname = fullname;
		this.email = email;
		this.role = role;
		this.password = password;
	}
	public UserDetails(String fullname, String email, String role, String password) {
		super();
		this.fullname = fullname;
		this.email = email;
		this.role = role;
		this.password = password;
	}
	public UserDetails(int userid, String fullname, String email, String role) {
		super();
		this.userid = userid;
		this.fullname = fullname;
		this.email = email;
		this.role = role;
	}
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserDetails [userid=" + userid + ", fullname=" + fullname + ", email=" + email + ", role=" + role
				+ ", password=" + password + "]";
	}
	
	

}
