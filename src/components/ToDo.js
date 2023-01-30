import axios from 'axios';
import React, { useState } from 'react'

const ToDo = () => {

  const [alltasks,setallTasks] = useState([]);
  const [task,setTask] = useState("");
  const [title,setTitle] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    setallTasks([...alltasks,task]);
  }

  const deleteTask = (event) =>{
    const arrTask = alltasks;
    const index = arrTask.indexOf(event.target.value);
    arrTask.splice(index,1)
    setallTasks([...arrTask])
  }

  const addToDo = async () =>{

    if(!title && !alltasks.length == 0){
      alert("Enter ToDo");
    } else {

    

    const data = {
      title,
      tasks : alltasks,
    }

    try{
      const addToDo = await axios.post('todo',data)
      setallTasks([]);
      setTask("");
      setTitle("");
    }catch(error){
      console.log(error)
    }
  }
  }

  const editToDo = async (todo,id) => {
    try {
        // const newtitle = prompt("Updated Title",todo.title);
        // const newtask = prompt("Tasks",todo.tasks)
        // setTitle(newtitle);
        // setallTasks(...alltasks,newtask);

        console.log(title);
        console.log(alltasks);
        console.log(id);
        
        // const res = await axios.put(`todo/${id}`,title,alltasks);
        // console.log(res);

     } catch (error) {
        console.log(error)
     } 
}

  return (
    <div className="m-1 px-4 flex-row md:flex-col border">

      <div className="my-4 flex-col md:my-5">
        {/* Title div section*/}
        <div>
          <input className="w-full my-2 px-4 py-3 md:w-full md:py-2 border hover:border-mygreen rounded" type="text" placeholder="ToDo Title" value={title} onChange={(event)=>{
            setTitle(event.target.value);
          }}/>
        </div>
        {/* Task div section*/}
        <div className="my-2 flex justify-between gap-2">  
          <input className="w-full my-2 px-4 py-3 md:w-full md:px-5 md:py-2 border hover:border-mygreen rounded" id="task" type="text" placeholder="Add Tasks" value={task} onChange={(event)=>{setTask(event.target.value)}}/>
          
          <button className="my-2 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={(event)=>{
            if(!task){
              alert("Enter Task")
            }
            else{
              addTask(event);
            setTask("");
            }
        }}>ADD</button>
        </div>
      </div>
        {/* Task list section */}
      <div>
      {alltasks.map((e,i) =>
            <div key={i} className="my-2 flex border">
              <label className='mx-auto py-2 text-lg'>{e}</label>
              <div className="flex justify-end">
                <button className="py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded" onClick={(event)=>{
                  deleteTask(event)
                 }}>Delete</button>
              </div>
            </div>
      )}
      </div>
       
      {/* Save Button Section */}
      <div className="my-2 flex justify-center">  
        <button className='px-32 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-16 rounded' onClick={()=>{
          addToDo()
        }}>SAVE</button>  
      </div>

    </div>
  )
}

export default ToDo