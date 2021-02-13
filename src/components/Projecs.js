import React from 'react'
import ProjecDetail from './ProjecDetails'

export default function ProjecList({ projects }) {
    return (
        <div className="projectList">
            <h1>Project List</h1>
            {projects.map(project => <ProjecDetail key={project.id} project={project} /> )}
        </div>
    )
}
