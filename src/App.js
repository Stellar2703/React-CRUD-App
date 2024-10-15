import Input from './Input';
import logo from './logo.svg';
// import './App.css';
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
  
    const deleteTask = (taskname) => {
      const newTodos1 = tasks.filter((task) => {
        if (task === taskname) {
          return false;
        }else{
          return true;
        }
  // or the way could be
  // return task !== taskname
      });
      setTasks(newTodos1)
    }
    return ( 
      <div className="App">
        <h1>{tasks.length}</h1>
        {/* <h1>Hello World</h1> */}
        <Input handleChange = {handleChange} addTask= {addTask} newTask={newTask}/>
        <div className='bottom'>
          {tasks.map((task) => {
            return (<>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>Delete Task</button>
            </>
            );
            
          })}
          </div>
          <Input handleChange = {handleChange} addTask= {addTask} newTask={newTask}/>
        </div>
        
  
  
    )

  }


  


































// const [showtext, setShowtext] = useState(false)
// return(
//   <div className="App">
//     <button onClick={() => setShowtext(!showtext)}>Toggle Text</button>
//     {showtext && <h1>Shashwath</h1>}
//   </div>
// )















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
