import React, { useState } from 'react'

import logo from '../images/logo-white.svg'

import styles from '../styles/Nav-style.module.css'

function Nav() {
    const [showMobileView, setShowMobileView] = useState(false)

    const handleClick = () => {
        setShowMobileView(prev => { return !prev })
    }
    const NavigationList = () => {
        return (
            <ul className={styles.navigation}>
                <li onClick={handleClick}>
                    <a href="#home"><svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" fill="#fff" />
                    </svg> Home</a>
                </li>
                {/* <li onClick={handleClick}><img src={userIcon} alt="user icon" /><a href='#about'>O mnie</a></li> */}
                <li onClick={handleClick}>
                    <a href='#projects'><svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M1.8 9l-.8-4h22l-.8 4h-2.029l.39-2h-17.122l.414 2h-2.053zm18.575-6l.604-2h-17.979l.688 2h16.687zm3.625 8l-2 13h-20l-2-13h24zm-8 4c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1s.447 1 1 1h6c.553 0 1-.448 1-1z" fill="#fff" />
                    </svg> Projekty</a>
                </li>
                <li onClick={handleClick}>
                    <a href='#contact'><svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" fill="#fff" />
                    </svg> Kontakt</a>
                </li>
            </ul>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" stroke="#fff" stroke-width="1.7" d="M7.198 15.13L12 6.812h0l2.304 4.352z" />
                        <path fill="#fff" d="M15.399 11.535l-.75-1.44 7.295-3.134z" />
                        <path fill="#fff" stroke="#fff" stroke-width=".227" d="M15.935 15.331l-.494-.838.954-1.14 1.148 1.978z" />
                    </svg></a>
                <button className={`${styles.menuButton} ${showMobileView ? styles.isActive : ""}`} onClick={handleClick}>
                    <span>
                        toggle menu
                    </span>
                </button>
            </div>
            {
                showMobileView ? <NavigationList /> : ""
            }
        </div>
    )
}

export default Nav