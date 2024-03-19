import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Row, Col, CardBody, Card, Container, Input, Form } from "reactstrap";
import axios from 'axios';

const Login = () => {
  document.title = "Login | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  // Define state variables for email and password
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // Handle changes in the email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle changes in the password input
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form submission here, such as sending data to backend
    console.log("email:", Email);
    console.log("password:", Password);

    const formData = new FormData();
    formData.append('Email', Email);
    formData.append('Password', Password);
    alert(formData)
    try {
      axios.post('http://localhost:4000/api/CheckUSer', formData)
      .then((res) => {
        console.log(res.body);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [email , Setemail] = useState("");
  const [password, SetPassword] = useState("");
  const EmailCheck = (e) => {
    console.log(e.target.value);
    Setemail(e.target.value);
  }
  const PasswordCheck = (e) => {
    console.log(e.target.value);
    SetPassword(e.target.value);
  }
  const SendData = (e) => {
    console.log(email,password)
  }


  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <h3 className="text-center mt-5 mb-4">
                    <Link to="/" className="d-block auth-logo">
                      {/* Your logo */}
                    </Link>
                  </h3>
                  <div className="p-3">
                    <h4 className="text-muted font-size-18 mb-1 text-center">
                      Welcome Back!
                    </h4>
                    <p className="text-muted text-center">
                      Sign in to continue to Placement.
                    </p>
                    <Form className="form-horizontal mt-4" >
                      <div className="mb-3">
                        <Input
                          name="email"
                          label="Email"
                          value={Email}
                          onChange={EmailCheck}
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <Input
                          name="password"
                          label="Password"
                          value={Password}
                          onChange={PasswordCheck}
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="mb-3 row mt-4">
                        <div className="col-6">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          {/* <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            onClick={SendData}
                          > */}
                          <Link to="/Admin-dashboard" className="text-muted" class="btn btn-success">login</Link>
                            
                          {/* </button> */}
                        </div>
                      </div>
                      <div className="form-group mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/page-recoverpw" className="text-muted">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account?{" "}
                  <Link to="/pages-register" className="text-primary">
                    Signup now
                  </Link>
                </p>
                {/* <p>
                  © {new Date().getFullYear()} Lexa
                  <span className="d-none d-sm-inline-block">
                    {" "}
                    - Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by
                    Themesbrand.
                  </span>
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
