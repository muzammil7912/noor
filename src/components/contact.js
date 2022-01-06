import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
function Contact() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    comment: "",
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    phone: yup.number().required("Required").min(11, "Minimum atleast 11"),

    email: yup.string().email().required("Required"),
    comment: yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.send(
        "service_f7qdyha",
        "template_hfegy8w",
        values,
        "user_QAL043Rfl9Ulut58mF9Da"
      );

      toast.success("Thanks for filling out our form!");
      resetForm();
    } catch (e) {
      toast.warn("Please Check Your Internet Connection");
    }
  };
  return (
    <section className="contact my-5" id="contact">
      <h1>
        <span>contact</span>us
      </h1>
      <hr className="w-25 m-auto mb-5" />

      <div className="content">
        <p>
          Have a question or comment? Use the form below to send us a message or
          contact us by mail at noorbrothersonline@gmail.com
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange
        >
          <Form>
            <label>Your Name :</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className="box"
            />
            <ErrorMessage
              name="name"
              render={(msg) => (
                <div style={{ color: "red", fontSize: "16px" }}>{msg}</div>
              )}
            ></ErrorMessage>
            <label>Your Phone :</label>
            <Field
              type="tel"
              name="phone"
              placeholder="Enter your Phone"
              className="box"
            />
            <ErrorMessage
              name="phone"
              render={(msg) => (
                <div style={{ color: "red", fontSize: "16px" }}>{msg}</div>
              )}
            ></ErrorMessage>
            <label>Your Email :</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="box"
            />
            <ErrorMessage
              name="name"
              render={(msg) => (
                <div style={{ color: "red", fontSize: "16px" }}>{msg}</div>
              )}
            ></ErrorMessage>
            <label>Your comment :</label>
            <Field
              name="comment"
              id=""
              as="textarea"
              cols="40"
              rows="5"
              className="box"
              placeholder="Leave Your comment Here"
            ></Field>
            <ErrorMessage
              name="comment"
              render={(msg) => (
                <div style={{ color: "red", fontSize: "16px" }}>{msg}</div>
              )}
            ></ErrorMessage>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default Contact;
