
function Input({handleChange,addTask,newTask}) {
    return (
    <div className='top'>
    <input onChange={handleChange} type="text" placeholder="Enter Task" class ="input"/>
    <button onClick={addTask} class="button-4">Add Task</button>
    {newTask}
  </div>
    );
  
}

export default Input;