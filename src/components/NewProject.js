import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function NewProject() {
    const [instrument, setInstrument] = useState('');
    const [priority, setPriority] = useState('');
    const [autoclave, setAutoclave] = useState('');
    const [contact, setContact] = useState('');
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const project = { instrument, priority, autoclave, contact, note };

        setIsLoading(true);

        fetch('http://localhost:8000/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project)
        }).then(() => {
            console.log('new blog added.');
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="new-project">
            <h2>Add a New Project</h2>
            <form onSubmit = {handleSubmit}>
                <label>Project title:</label>
                <input 
                    type="text"
                    required
                    value = {instrument}
                    onChange = {(e) => setInstrument(e.target.value)}
                />
                <label>Priority:</label>
                <input 
                    type="number"
                    required
                    value = {priority}
                    onChange = {(e) => setPriority(e.target.value)}
                />
                <label>Autoclave:</label>
                <input 
                    type="text"
                    required
                    value = {autoclave}
                    onChange = {(e) => setAutoclave(e.target.value)}
                />
                <label>Contact person:</label>
                <input 
                    type="text"
                    required
                    value = {contact}
                    onChange = {(e) => setContact(e.target.value)}
                />
                <label>Note:</label>
                <textarea
                    required
                    value = {note}
                    onChange = {(e) => setNote(e.target.value)}
                ></textarea>
                { !isLoading && <button>Add Project</button> }
                { isLoading && <button disabled>Adding Project...</button> }
            </form>
        </div>
    )
}