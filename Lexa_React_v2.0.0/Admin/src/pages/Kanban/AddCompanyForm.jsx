import React, { useState } from 'react';
import "./CompanyForm.css";
// import { unstable_ImmediatePriority } from 'preact/compat';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const axiosAPI = axios.create();
 const AddCompanyForm = () => {
    const navigate = useNavigate(); 
    const [showForm, setShowForm] = useState(true);
    const [companyData, setCompanyData] = useState({
        logoUrl: '',
        CompanyName: '',
        description: '',
        eligibility: '',
        packageoffered: '',
        applied: '',
        role: ''
    });

    // const toggleForm = () => {
    //     setShowForm(!showForm);
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setCompanyData({ ...companyData, [name]: value });
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     console.log("Company Data:", companyData);
    //     const{CompanyName,description,eligibility,packageoffered,applied,role}=companyData
    //     await axios.post('https://localhost:4000/dashboard',companyData)
    //     .then((res)=>console.log(res.data))
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }1
    const handlesubmit=(e)=>{
        e.preventDefault();
        const inputfileds=new FormData();
        inputfileds.append('logoUrl',companyData.logoUrl)
        inputfileds.append('CompanyName',companyData.CompanyName)
        inputfileds.append('description',companyData.description)
        inputfileds.append('eligibility',companyData.eligibility)
        inputfileds.append('packageoffered',companyData.packageoffered)
        inputfileds.append('applied',companyData.applied)
        inputfileds.append('role',companyData.role)
        console.log(inputfileds);
        
        try{
            axios.post('http://localhost:4000/api/postData',inputfileds, {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res)=>{
                // console.log(res.body);
                window.location.href="/kanbanboard"
                // navigate('/kanbanboard');
                // Reload the page after successful submission
            });
        }
        catch(err)
        {
            console.log(err)
        }
            //    toggleForm();
    }

  return (
        <div className="add-company-form">

            {showForm && 
                 <form onSubmit={handlesubmit} className="company-form" >
                    <h2>logoUrl</h2>
                    <label htmlFor="logo">Company Logo:</label>
                    <input type="file" accept="image/*" id="logoUrl" name="logoUrl" onChange={(e)=>setCompanyData({...companyData,logoUrl:e.target.files[0]})} />

                    <label htmlFor="name">Company Name:</label>
                    <input type="text" id="CompanyName" name="CompanyName" value={companyData.name} onChange={(e)=>setCompanyData({...companyData,CompanyName:e.target.value})}placeholder="Enter company name" />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={companyData.description} onChange={(e)=>setCompanyData({...companyData,description:e.target.value})} placeholder="Enter company description"></textarea>

                    <label htmlFor="eligibility">Eligibility:</label>
                    <input type="text" id="eligibility" name="eligibility" value={companyData.eligibility} onChange={(e)=>setCompanyData({...companyData,eligibility:e.target.value})} placeholder="Enter eligibility details" />

                    <label htmlFor="package">Package:</label>
                    <input type="text" id="packageoffered" name="packageoffered" value={companyData.package} onChange={(e)=>setCompanyData({...companyData,packageoffered:e.target.value})} placeholder="Enter package details" />

                    <label htmlFor="applied">Applied:</label>
                    <input type="text" id="applied" name="applied" value={companyData.applied} onChange={(e)=>setCompanyData({...companyData,applied:e.target.value})} placeholder="Enter applied details" />

                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" value={companyData.role} onChange={(e)=>setCompanyData({...companyData,role:e.target.value})} placeholder="Enter role details" />

                    <button type="submit">Submit</button>
               
                 </form>
                }
             
        </div>
);
}
export default AddCompanyForm;
