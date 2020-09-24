import React from 'react'
import Nav from './Nav'
import styles from '../styles/Header-style.module.css'
import me from '../images/me.png'

function Header() {
    return (
        <div id="home" className={styles.container}>
            <h1>hello header</h1>
            <img src={me} alt="me" />
        </div>
    )
}

export default Header