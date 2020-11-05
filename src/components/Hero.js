import React from 'react'
import styles from '../styles/Hero-style.module.css'
import me from '../images/me400.png'

function Hero() {
    return (
        <div id="home" className={styles.container}>
            <div className={styles.titleDescription}>
                <h1 className={styles.title}>Cześć</h1>
                <p className={styles.textContent}>Mam na imię Andrzej i jestem początkującym developerem, a to jest strona z moimi projektami</p>
            </div>
            <img className={styles.me} src={me} alt="me" />
        </div >
    )
}

export default Hero