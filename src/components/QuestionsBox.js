import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const QuestionsBox = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      city: Yup.string().required("Required"),
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

      <input
        className="InputBoxes"
        id="city"
        type="text"
        {...formik.getFieldProps("city")}
        placeholder="Enter Your City"
      />
      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}

      <button
        type="submit"
        className="btn btn-info text-white InputButton"
        onClick={() => {
          Navigate("./Results");
        }}
      >
        Submit
      </button>
    </form>
  );
};
