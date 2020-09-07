import React from 'react'
import Nav from './Nav'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

import styles from '../styles/Main-style.module.css'

function Main({ isMobile }) {
    return (
        <div className={styles.rowContainer}>
            <Nav isMobile={isMobile} />
            <div id='scrollBar' className={styles.columnContainer}>
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Main