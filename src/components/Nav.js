import React, { useState } from 'react'

import homeIcon from '../images/icons/icon-home-white.svg'
import userIcon from '../images/icons/user-white.svg'
import projectsIcon from '../images/icons/projects-white.svg'
import contactIcon from '../images/icons/contact-white.svg'

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
                <li onClick={handleClick}><img src={homeIcon} alt="home icon" /><a href="#home">Home</a></li>
                <li onClick={handleClick}><img src={userIcon} alt="user icon" /><a href='#about'>O mnie</a></li>
                <li onClick={handleClick}><img src={projectsIcon} alt="projects icon" /><a href='#projects'>Projekty</a></li>
                <li onClick={handleClick}><img src={contactIcon} alt="contact icon" /><a href='#contact'>Kontakt</a></li>
            </ul>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a href="#home"><img className={styles.logo} src={logo} alt="logo"></img></a>
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