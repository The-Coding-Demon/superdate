import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginCheck = (values) => {
  Object.assign(values, { userFavourites: [] });
  localStorage.setItem("userList", JSON.stringify(values));
};
export const LoginBox = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      LoginCheck(values);
    },
  });
  return (
    <form className="QuestionForm" onSubmit={formik.handleSubmit}>
      <input
        className="InputBoxes"
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
        placeholder="Name"
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <input
        className="InputBoxes"
        id="password"
        type="password"
        placeholder="Enter Password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <input
        className="InputBoxes"
        id="email"
        type="email"
        placeholder="Enter Email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button
        className="btn btn-info text-white InputButton"
        type="submit"
        onClick={() => {
          Navigate("/");
        }}
      >
        Submit{" "}
      </button>
    </form>
  );
};
