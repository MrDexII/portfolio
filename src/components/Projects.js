import React from 'react'
import Project from '../components/Project'
import styles from '../styles/Projects-style.module.css'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Projekty</h1>
                <p>Oto aplikacje nad którymi pracowałem</p>
            </div>
            <div className={styles.projectsContainer}>
                <Project name={'project1'} />
                <Project name={'project2'} />
                <Project name={'project3'} />
                <Project name={'project4'} />
            </div>
        </div>
    )

}

export default Projects