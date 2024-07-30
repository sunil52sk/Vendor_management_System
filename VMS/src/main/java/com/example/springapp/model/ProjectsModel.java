package com.example.springapp.model;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
@Entity
public class ProjectsModel {
	@Id
	private int projectCode;
	private String title;
	private Date startDate,endDate;
	private long budget;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn
	private List<CompanyModel> com;
	public ProjectsModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProjectsModel(int projectCode, String title, Date startDate, Date endDate, long budget,
			List<CompanyModel> com) {
		super();
		this.projectCode = projectCode;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.budget = budget;
		this.com = com;
	}
	public int getProjectCode() {
		return projectCode;
	}
	public void setProjectCode(int projectCode) {
		this.projectCode = projectCode;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public long getBudget() {
		return budget;
	}
	public void setBudget(long budget) {
		this.budget = budget;
	}
	public List<CompanyModel> getCom() {
		return com;
	}
	public void setCom(List<CompanyModel> com) {
		this.com = com;
	}
	
}
