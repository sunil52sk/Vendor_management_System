package com.example.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.springapp.model.VendorsModel;
import com.example.springapp.repository.VendorRepo;

@Service
public class VendorService {
	@Autowired
	VendorRepo vr;
	public VendorsModel addinfo(VendorsModel v) {
		return vr.save(v);
	}
	
	public List<VendorsModel> retriveinfo(){
		return vr.findAll();
	}
	public List<VendorsModel> retrivebyjpqa(){
		return vr.fetchAll();
	}
	public List<VendorsModel> retrivebynameandid(int id,String name){
		return vr.fetchByNameAndId(id,name);
	}
	public List<VendorsModel> addninfo(List<VendorsModel> v){
		return vr.saveAll(v);
	}
	
	public VendorsModel changeinfo(VendorsModel ss) {
		return vr.saveAndFlush(ss);
	}
	public void deleteinfo(VendorsModel ss) {
		vr.delete(ss);
	}
	public void deleteinfobyid(int id) {
		vr.deleteById(id);
	}
	public void deleteinfobyparams(int id) {
		vr.deleteById(id);
	}
	public Optional<VendorsModel> retrivebyid(int id) {
		return vr.findById(id);
	}
	public String changebyid(VendorsModel v,int id) {
		if(vr.existsById(id)) {
			vr.saveAndFlush(v);
			return "Updated sucessfully";
		}
		else
		return "Enter valid id";
	}
	public List<VendorsModel> sortinfo(String s){
		return vr.findAll(Sort.by(Sort.DEFAULT_DIRECTION,s));
	}
	public List<VendorsModel> pagingtheinfo(int pageno,int pagesize,String field){
		Page<VendorsModel> p=vr.findAll(PageRequest.of(pageno, pagesize,(Sort.by(Sort.DEFAULT_DIRECTION,field))));
		return p.getContent();
	}
	public void deletebyjpqa(int id) {
		vr.deletemebyid(id);
		return;
	}
	public void changebyjpqa(int id1,int id2) {
		vr.updatemebyid(id1, id2);
		return;
	}
}
