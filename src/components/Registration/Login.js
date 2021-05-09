import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import validator from "validator";
// import useForm from "../../hooks/useForm";
// import { signinForm } from "../../utils/formConfig";
import { useForm } from "react-hook-form";
import AuthService from "../../ajaxService/auth";
import { useStateValue } from "../../store/Provider";

import "./Registration.css";

export default function SignInForm(props) {
  const [{ user }, dispatch] = useStateValue();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    email: "",
    isEmail: true,
    password: "",
  });

  useEffect(() => {
    console.log(props.toggle);
    setFormData({
      email: "",
      isEmail: true,
      password: "",
    });
  }, [props.toggle]);

  const isValidEmail = (mailId) => validator.isEmail(mailId);
  const onSubmit = () => {
    AuthService.login(formData.email, formData.password).then(
      (response) => {
        setFormData({
          email: "",
          isEmail: true,
          password: "",
        });
        dispatch({
          type: "SET_ROLE",
          response,
        });
        dispatch({
          type: "SET_SIGNIN_SUCCESS",
          payload: {
            message: "Signed in success.",
            type: "success",
          },
        });
      },
      (error) => {
        setFormData({
          email: "",
          isEmail: true,
          password: "",
        });
        dispatch({
          type: "SET_SIGNIN_SUCCESS",
          payload: {
            message: "Signed in success.",
            type: "success",
          },
        });
      }
    );
  };

  return (
    <Form className="signInForm">
      <FormGroup onSubmit={onSubmit}>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
          invalid={false}
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
              isEmail: isValidEmail(e.target.value),
            })
          }
        />
        <FormFeedback>Email is invalid</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          value={formData.password}
          placeholder="Password"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
      </FormGroup>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        disabled={!formData.email.length || !formData.password.length}
      >
        Submit
      </Button>
      <FormGroup className="register-click">
        <Link to="/signup">Click here to Register</Link>
      </FormGroup>
    </Form>
  );
}
