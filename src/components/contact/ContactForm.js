import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Validation from "./Validation";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 characters must be entered"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum 2 characters must be entered"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter valid email"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Message must contain of least 10 characters")
});

function ContactForm(e) {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const { firstName, lastName, email, message } = errors;

  function onSubmit(data, e) {
    console.log("data", data);
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);
  }

  const reset = () => setValidated(false);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label> <br />
        <Form.Control
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register()}
        />
        <Validation name={firstName} valid={validated} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label> <br />
        <Form.Control
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register()}
        />
        <Validation name={lastName} valid={validated} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label> <br />
        <Form.Control
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register()}
        />
        <Validation name={email} valid={validated} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label> <br />
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Message..."
          name="message"
          ref={register()}
        />
        <Validation name={message} valid={validated} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" type="reset" onClick={reset}>
        Reset
      </Button>
    </Form>
  );
}

export default ContactForm;
