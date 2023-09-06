import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container, Form } from "react-bootstrap";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygfyccs",
        "template_5lefv1e",
        form.current,
        "VoW2anReWSk92An6C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mesajınız gönderildi");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3 d-flex gap-5">
            <Form.Control placeholder="İsim" type="text" name="user_name" />
            <Form.Control placeholder="E-mail" type="email" name="user_email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Lütfen mesajınızı giriniz."
              as="textarea"
              name="message"
            />
          </Form.Group>
          <Button
            className="btn-hover align-items-center justify-content-center color-1  mb-3"
            type="submit"
            value="Send"
          >
            Gönder
          </Button>
        </Form>
      </Container>
    </section>
  );
};
export default Contact;
