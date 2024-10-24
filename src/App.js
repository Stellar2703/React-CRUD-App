import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios';

function App() {
  const [todolist,settodolist] = useState([]);
  const [newTask,setnewTask] = useState("");  
  const handleChange = (event) => {
    setnewTask(event.target.value)
    {console.log(newTask)}
  };
  const addTask = () => {
    const newTodos = [...todolist, newTask]
    settodolist(newTodos)
    {console.log(todolist)}


  }
  
  const deletetask = (task) => {
    const temptodo = todolist.filter((taskname) => {
      if(taskname === task){
        return false;
      }else{
        return true;
      }
    });
    settodolist(temptodo);
  }

  Axios.get("https://catfact.ninja/fact").then((response) => { # for simple api call
    console.log(response.data.fact) })

  return(
    <div className="App"><h1>To-Do List</h1>
     <div className="addTask">
      
     
        {/* <input onChange={handleChange} type="text" placeholder="Enter Task" />
        <button onClick={addTask}>Add Task</button> */}
        {todolist.map((task) => {
          return(
            <div>
              <h1>{task}</h1>
              <button onClick={()=>deletetask(task)}>Delete Task</button>
            </div>
          );
        })}
    
    
    </div>  
  
    </div>
    );
  }
  

  





























// const [tasks, setTasks] = useState([]);
//   const [newTask, setnewTask] = useState("");
//   const handleChange = (event) => {
//     setnewTask(event.target.value)   
//   }
//   const addTask = () => {
//     const newTodos = [...tasks, newTask]
//     setTasks(newTodos)
//   }

//   const deleteTask = (taskname) => {
//     const newTodos1 = tasks.filter((task) => {
//       if (task === taskname) {
//         return false;
//       }else{
//         return true;
//       }
// // or the way could be
// // return task !== taskname
//     });
//     setTasks(newTodos1)
//   }
//   return ( 
//     <div className="App">
//       <h1>{tasks.length}</h1>
//       {/* <h1>Hello World</h1> */}
//       <div className='top'>
//         <input onChange={handleChange} type="text" placeholder="Enter Task" class ="input"/>
//         <button onClick={addTask} class="button-4">Add Task</button>
//         {newTask}
//       </div>
//       <div className='bottom'>
//         {tasks.map((task) => {
//           return (<>
//           <h1>{task}</h1>
//           <button onClick={() => deleteTask(task)}>Delete Task</button>
//           </>
//           );

//         })}
//         </div>
//       </div>
      


//   )















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
