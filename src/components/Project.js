import React from 'react'
import styles from '../styles/Project-style.module.css'

function Project({ svg }) {
    return (
        <div className={styles.container}>
            {svg}
        </div>
    )
}

export default Project