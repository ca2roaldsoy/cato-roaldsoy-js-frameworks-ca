import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 characters must be entered"),
  lastName: yup
    .string(2, "Minimum 2 characters must be entered")
    .required("Last name is required")
    .min(2, "Minimum 2 characters must be entered"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .matches(
      /^[a-z0-9!#$%&*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g
    ),
  message: yup
});

function ContactForm() {
  return <div></div>;
}

export default ContactForm;
