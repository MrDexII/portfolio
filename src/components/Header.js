import React from 'react'
import Nav from './Nav'
import styles from '../styles/Header-style.module.css'
import me from '../images/me.png'

function Header() {
    return (
        <div id="home" className={styles.container}>
            <h1 className={styles.title}>Cześć</h1>
            <p className={styles.textContent}>Mam na imię Andrzej i jestem początkującym developerem, a to jest strona z moimi projektami</p>
            <img className={styles.me} src={me} alt="me" />
        </div>
    )
}

export default Header