import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map(project => (
                <div className="project-preview" key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <h3>{ project.instrument }</h3>
                    </Link>
                    <p>Priority of this project: { project.priority}</p>
                    <p>Process Cycle: { project.cycle }</p>
                    <p>Autoclave Cycle: { project.autoclave }</p>
                </div>
            ))}
        </div>
    )
}
