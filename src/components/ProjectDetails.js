import React from 'react'

export default function ProjectDetails({ project }) {
    return (
        <div className="project-details">
            <h3>{ project.instrument }</h3>
            <p>Priority of this project: { project.priority}</p>
            <p>Process Cycle: { project.cycle }</p>
            <p>Autoclave Cycle: { project.autoclave }</p>
        </div>
    )
}
