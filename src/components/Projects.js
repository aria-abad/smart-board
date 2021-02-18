import React from 'react'
import ProjectDetails from './ProjectDetails'

export default function Projects({ projects, handleDelete }) {
    return (
        <div className="projects">
            <h2>Projects</h2>
            {projects.map(project => <ProjectDetails key={project.id} project={project} handleDelete={handleDelete} /> )}
        </div>
    )
}