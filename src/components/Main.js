import React from 'react'
import Nav from './Nav'
import Projects from './Projects'

import styles from '../styles/Main-style.module.css'

function Main() {
    return (
        <div className={styles.container}>
            <Nav />
            <Projects />
        </div>
    );
}

export default Main