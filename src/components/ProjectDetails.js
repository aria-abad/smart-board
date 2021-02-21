import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
    const { id } = useParams();

    return (
        <div className="project-details">
            <h2>Project Details - { id }</h2>
        </div>
    )
}