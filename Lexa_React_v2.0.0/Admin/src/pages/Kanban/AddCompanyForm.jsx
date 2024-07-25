import React, { useState } from 'react';
import "./CompanyForm.css";
// import { unstable_ImmediatePriority } from 'preact/compat';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

// const axiosAPI = axios.create();
//  const AddCompanyForm = () => {
//     const navigate = useNavigate(); 
//     const [showForm, setShowForm] = useState(true);
//     const [companyData, setCompanyData] = useState({
//         logoUrl: '',
//         CompanyName: '',
//         description: '',
//         eligibility: '',
//         packageoffered: '',
//         applied: '',
//         role: ''
//     });

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
    

    

const AddCompanyForm = () => {
    const [companyData, setCompanyData] = useState({
        // logoUrl: '',
        CompanyName: '',
        description: '',
        eligibility: '',
        packageoffered: '',
        applied: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({ ...companyData, [name]: value });
    };

    const handleFileChange = (e) => {
        setCompanyData({ ...companyData, logoUrl: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        // formData.append('logoUrl', companyData.logoUrl);
        formData.append('CompanyName', companyData.CompanyName);
        formData.append('description', companyData.description);
        formData.append('eligibility', companyData.eligibility);
        formData.append('packageoffered', companyData.packageoffered);
        formData.append('applied', companyData.applied);
        formData.append('role', companyData.role);

        try {
            const response = await axios.post('http://localhost:4000/api/postData', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submitted successfully');
            console.log('Response:', response.data); // Log the response from backend
            window.location.href = "/kanbanboard"; // Redirect after successful submission
        } catch (err) {
            console.error('Error submitting form:', err); // Log any error
        }
    };

    return (
        <div className="add-company-form">
            <form onSubmit={handleSubmit} className="company-form">
                <h2>Add Company</h2>
                {/* <label htmlFor="logoUrl">Company Logo:</label>
                <input type="file" accept="image/*" id="logoUrl" name="logoUrl" onChange={handleFileChange} /> */}

                <label htmlFor="CompanyName">Company Name:</label>
                <input type="text" id="CompanyName" name="CompanyName" value={companyData.CompanyName} onChange={handleChange} placeholder="Enter company name" />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={companyData.description} onChange={handleChange} placeholder="Enter company description"></textarea>

                <label htmlFor="eligibility">Eligibility:</label>
                <input type="text" id="eligibility" name="eligibility" value={companyData.eligibility} onChange={handleChange} placeholder="Enter eligibility details" />

                <label htmlFor="packageoffered">Package:</label>
                <input type="text" id="packageoffered" name="packageoffered" value={companyData.packageoffered} onChange={handleChange} placeholder="Enter package details" />

                <label htmlFor="applied">Applied:</label>
                <input type="text" id="applied" name="applied" value={companyData.applied} onChange={handleChange} placeholder="Enter applied details" />

                <label htmlFor="role">Role:</label>
                <input type="text" id="role" name="role" value={companyData.role} onChange={handleChange} placeholder="Enter role details" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddCompanyForm;
