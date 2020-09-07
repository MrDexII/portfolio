import React from 'react'
import styles from '../styles/Nav-style.module.css'

function Nav({ isMobile }) {
    return (
        <div className={isMobile ? styles.mobileContainer : styles.container} >
            {isMobile ?
                <button className={styles.menuButton}>
                    <span>
                        toggle menu
                </span>
                </button> :
                <nav >
                    <ul className={styles.navbar}>
                        <li><a href='#about'>O mnie</a></li>
                        <li><a href='#projects'>Projekty</a></li>
                        <li><a href='#contact'>Kontakt</a></li>
                    </ul>
                </nav>
            }

        </div>
    )
}

export default Nav