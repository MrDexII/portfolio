import React from 'react'
import styles from '../styles/Project-style.module.css'

function Project({ name }) {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
        </div>
    )
}

export default Project