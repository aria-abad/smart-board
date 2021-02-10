import React from 'react'

export default function Projec({ project }) {
    return (
        <div className="project-preview">
            <h2>{ project.instrument }</h2>
            <p>Priority of this project: { project.priority}</p>
            <p>Process Cycle: { project.cycle }</p>
            <p>Autoclave Cycle: { project.autoclave }</p>
        </div>
    )
}
