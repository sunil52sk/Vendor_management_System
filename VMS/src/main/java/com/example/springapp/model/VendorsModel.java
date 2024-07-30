package com.example.springapp.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
//import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="vendors")
public class VendorsModel {
	@Id
	int vendorId;
	String name,specialization,email,address,contact,domainofwork;
	long spent;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn 
	public ProjectsModel pm;
	public VendorsModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public VendorsModel(int vendorId, String name, String specialization, String email, String address, String contact,
			String domainofwork, long spent, ProjectsModel pm) {
		super();
		this.vendorId = vendorId;
		this.name = name;
		this.specialization = specialization;
		this.email = email;
		this.address = address;
		this.contact = contact;
		this.domainofwork = domainofwork;
		this.spent = spent;
		this.pm = pm;
	}
	public int getVendorId() {
		return vendorId;
	}
	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getDomainofwork() {
		return domainofwork;
	}
	public void setDomainofwork(String domainofwork) {
		this.domainofwork = domainofwork;
	}
	public long getSpent() {
		return spent;
	}
	public void setSpent(long spent) {
		this.spent = spent;
	}
	public ProjectsModel getPm() {
		return pm;
	}
	public void setPm(ProjectsModel pm) {
		this.pm = pm;
	}
	
}
