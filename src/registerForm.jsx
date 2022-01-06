import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
import { setUserSession } from "./utils/common";

function RegisterForm() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    name: yup.string("Should be Sting").required("Must Required"),
    email: yup.string().email("Invaild Email").required("Must Required"),
    password: yup
      .string()
      .min(5, "Mininum 5 length")
      .max(20, "Maximum 20 length")
      .required("Must Required"),
  });

  const onSubmit = (user, { resetForm }) => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("http://localhost:4000/users", user)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        toast.success("Thank you for filling out your information! ... ");
        resetForm();
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 401)
          toast.error("Email in already register ");
        else toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <>
      <div style={{ marginTop: "12rem" }} className="container ">
        <input type="checkbox" id="flip" />
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Sign Up</div>

              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnChange
              >
                <Form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <Field
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                      />
                      <ErrorMessage name="n ame">
                        {(msg) => (
                          <div style={{ color: "red", whiteSpace: "nowrap" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <Field
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div style={{ color: "red", whiteSpace: "nowrap" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <Field
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        autoComplete="on"
                      />
                      <ErrorMessage name="password">
                        {(msg) => (
                          <div style={{ color: "red", whiteSpace: "nowrap" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <button className="btn btn-primary btn-lg" type="submit">
                      Save
                    </button>

                    <div className="text sign-up-text">
                      Already have an account
                      <Link to="/login"> Login now </Link>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="cover">
          <div className="front">
            <img
              src="https://images.pexels.com/photos/821735/pexels-photo-821735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              className="backImg"
              src="https://images.pexels.com/photos/821735/pexels-photo-821735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
