package test;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class ApplicationDetails {
	
	@Id
	@GeneratedValue
	private int appnumber;
	private Date date;
	private int userid;
	private String status;
	private String comment;
	
	public ApplicationDetails()
	{
		
	}
	
	public ApplicationDetails(Date date, int userid, int appnumber, String status, String comment) {
		super();
		this.date = date;
		this.userid = userid;
		this.appnumber = appnumber;
		this.status = status;
		this.comment = comment;
	}
	
	public ApplicationDetails(Date date, int userid,String status, String comment) {
		super();
		this.date = date;
		this.userid = userid;
		this.status = status;
		this.comment = comment;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getAppnumber() {
		return appnumber;
	}
	public void setAppnumber(int appnumber) {
		this.appnumber = appnumber;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	@Override
	public String toString() {
		return "ApplicationDetails [date=" + date + ", userid=" + userid + ", appnumber=" + appnumber + ", status="
				+ status + ", comment=" + comment + "]";
	}
	
	
}
