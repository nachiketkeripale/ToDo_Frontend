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

    const data = {
      title,
      tasks : alltasks,
    }

    try{
      const addToDo = await axios.post('todo',data)
      console.log(addToDo);

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="mx-2 flex-row md:flex-col border-2">
      <div className="my-2 flex-col md:my-5">
      <input className="m-2 px-16 py-3 md:mx-2 md:px-5 md:py-2 border hover:border-mygreen rounded" type="text" placeholder="ToDo Title" value={title} onChange={(event)=>{
          setTitle(event.target.value);
        }}/>
      <input className="m-2 px-16 py-3 md:mx-2 md:px-5 md:py-2 border hover:border-mygreen rounded" id="task" type="text" placeholder="Add Tasks" value={task} onChange={(event)=>{setTask(event.target.value)}}/>
        <div className="my-2 flex justify-center">  
      <button className=" px-24 py-3 md:mx-2 md:px-5 md:py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded" onClick={(event)=>{
          addTask(event);
          setTask("");
      }}>ADD</button>
        </div>
      </div>
      
        {alltasks.map((e) =>
            <div className="my-2 flex border-2">
              {/* <input className='x-2 py-3 md:mx-2 md:px-5 md:py-2 border hover:border-mygreen rounded' type="checkbox"/> */}
              <label className='mx-auto py-2 text-xl font-bold'>{e}</label>
              <div className="flex justify-end">
              <button className="py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded" onClick={(event)=>{
                deleteTask(event)
              }}>delete</button>
              </div>
              
            </div>
      )}
      
      <div className="my-2 flex justify-center">  
        <button className='px-32 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-16 rounded' onClick={()=>{
          addToDo()
        }}>SAVE</button>  
      </div>
    </div>
  )
}

export default ToDo