import React from 'react'
import Nav from './Nav'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

import styles from '../styles/Main-style.module.css'

function Main() {
    return (
        <div className={styles.container}>
            <About />
            <div className={styles.projectContainer}>
                <Nav />
                <Projects />
            </div>
            <Contact />
        </div>
    );
}

export default Main