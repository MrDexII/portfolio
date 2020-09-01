import React from 'react'
import styles from '../styles/Main-style.module.css'

function Nav() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li>O mnie</li>
                    <li>Projekty</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav