import { useState } from "react";

function ToDoList() {
    const [job, setJob] = useState("")
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return (storageJobs)
    });


    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const JsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', JsonJobs)
            return [...prev, job]
        })
        setJob('')
        console.log(jobs)
    }
    return (
        <div style={{ padding: 30 }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;