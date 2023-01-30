import React from 'react'
import { useEffect, useState,} from 'react'
import axios from 'axios';
import ReactModel from 'react-modal'
import "../App.css";

const EditToDo = ({title,alltasks,id,isOpen}) => {

  const [newtitle,setnewtitle] = useState();
  const [updatedTasks,setallTasks] = useState([]);
  const [task,setTask] = useState("");
  const [Visibility,setVisibility] = useState("hidden");

  const [IsModalOpen, setIsModalOpen] = useState(false);
const closeModal = () => setIsModalOpen(false);

  const deleteTask = (event) =>{
    const arrTask = alltasks;
    const index = arrTask.indexOf(event.target.value);
    arrTask.splice(index,1)
    setallTasks([...arrTask])
  }

  const addTask = (event) => {
    event.preventDefault();
    setallTasks([...updatedTasks,task]);
  }

  const updatedToDo = async () => {
    try {
      const todo = {
        title: newtitle,
        tasks: updatedTasks
      }
        const res = await axios.put(`todo/${id}`,todo);
        console.log(res);

        setallTasks([]);
        setnewtitle("");
        setVisibility("hidden")
        closeModal();

     } catch (error) {
        console.log(error)
     } 
    }

  useEffect(()=>{
        if(!title && !alltasks){
          setallTasks([]);
          setnewtitle("");
          setIsModalOpen(false)
        }else{
        setnewtitle(title);
        alltasks.map((e)=> {
          setallTasks(arr =>[...arr,e]);
          setVisibility("");
          return 0;
        })
        setIsModalOpen(isOpen)
        }
      },[title,alltasks,isOpen]);


  return (

    <ReactModel
    className="ReactModal__Content"
        isOpen={IsModalOpen}
        
        contentLabel="Example Modal">

      <div className={Visibility}>
       <input className="p-2 m-2 w-full py-3 md:mx-2 md:px-5 md:py-2 border hover:border-mygreen rounded" type="text" placeholder="ToDo Title" value={newtitle} onChange={(event)=>{
          setnewtitle(event.target.value)
       }}/>

      
      <div className='flex justify-center'>
      <input className="p-2 m-2 w-full py-3 md:mx-2 md:px-5 md:py-2 border hover:border-mygreen rounded" id="task" type="text" placeholder="Add Tasks" value={task} onChange={(event)=>{setTask(event.target.value)}}/>
      <button className="px-4 md:px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded" onClick={(event)=>{
          addTask(event);
          setTask("");
      }}>ADD</button>
      </div>
       

      <ul className="my-4 h-36 md:h-48 p-2 overflow-y-auto flex-col">
      {
        updatedTasks.map((e,i)=>(
          <li className="m-1 flex border rounded" key={i}>
            <label className='mx-auto py-2 text-xl font-bold'>{e}</label>
              <div className="flex justify-end">
              <button className="py-3 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded" onClick={(event)=>{
                deleteTask(event)
              }}>delete</button>
              </div>
          </li>
        ))
      }
      </ul>
      <div className="m-2 flex justify-center">  
        <button className='m-2 px-4 md:px-32 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-16 rounded' onClick={()=>{
          updatedToDo();
        }}>SAVE</button>  
        <button className='m-2 px-4 md:px-32 py-3 bg-blue-500 hover:bg-red-700 text-white font-bold md:py-2 md:px-16 rounded' onClick={()=>{
          closeModal();
        }}>CLOSE</button> 
      </div>
      
    </div>
        
</ReactModel>
    
  )
}

export default EditToDo