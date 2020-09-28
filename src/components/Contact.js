import React from 'react'
import styles from '../styles/Contact-style.module.css'

function Contact() {
    return (
        <div id='contact' className={styles.container}>
            <h1 className={styles.title}>Kontakt</h1>
            <form className={styles.flexContainer} action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <textarea rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact