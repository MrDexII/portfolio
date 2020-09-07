import React from 'react'
import styles from '../styles/Footer-style.module.css'
function Footer({ isMobile }) {
    return (
        <div className={isMobile ? styles.containerMobile : styles.container}>
            <h1 className={isMobile ? styles.footerMobile : styles.footer}>Bye</h1>
        </div>
    )
}

export default Footer