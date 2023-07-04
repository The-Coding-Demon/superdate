import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_qgbxlae",
        "template_zdsap2r",
        form.current,
        "_mTHymHNmkEjIaMS1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <input
        className="contact-form-inputs"
        type="text"
        placeholder="FullName"
        name="user_name"
        required
      />
      <input
        className="contact-form-inputs"
        type="email"
        placeholder="Email"
        name="user_email"
        required
      />
      <textarea
        className="contact-form-inputs"
        rows="7"
        name="message"
        placeholder="Message"
        required
      />
      <button
        type="submit"
        value="Send"
        className="btn btn-info text-white contact-button"
      >
        Send
      </button>
    </form>
  );
};
