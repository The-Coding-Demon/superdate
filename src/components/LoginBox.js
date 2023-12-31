import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const LoginBox = ({ stateProps }) => {
  const { changeCurrentUser, signedOut, setSignedOut } = stateProps;
  const navigate = useNavigate();

  if (signedOut == true) {
    changeCurrentUser("");
    setSignedOut(false);
  }

  const checkCredentials = (values) => {
    const theCurrentUsers =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    const checkLogin = [values];
    const result = theCurrentUsers.filter((bigList) =>
      checkLogin.some(
        (singleUser) =>
          bigList.email === singleUser.email &&
          bigList.password === singleUser.password
      )
    );
    if (result.length == 0) {
      alert("No user exists");
    } else {
      changeCurrentUser(result[0]);
      localStorage.setItem("currentUser", JSON.stringify(result[0]));
      navigate("/");
    }
  };

  const goToSignUpPage = () => {
    navigate("/sign-up");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      checkCredentials(values);
    },
  });

  return (
    <form className="question-form" onSubmit={formik.handleSubmit}>
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

      <button className="btn text-white input-button" type="submit">
        Login{" "}
      </button>
      <p id="sign-up-prompt">Don't have an account</p>
      <button
        className="btn text-white input-button"
        type="button"
        onClick={goToSignUpPage}
      >
        SignUp{" "}
      </button>
    </form>
  );
};
