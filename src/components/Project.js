import React from 'react'
import styles from '../styles/Project-style.module.css'

function Project({ svg, name }) {
    return (
        <div id={name} className={styles.container}>
            {svg}
        </div>
    )
}

export default Project