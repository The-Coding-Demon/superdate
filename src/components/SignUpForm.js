import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const SignUpForm = ({ stateProps }) => {
  const { changeCurrentUser } = stateProps;
  const navigate = useNavigate();

  const checkCredentials = (values) => {
    const theCurrentUsers =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    const result = theCurrentUsers.filter((bigList) =>
      [values].some((currentUser) => bigList.email === currentUser.email)
    );
    if (result.length === 0) {
      values.userFavourites = [];
      theCurrentUsers.push(values);
      localStorage.setItem("userCollection", JSON.stringify(theCurrentUsers));
      localStorage.setItem("currentUser", JSON.stringify(values));
      changeCurrentUser(values);
      navigate("/");
    } else {
      alert("Email already in use");
    }
  };
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
      checkCredentials(values);
    },
  });

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <form className="question-form" onSubmit={formik.handleSubmit}>
      <input
        className="input-boxes"
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
        placeholder="Name"
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error-validation">{formik.errors.firstName}</div>
      ) : null}

      <input
        className="input-boxes"
        id="password"
        type="password"
        placeholder="Enter Password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error-validation">{formik.errors.password}</div>
      ) : null}

      <input
        className="input-boxes"
        id="email"
        type="email"
        placeholder="Enter Email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error-validation">{formik.errors.email}</div>
      ) : null}

      <button className="btn text-white input-button" type="submit">
        SignUp{" "}
      </button>
      <button
        id="account-button"
        className="btn text-white input-button"
        type="button"
        onClick={goToLoginPage}
      >
        Already have an Account{" "}
      </button>
    </form>
  );
};
