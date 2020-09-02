import React from 'react'
import styles from '../styles/Nav-style.module.css'

function Nav() {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li><a href='#about'>O mnie</a></li>
                    <li><a href='#projects'>Projekty</a></li>
                    <li><a href='#contact'>Kontakt</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav