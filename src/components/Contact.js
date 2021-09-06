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
        const url = host + "api/send-email";
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const message = await response.text();
        const status = response.status;
        setServerResponse({ message: message, status: status });
      } catch (error) {
        console.error(error);
        setServerResponse({ message: error.toString() + " External service problem", status: 500 });
      }
    };
    if (!formData.email || !formData.name || !formData.content) {
      setServerResponse({
        message: "Name, email and message are required",
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
