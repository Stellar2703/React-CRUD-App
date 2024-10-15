



const input (props) => {
    return (
        <div>
            <input onChange={props.handleChange} type="text" placeholder="Enter Task" />
            <button onClick={props.addTask}>Add Task</button>
        </div>
    );
}   