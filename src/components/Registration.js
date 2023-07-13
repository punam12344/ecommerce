import { Formik, useFormik, validateYupSchema } from "formik";
import React from "react";
import * as Yup from "yup";
import { Box, TextField, Button, Checkbox, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const registationvalidation = () => {
    return Yup.object().shape({
      title: Yup.string()
        .required("Please Enter Title is Required")
        .oneOf(["Ms", "Miss", "Mrs"], "Enter Valid Title"),

      firstName: Yup.string()
        .required("Please Enter First Name")
        .min(3, "Enter More Than 3 Chachter")
        .max(10, "Enter Valid name Range Between 10"),

      lastName: Yup.string()
        .required("Please Enter First Name")
        .min(3, "Enter More Than 3 Chachter")
        .max(10, "Enter Valid name Range Between 10"),

      email: Yup.string()
        .required("Please Enter Email")
        .email("Email is Invalid"),

      userName: Yup.string()
        .required("Please Enter UserName")
        .min(3, "Enter More Than 3 Chachter")
        .max(7, "Enter Valid name Range Between 7"),

      password: Yup.string()
        .required("please Enter Password")
        .min(6, "Must be enter minmum 6 chachater password")
        .max(12, "Must be enter minmum 6 chachater password"),

      confirmPassword: Yup.string()
        .required("please Enter Confirm Password")
        .oneOf([Yup.ref("password"), null], "confirm password is not matched"),

      acceptTerms: Yup.bool().oneOf([true], "Accept Term is Required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      acceptTerms: true,
    },

    validationSchema: registationvalidation,

    onSubmit: async (values) => {
      console.log(values);

      axios
        .post("https://real-pear-fly-kilt.cyclic.app/accounts/register", values)
        .then((y) => {
          console.log(y);
          navigate("/Login");
        })
        .catch(() => {});
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography
        variant="h3"
        sx={{ color: "green", marginLeft: 70, marginTop: 3 }}
      >
        Registration
      </Typography>
      <div>
        <TextField
          id="title"
          label="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          helperText={formik.touched.title ? formik.errors.title : ""}
          error={formik.touched.title && Boolean(formik.errors.title)}
          sx={{ marginLeft: 55, marginTop: 3 }}
          style={{ width: 500 }}
        />
      </div>
      <div>
        <TextField
          id="firstName"
          label="first Name"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          helperText={formik.touched.firstName ? formik.errors.firstName : ""}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>
      <div>
        <TextField
          id="lastName"
          label="last Name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          helperText={formik.touched.lastName ? formik.errors.lastName : ""}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>

      <div>
        <TextField
          id="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          helperText={formik.touched.email ? formik.errors.email : ""}
          error={formik.touched.email && Boolean(formik.errors.email)}
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>
      <div>
        <TextField
          id="outlined-required"
          label="User Name"
          name="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          helperText={formik.touched.userName ? formik.errors.userName : ""}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          helperText={formik.touched.password ? formik.errors.password : ""}
          error={formik.touched.password && Boolean(formik.errors.password)}
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>
      <div>
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          helperText={
            formik.touched.confirmPassword ? formik.errors.confirmPassword : ""
          }
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          sx={{ marginLeft: 55, marginTop: 2 }}
          style={{ width: 500 }}
        />
      </div>

      <div>
        {/* Accept Tearms  */}
        <Checkbox
          name="acceptTerms"
          type="checkbox"
          value={formik.values.acceptTerms}
          helperText={
            formik.touched.acceptTerms ? formik.errors.acceptTerms : ""
          }
          error={
            formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)
          }
          onClick={formik.handleChange}
          sx={{ marginLeft: 30 }}
          style={{ width: 500 }}
        ></Checkbox>

        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
