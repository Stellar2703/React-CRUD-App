// App.js
// import React, { useState, useEffect } from 'react';
// import NoVncTerminal from './NoVncTerminal';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  )
}


export default App;





//   // const [todolist,settodolist] = useState([]);
//   // const [newTask,setnewTask] = useState("");  
//   // const handleChange = (event) => {
//   //   setnewTask(event.target.value)
//   //   {console.log(newTask)}
//   // };
//   // const addTask = () => {
//   //   const newTodos = [...todolist, newTask]
//   //   settodolist(newTodos)
//   //   {console.log(todolist)}


//   // }
  
//   // const deletetask = (task) => {
//   //   const temptodo = todolist.filter((taskname) => {
//   //     if(taskname === task){
//   //       return false;
//   //     }else{
//   //       return true;
//   //     }
//   //   });
//   //   settodolist(temptodo);
//   // }


//   // return(
//   //   <div className="App"><h1>To-Do List</h1>
//   //    <div className="addTask">
      
     
//   //       {/* <input onChange={handleChange} type="text" placeholder="Enter Task" />
//   //       <button onClick={addTask}>Add Task</button> */}
//   //       {todolist.map((task) => {
//   //         return(
//   //           <div>
//   //             <h1>{task}</h1>
//   //             <button onClick={()=>deletetask(task)}>Delete Task</button>
//   //           </div>
//   //         );
//   //       })}
    
    
//   //   </div>  
  
//   //   </div>
//   //   );
//   }
  

  




































// // function App() {
// //   const name = <h1>Shashwath</h1>
// //   const age = 20
// //   const idgreen = true  
// //   const names = ["Shashwath", "Shash", "Shashu"]


// //   const [ages, setCount] = useState(0)
// //   const increaseage = () => {
// //     setCount(ages + 1)
// //     console.log(ages)
// //   }

// //   return(
    
// //     <div classname="App">
// //       {name}
// //       {name}
// //       <User name="Shashwath" age="20"/>
// //       <User name="Shash" age="21"/>
// //       <Job salary={10000} position="Developer" company="Google"/>
      
// //       {age > 18 ? <h1>Eligible</h1> : <h1>Not Eligible</h1>}
// //       <h1 style={{color : idgreen ? "red" : "green" }}>Shashwath</h1>
// //       <h1>{names[1]}</h1>
// //       <button onClick={increaseage}>Increase Age</button>
// //       <h1>{ages}</h1>


// //     </div>
// //   )
// // }

// //   const User = (props) => {
// //     return(
// //       <div>
// //         <h1>{props.name}</h1>
// //         <h2>{props.age}</h2>
// //       </div>
// //     )
// //   }

// //   const Job = (props) => {
// //     return(
// //       <div>
// //         <h1>{props.salary}</h1>
// //         <h2>{props.position}</h2>
// //         <h3>{props.company}</h3>
// //       </div>
// //     )
// //   }
// export default App;
