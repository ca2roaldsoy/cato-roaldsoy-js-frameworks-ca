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

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data, e) {
    console.log("data", data);
    e.preventDefault();
    e.stopPropagation();

    setValidated(true);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label> <br />
        <Validation validated={validated} />
        <Form.Control
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register()}
        />
        {errors.firstName && <Form.Text>{errors.firstName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label> <br />
        <Validation validated={validated} />
        <Form.Control
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register()}
        />
        {errors.lastName && <Form.Text>{errors.lastName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label> <br />
        <Validation validated={validated} />
        <Form.Control
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register()}
        />
        {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label> <br />
        <Validation validated={validated} />
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Message..."
          name="message"
          ref={register()}
        />
        {errors.message && <Form.Text>{errors.message.message}</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
