import React, { useState } from "react";
import styles from "../styles/Contact-style.module.css";
import config from "../config.json";

function Contact() {
  const defaultFormData = {
    name: "",
    email: "",
    content: "",
  };

  const defaultServerResponse = {
    message: "",
    status: undefined,
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [serverResponse, setServerResponse] = useState(defaultServerResponse);

  const handleFormChange = ({ target }) => {
    setFormData((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  const handleSubmitForm = (event) => {
    const host = config.MAIL_SENDER_HOST_URL;
    event.preventDefault();
    const sendEmail = async () => {
      try {
        const url = host;
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "spring.cloud.function.definition": "sendEmail",
          },
          body: JSON.stringify(formData),
        });
        const message = await response.json();
        setServerResponse({
          message: message.body,
          status: message.statusCodeValue,
        });
      } catch (error) {
        console.error(error);
        setServerResponse({
          message: error.toString() + " Problem z serwisem zewnętrznym",
          status: 500,
        });
      }
    };
    if (!formData.email || !formData.name || !formData.content) {
      setServerResponse({
        message: "Wszystkie pola w formularzu są wymagane",
        status: 404,
      });
    } else {
      sendEmail();
      setFormData(defaultFormData);
    }
  };

  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>Kontakt</h1>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <div className={styles.emailAndName}>
          <div className={styles.wrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              type="text"
              value={formData.name}
              id="name"
              name="name"
              onChange={handleFormChange}
            />
          </div>
        </div>
        <label htmlFor="content">Wiadomość</label>
        <textarea
          name="content"
          value={formData.content}
          rows="10"
          onChange={handleFormChange}
        ></textarea>
        <span
          className={`${
            serverResponse.status === 200 ? styles.success : styles.error
          }`}
        >
          {serverResponse.message}
        </span>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Contact;
