import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgbxlae",
        "template_zdsap2r",
        form.current,
        "_mTHymHNmkEjIaMS1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const formik = useFormik({
      initialValues: {
        fullName: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        fullName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form
        ref={form}
        // onSubmit={sendEmail}
        className="contact-form"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="contact-form-inputs"
          id="fullName"
          type="text"
          {...formik.getFieldProps("FullName")}
          placeholder="Full Name"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div>{formik.errors.fullName}</div>
        ) : null}

        <input
          id="email"
          className="contact-form-inputs"
          type="text"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <input
          id="message"
          className="contact-form-inputs"
          type="textarea"
          placeholder="Message"
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}

        <button
          type="submit"
          className="btn btn-info text-white contact-button"
        >
          Submit
        </button>
      </form>
    );
  };
};
