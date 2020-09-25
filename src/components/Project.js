import React from 'react'
import styles from '../styles/Project-style.module.css'

function Project({ name }) {
    return (
        <a className={styles.container} href="">
            <h2 className={styles.title}>{name}</h2>
        </a>
    )
}

export default Project