// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card, CardBody, Label, Form, Alert, Input, FormFeedback } from 'reactstrap';
// import logoDark from "../../assets/images/logo-dark.png";
// import logoLight from "../../assets/images/logo-dark.png";
// import { useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
// import PropTypes from "prop-types";

// // Formik validation
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import withRouter from 'components/Common/withRouter';

// // actions
// import { loginUser, socialLogin } from "../../store/actions";

// const Login = props => {
//   document.title = "Login | Lexa - Responsive Bootstrap 5 Admin Dashboard";

//   const dispatch = useDispatch();

//   const validation = useFormik({
//     // enableReinitialize : use this  flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       email: "admin@themesbrand.com" || '',
//       password: "123456" || '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().required("Please Enter Your Email"),
//       password: Yup.string().required("Please Enter Your Password"),
//     }),
//     onSubmit: (values) => {
//       dispatch(loginUser(values, props.router.navigate));
//     }
//   });


//   const selectLoginState = (state) => state.Login;
//   const LoginProperties = createSelector(
//     selectLoginState,
//     (login) => ({
//       error: login.error
//     })
//   );

//   const {
//     error
//   } = useSelector(LoginProperties);

//   const signIn = type => {
//     dispatch(socialLogin(type, props.router.navigate));
//   };

//   //for facebook and google authentication
//   const socialResponse = type => {
//     signIn(type);
//   };


//   return (
//     <React.Fragment>
//       <div className="account-pages my-5 pt-sm-5">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8} lg={6} xl={5}>
//               <Card className="overflow-hidden">
//                 <CardBody className="pt-0">

//                   <h3 className="text-center mt-5 mb-4">
//                     <Link to="/" className="d-block auth-logo">
//                       <img src={logoDark} alt="" height="30" className="auth-logo-dark" />
//                       <img src={logoLight} alt="" height="30" className="auth-logo-light" />
//                     </Link>
//                   </h3>

//                   <div className="p-3">
//                     <h4 className="text-muted font-size-18 mb-1 text-center">Welcome Back !</h4>
//                     <p className="text-muted text-center">Sign in to continue to Lexa.</p>
//                     <Form
//                       className="form-horizontal mt-4"
//                       onSubmit={(e) => {
//                         e.preventDefault();
//                         validation.handleSubmit();
//                         return false;
//                       }}
//                     >
//                       {error ? <Alert color="danger">{error}</Alert> : null}
//                       <div className="mb-3">
//                         <Label htmlFor="username">Username</Label>
//                         <Input
//                           name="email"
//                           className="form-control"
//                           placeholder="Enter email"
//                           type="email"
//                           onChange={validation.handleChange}
//                           onBlur={validation.handleBlur}
//                           value={validation.values.email || ""}
//                           invalid={
//                             validation.touched.email && validation.errors.email ? true : false
//                           }
//                         />
//                         {validation.touched.email && validation.errors.email ? (
//                           <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
//                         ) : null}
//                       </div>
//                       <div className="mb-3">
//                         <Label htmlFor="userpassword">Password</Label>
//                         <Input
//                           name="password"
//                           value={validation.values.password || ""}
//                           type="password"
//                           placeholder="Enter Password"
//                           onChange={validation.handleChange}
//                           onBlur={validation.handleBlur}
//                           invalid={
//                             validation.touched.password && validation.errors.password ? true : false
//                           }
//                         />
//                         {validation.touched.password && validation.errors.password ? (
//                           <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
//                         ) : null}
//                       </div>
//                       <Row className="mb-3 mt-4">
//                         <div className="col-6">
//                           <div className="form-check">
//                             <input type="checkbox" className="form-check-input" id="customControlInline" />
//                             <label className="form-check-label" htmlFor="customControlInline">Remember me
//                             </label>
//                           </div>
//                         </div>
//                         <div className="col-6 text-end">
//                           <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
//                         </div>
//                       </Row>
//                       <Row className="form-group mb-0">
//                         <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
//                         <div className="col-12 mt-4 d-flex justify-content-center">
//                           <Link
//                             to="#"
//                             className="social-list-item bg-danger text-white border-danger"
//                             onClick={e => {
//                               e.preventDefault();
//                               socialResponse("google");
//                             }}
//                           >
//                             <i className="mdi mdi-google" />
//                           </Link>
//                         </div>
//                       </Row>
//                     </Form>
//                   </div>
//                 </CardBody>
//               </Card>

//               <div className="mt-5 text-center">
//                 <p>Don't have an account ? <Link to="/register" className="text-primary"> Signup Now </Link></p>
//                 © {new Date().getFullYear()} Lexa <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand.</span>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//     </React.Fragment>
//   )
// }

// export default withRouter(Login);

// Login.propTypes = {
//   history: PropTypes.object,
// };
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
                            {/* <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label> */}
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            onClick={SendData}
                          >
                            Log In
                          </button>
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
                <p>
                  © {new Date().getFullYear()} Lexa
                  <span className="d-none d-sm-inline-block">
                    {" "}
                    - Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by
                    Themesbrand.
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
