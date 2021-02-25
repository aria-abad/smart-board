import React from 'react'
import ProjectList from './ProjectList'
// import useFetch from './useFetch';


export default function Home() {
    // const {data: projects, isLoading, error} = useFetch('http://localhost:8000/projects');

    return (
        <div className="home">
            <h2>Projects</h2>
            {/* {error && <div>{error}</div>} */}
            {/* {isLoading && <div>Loading...</div>} */}
            {/* {projects && <ProjectList projects = {projects} />} */}
            <ProjectList />
        </div>
    )
}