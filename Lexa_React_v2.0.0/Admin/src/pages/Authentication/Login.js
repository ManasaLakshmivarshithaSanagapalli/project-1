import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
});

const LoginForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:4000/api/CheckUser', values);
                console.log(response.data);
                if (response.data.message === 'Login successful') {
                    if (response.data.userType === 'user') {
                        navigate('/User-dashboard');
                    } else {
                        navigate('/Admin-dashboard');
                    }
                } else if (response.data.message === 'User registered successfully') {
                    alert('User registered successfully. Please log in.');
                }
            } catch (err) {
                if (err.response) {
                    console.error('Error response:', err.response.data);
                    console.error('Error status:', err.response.status);
                    if (err.response.status === 401) {
                        alert('Invalid email or password');
                    }
                } else if (err.request) {
                    console.error('Error request:', err.request);
                    alert('Server is not responding. Please try again later.');
                } else {
                    console.error('Error message:', err.message);
                }
            }
        }
    });

    return (
        <div>
            <style>{`
                form {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }
                
                form div {
                    margin-bottom: 15px;
                }
                
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                
                input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }
                
                input[type="email"],
                input[type="password"] {
                    font-size: 16px;
                }
                
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                button:hover {
                    background-color: #0056b3;
                }
                
                div > div {
                    color: red;
                    font-size: 14px;
                    margin-top: 5px;
                }
            `}</style>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
