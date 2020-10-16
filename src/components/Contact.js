import React, { useState } from 'react'
import styles from '../styles/Contact-style.module.css'

function Contact() {
    const defaultFormData = {
        name: "",
        email: "",
        content: ""
    }

    const [formData, setFormData] = useState(defaultFormData)
    const [serverMassage, setServerMassage] = useState("")

    const handleFormChange = ({ target }) => {
        setFormData((prevState) => {
            return { ...prevState, [target.name]: target.value }
        })
    }

    const handleSubmitForm = (event) => {
        const host = "http://localhost:8080/"
        event.preventDefault()
        const sendEmail = async () => {
            const url = host + "api/send-email"
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const message = await response.text()
            setServerMassage(message)
        }
        sendEmail()
        setFormData(defaultFormData)
    }

    return (
        <div id='contact' className={styles.container}>
            <h1 className={styles.title}>Kontakt</h1>
            <form className={styles.flexContainer} onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} id="email" onChange={handleFormChange} />
                <label htmlFor="name">Name</label>
                <input type="text" value={formData.name} id="name" name="name" onChange={handleFormChange} />
                <textarea name="content" value={formData.content} rows="10" onChange={handleFormChange}></textarea>
                <label>{serverMassage}</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact