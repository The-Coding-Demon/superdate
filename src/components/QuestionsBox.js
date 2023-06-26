import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const QuestionsBox = () => {
  const Navigate = useNavigate();
  let userDatePreferences = JSON.parse(
    localStorage.getItem("userDatePreferences")
  );
  if (userDatePreferences && userDatePreferences.expiresAt < Date.now()) {
    userDatePreferences = {};
  }
  const formik = useFormik({
    initialValues: {
      venueCategoryChoice: userDatePreferences?.venueCategoryChoice || "Indoor",
      timeCategoryChoice: userDatePreferences?.timeCategoryChoice || "Day",
      lengthCategoryChoice:
        userDatePreferences?.lengthCategoryChoice || "Short",
      city: userDatePreferences?.city || "",
    },
    validationSchema: Yup.object({
      venueCategoryChoice: Yup.string().required("Required"),
      timeCategoryChoice: Yup.string().required("Required"),
      lengthCategoryChoice: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // user can navigate back to this form and edit choices, but choices will expire after 1 hour
      localStorage.setItem(
        "userDatePreferences",
        JSON.stringify({ ...values, expiresAt: Date.now() + 3600 * 60 * 60 })
      );
      Navigate("./Results");
    },
  });
  return (
    <form className="QuestionForm" onSubmit={formik.handleSubmit}>
      <select
        className="InputBoxes"
        id="venueCategoryChoice"
        type="text"
        {...formik.getFieldProps("venueCategoryChoice")}
        placeholder="Indoor or Outdoor"
      >
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      {formik.touched.venueCategoryChoice &&
      formik.errors.venueCategoryChoice ? (
        <div>{formik.errors.venueCategoryChoice}</div>
      ) : null}

      <select
        id="timeCategoryChoice"
        className="InputBoxes"
        type="text"
        placeholder="Day or Night"
        {...formik.getFieldProps("timeCategoryChoice")}
      >
        <option value="Day">Day</option>
        <option value="Night">Night</option>
      </select>
      {formik.touched.timeCategoryChoice && formik.errors.timeCategoryChoice ? (
        <div>{formik.errors.timeCategoryChoice}</div>
      ) : null}

      <select
        id="lengthCategoryChoice"
        className="InputBoxes"
        type="lengthCategoryChoice"
        placeholder="Short or Long"
        {...formik.getFieldProps("lengthCategoryChoice")}
      >
        <option value="Short">Short</option>
        <option value="Long">Long</option>
      </select>
      {formik.touched.lengthCategoryChoice &&
      formik.errors.lengthCategoryChoice ? (
        <div>{formik.errors.lengthCategoryChoice}</div>
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

      <button type="submit" className="btn btn-info text-white InputButton">
        Submit
      </button>
    </form>
  );
};
