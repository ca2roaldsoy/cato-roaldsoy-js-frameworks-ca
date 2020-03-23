import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { emailRegExp } from "../../constants/regExp";

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
    .matches(emailRegExp),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Message must contain of least 10 characters")
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register({ required: true })}
        />
        <Form.Control.Feedback type="valid">V</Form.Control.Feedback>
        {errors.firstName && <Form.text>{errors.firstName.message}</Form.text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register({ required: true })}
        />
        <Form.Control.Feedback type="valid">V</Form.Control.Feedback>
        {errors.lastName && <Form.text>{errors.lastName.message}</Form.text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register}
        />
        {errors.email && <Form.text>{errors.email.message}</Form.text>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Message..."
          name="message"
          ref={register}
        />
      </Form.Group>
      {errors.message && <Form.text>{errors.message.message}</Form.text>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
