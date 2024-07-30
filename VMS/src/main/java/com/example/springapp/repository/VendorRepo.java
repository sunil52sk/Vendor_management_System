package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springapp.model.VendorsModel;

import jakarta.transaction.Transactional;

public interface VendorRepo extends JpaRepository<VendorsModel, Integer>{
	@Query(value="select * from vendors",nativeQuery=true)
	public List<VendorsModel>fetchAll(); 
	@Query(value="select * from vendors  where vendor_id= :pid or name= :pname",nativeQuery=true)
	public List<VendorsModel> fetchByNameAndId(@Param("pid") int vendorid,@Param("pname") String name);
	@Transactional
	@Modifying
	@Query(value="delete from vendors where vendor_id= :para",nativeQuery = true )
	public void deletemebyid(@Param("para") int id);
	@Transactional
	@Modifying
	@Query(value="update vendors set vendor_id= ?2 where vendor_id= ?1",nativeQuery = true )
	public void updatemebyid( int oldid,int newid);
}