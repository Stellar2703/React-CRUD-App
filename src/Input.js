import React,{useState} from 'react';

const Input=()=>{
const [input,setInput]=useState(''); // input state

const handleSubmit=()=>{ 
    if(input==='file.txt'){ // check if input is equal to file.txt
        alert('Testcase Passed'); // if yes show alert
    }else{
        alert('Testcase Failed'); // if no show alert
    }
    setInput(''); // reset input
}

return (
    
    <div className="main">
    <div className="task">
        <h1>Task 1</h1>
        <p>What is the name of the text file present in the root folder </p>
    </div>

    <div className="input">
        <input value={input} onChange={(e)=>setInput(e.target.value)} />
    </div>
    <div className="input">
        <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
)
}
export default Input;