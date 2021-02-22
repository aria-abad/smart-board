import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

export default function ProjectDetails() {
    const { id } = useParams();
    const { data: project, error, isLoadin } = useFetch('http://localhost:8000/projects/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/projects/' + project.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('');
        })
    }

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
                    <button onClick = {handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}