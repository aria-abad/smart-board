import React, { useState } from 'react'

export default function NewProject() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [autoclave, setAutoclave] = useState('');
    const [contact, setContact] = useState('');
    const [note, setNote] = useState('');

    return (
        <div className="new-project">
            <h2>Add a New Project</h2>
            <form>
                <label>Project title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
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
                <button>Add Project</button>
                <p>{ title }</p>
                <p>{ priority }</p>
                <p>{ autoclave }</p>
                <p>{ contact }</p>
                <p>{ note }</p>
            </form>
        </div>
    )
}