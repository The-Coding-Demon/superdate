import { useFormik } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      Email: "",
      Message: "",
    },
    validationSchema: Yup.object({
      FullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      Email: Yup.string().email("Invalid email address").required("Required"),
      Message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="ContactForm" onSubmit={formik.handleSubmit}>
      <input
        className="ContactFormInputs"
        id="FullName"
        type="text"
        {...formik.getFieldProps("FullName")}
        placeholder="FullName"
      />
      {formik.touched.FullName && formik.errors.FullName ? (
        <div>{formik.errors.FullName}</div>
      ) : null}

      <input
        id="Email"
        className="ContactFormInputs"
        type="text"
        placeholder="Email"
        {...formik.getFieldProps("Email")}
      />
      {formik.touched.Email && formik.errors.Email ? (
        <div>{formik.errors.Email}</div>
      ) : null}

      <input
        id="Message"
        className="ContactFormInputs"
        type="textarea"
        placeholder="Message"
        {...formik.getFieldProps("Message")}
      />
      {formik.touched.Message && formik.errors.Message ? (
        <div>{formik.errors.Message}</div>
      ) : null}

      <button type="submit" className="btn btn-info text-white ContactButton">
        Submit
      </button>
    </form>
  );
};
