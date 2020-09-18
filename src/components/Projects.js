import React from 'react'
import Project from '../components/Project'
import styles from '../styles/ProjectsStyle.module.css'

function Projects() {
    return (
        <div id='projects' className={styles.container}>
            <Project name={'project1'} />
            <Project name={'project2'} />
            <Project name={'project3'} />
            <Project name={'project4'} />
        </div>
    )

}

export default Projects