

export default function Table() {
    return (
        <div className="m-4">
            <ul>
                <li key={1}>Task ID</li>
                <li key={2}>Task Title</li>
                <li key={3}>Task Description</li>
                <li key={4}>Task Due Date</li>
                <li key={5}>Task Status</li>
                <li key={6}>Delete Task</li>
                <li key={7}>Edit Task</li>
            </ul>
        </div>
    )
}