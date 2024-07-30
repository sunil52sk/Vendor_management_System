import React, { useState } from 'react';
import './VendorForm.css';
import axios from 'axios';
import Home from './Home';

function VendorForm() {
  const [vendorId, setVendorId] = useState(null);
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [domainofwork, setDomainofwork] = useState('');
  const [spent, setSpent] = useState(null);
  const [projectCode, setProjectCode] = useState(null);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const vendorData = {
      vendorId,
      name,
      specialization,
      email,
      address,
      contact,
      domainofwork,
      spent,
      pm: {
        projectCode,
        title,
        startDate,
        endDate,
        budget,
        com: [
          {
            companyId,
            companyName,
          },
        ],
      },
    };
    axios.post(`http://localhost:8080/addvendors`,vendorData)
    .then(response =>{console.log("added sucessfully");
  alert(`added sucessfully`);})
    .catch(error =>{console.log(error);})
    // Pass the vendor data to a parent component or function for storage.
    // Display the data in the console.
    console.log(vendorData);
    // Reset the form fields.
    setVendorId(null);
    setName('');
    setSpecialization('');
    setEmail('');
    setAddress('');
    setContact('');
    setDomainofwork('');
    setSpent(null);
    setProjectCode(null);
    setTitle('');
    setStartDate('');
    setEndDate('');
    setBudget(null);
    setCompanyId(null);
    setCompanyName('');
  };

  return (
    <>
    <Home/>
    <div className="form-container">

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vendorId" className="form-label">
            Vendor ID:
          </label>
          <input
            type="number"
            id="vendorId"
            value={vendorId || ''}
            onChange={(e) => setVendorId(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization" className="form-label">
            Specialization:
          </label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact" className="form-label">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="domainofwork" className="form-label">
            Domain of Work:
          </label>
          <input
            type="text"
            id="domainofwork"
            value={domainofwork}
            onChange={(e) => setDomainofwork(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="spent" className="form-label">
            Spent:
          </label>
          <input
            type="number"
            id="spent"
            value={spent || ''}
            onChange={(e) => setSpent(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectCode" className="form-label">
            Project Code:
          </label>
          <input
            type="number"
            id="projectCode"
            value={projectCode || ''}
            onChange={(e) => setProjectCode(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate" className="form-label">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget" className="form-label">
            Budget:
          </label>
          <input
            type="number"
            id="budget"
            value={budget || ''}
            onChange={(e) => setBudget(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyId" className="form-label">
            Company ID:
          </label>
          <input
            type="number"
            id="companyId"
            value={companyId || ''}
            onChange={(e) => setCompanyId(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default VendorForm;
