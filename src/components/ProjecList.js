import React from 'react'
import Projec from './Projec'

export default function ProjecList({ projects }) {
    return (
        <div className="projectList">
            <h1>Project List</h1>
            {projects.map(project => <Projec key={project.id} project={project} /> )}
        </div>
    )
}
