import React from 'react'
import styles from '../styles/Header-style.module.css'

function Header(){
    return(
        <div className={styles.container}>
            <h1 className={styles.header} >header</h1>
        </div>
    )
}

export default Header