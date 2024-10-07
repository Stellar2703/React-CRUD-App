import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");
  const handleChange = (event) => {
    setnewTask(event.target.value)   
  }
  const addTask = () => {
    const newTodos = [...tasks, newTask]
    setTasks(newTodos)
    
  }
  return ( 
    <div className="App">
      <h1>Hello World</h1>
      <div className='top'>
        <input onChange={handleChange} type="text" placeholder="Enter Task"/>
        <button onClick={addTask}>Add Task</button>
        {newTask}
      </div>
      <div className='bottom'>
        
        </div>
      </div>
  );
}













































// function App() {
//   const name = <h1>Shashwath</h1>
//   const age = 20
//   const idgreen = true  
//   const names = ["Shashwath", "Shash", "Shashu"]


//   const [ages, setCount] = useState(0)
//   const increaseage = () => {
//     setCount(ages + 1)
//     console.log(ages)
//   }

//   return(
    
//     <div classname="App">
//       {name}
//       {name}
//       <User name="Shashwath" age="20"/>
//       <User name="Shash" age="21"/>
//       <Job salary={10000} position="Developer" company="Google"/>
      
//       {age > 18 ? <h1>Eligible</h1> : <h1>Not Eligible</h1>}
//       <h1 style={{color : idgreen ? "red" : "green" }}>Shashwath</h1>
//       <h1>{names[1]}</h1>
//       <button onClick={increaseage}>Increase Age</button>
//       <h1>{ages}</h1>


//     </div>
//   )
// }

//   const User = (props) => {
//     return(
//       <div>
//         <h1>{props.name}</h1>
//         <h2>{props.age}</h2>
//       </div>
//     )
//   }

//   const Job = (props) => {
//     return(
//       <div>
//         <h1>{props.salary}</h1>
//         <h2>{props.position}</h2>
//         <h3>{props.company}</h3>
//       </div>
//     )
//   }
export default App;
