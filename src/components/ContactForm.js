import { useFormik } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="ContactForm" onSubmit={formik.handleSubmit}>
      <input
        className="ContactBoxes"
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
        placeholder="First"
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <input
        id="lastName"
        className="ContactBoxes"
        type="text"
        placeholder="Email"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <input
        id="email"
        className="ContactBoxes"
        type="textarea"
        placeholder="Message"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit" className="btn btn-info text-white ContactButton">
        Submit
      </button>
    </form>
  );
};
