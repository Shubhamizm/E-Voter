package com.cdacproject.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value=Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown=true)
@Entity
public class UserApplication {
	
	@Id
	@GeneratedValue
	private int srno;
	private int userid;
	private String fullname;
	private String fathername;
	private String mothername;
	private String address;
	private String aadhar;
	private String aadharimg;
	private String aadharimgname;
	
	public UserApplication()
	{
		
	}
	
	
	public UserApplication(int userid,String fullname, String fathername, String mothername, String address, String aadhar,
			String aadharimg) {
		super();
		this.userid=userid;
		this.fullname = fullname;
		this.fathername = fathername;
		this.mothername = mothername;
		this.address = address;
		this.aadhar = aadhar;
		this.aadharimg = aadharimg;
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


	public String getFathername() {
		return fathername;
	}


	public void setFathername(String fathername) {
		this.fathername = fathername;
	}


	public String getMothername() {
		return mothername;
	}


	public void setMothername(String mothername) {
		this.mothername = mothername;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getAadhar() {
		return aadhar;
	}


	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}


	public String getAadharimg() {
		return aadharimg;
	}


	
	public String getAadharimgname() {
		return aadharimgname;
	}


	public void setAadharimgname(String aadharimgname) {
		this.aadharimgname = aadharimgname;
	}


	public void setAadharimg(String aadharimg) {
		this.aadharimg = aadharimg;
	}


	@Override
	public String toString() {
		return "UserApplication [fullname=" + fullname + ", fathername=" + fathername + ", mothername=" + mothername
				+ ", address=" + address + ", aadhar=" + aadhar + ", aadharimg=" + aadharimg + "]";
	}
	
	
	
	

}
