import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

export default function ProjectDetails() {
    const { id } = useParams();
    const { data: project, error, isLoadin } = useFetch('http://localhost:8000/projects/' + id);

    return (
        <div className="project-details">
            {isLoadin && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {project && (
                <article>
                    <h2>{ project.instrument }</h2>
                    <h3>SSU Cycle: { project.cycle }</h3>
                    <h3>Autoclave: { project.autoclave }</h3>
                    <p>Contact Person: { project.contact }</p>
                    <div>Note: { project.note }</div>
                </article>
            )}
        </div>
    )
}