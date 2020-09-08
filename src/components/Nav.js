import React, { useState } from 'react'
import styles from '../styles/Nav-style.module.css'

function NormalToggleMenu({ style, handleClick }) {
    const { menuStyle, navStyle } = style
    return (
        <nav className={navStyle}>
            <ul className={menuStyle}>
                <li onClick={handleClick}><a href='#about' >O mnie</a></li>
                <li onClick={handleClick}><a href='#projects'>Projekty</a></li>
                <li onClick={handleClick}><a href='#contact'>Kontakt</a></li>
            </ul>
        </nav>
    )
}

function MobileToggleMenu({ handleClick }) {
    return (
        <NormalToggleMenu handleClick={handleClick} style={{ menuStyle: styles.mobileMenu, navStyle: styles.mobileNav }} />
    )
}

function Nav({ isMobile }) {
    const [showMobileView, setShowMobileView] = useState(false)

    const handleClick = () => {
        if (isMobile) {
            setShowMobileView(prev => { return !prev })
        }
    }

    return (
        <div className={isMobile ? styles.mobileContainer : styles.container} >
            {
                isMobile ?
                    <button className={`${styles.menuButton} ${showMobileView ? styles.isActive : ""}`} onClick={handleClick}>
                        <span>
                            toggle menu
                        </span>
                    </button> :
                    <NormalToggleMenu style={{ menuStyle: styles.navbar }} />
            }
            {
                showMobileView && isMobile ?
                    <MobileToggleMenu handleClick={handleClick} /> :
                    ""
            }
        </div>
    )
}

export default Nav