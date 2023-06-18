import { useFormik } from "formik";
import * as Yup from "yup";

export const QuestionsBox = () => {
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
    <form className="QuestionForm" onSubmit={formik.handleSubmit}>
      <input
        className="InputBoxes"
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
        placeholder="Indoor or Outdoor"
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <input
        id="lastName"
        className="InputBoxes"
        type="text"
        placeholder="Day or Night"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <input
        id="email"
        className="InputBoxes"
        type="email"
        placeholder="Short or Long"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit" className="btn btn-primary InputButton">
        Submit
      </button>
    </form>
  );
};
