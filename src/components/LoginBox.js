import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginCheck = (values) => {
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
    console.log("No user exists");
  } else {
    localStorage.setItem("userList", JSON.stringify(result[0]));
    window.location.href = "/";
  }
};
export const LoginBox = () => {
  const navigate = useNavigate();
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
      LoginCheck(values);
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
        <div>{formik.errors.email}</div>
      ) : null}

      <input
        className="input-boxes"
        id="password"
        type="password"
        placeholder="Enter Password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <button className="btn btn-info text-white input-button" type="submit">
        Login{" "}
      </button>
      <p id="sign-up-prompt">Don't have an account</p>
      <button
        className="btn btn-info text-white input-button"
        type="submit"
        onClick={() => {
          navigate("/sign-up");
        }}
      >
        SignUp{" "}
      </button>
    </form>
  );
};
