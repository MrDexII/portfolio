import React from 'react'
import styles from '../styles/Projects-style.module.css'
import Project from '../components/Project'

function Projects() {
    return (
        <div id='projects' className={styles.projectsContainer}>
            <Project name={'project1'} />
            <Project name={'project2'} />
            <Project name={'project3'} />
            <Project name={'project4'} />
        </div>
    )

}

export default Projects