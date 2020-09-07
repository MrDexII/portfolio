import React from 'react'
import styles from '../styles/Header-style.module.css'

function Header({ isMobile }) {
    return (
        <div className={isMobile ? styles.containerMobile : styles.container}>
            <h1 className={isMobile ? styles.headerMobile : styles.header} >Hello</h1>
        </div>
    )
}

export default Header