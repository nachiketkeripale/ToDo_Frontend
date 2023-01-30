import axios from "axios";

import React, { useEffect, useState } from "react";
import EditToDo from "./EditToDo";

const ToDoList = () => {
  const [alltodos, setalltodos] = useState(null);

  const [alltasks, setallTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setID] = useState(false);

  const [isOpen, setisOpen] = useState(false);

  const fetchAllToDos = async () => {
    try {
      const res = await axios.get("alltodos");

      if (res.data.getalltodos.length > 0) {
        setalltodos(res.data.getalltodos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToDo = async (event, id) => {
    event.preventDefault();
    try {
      await axios.delete(`todo/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const editToDo = async (event, todo, id) => {
    setisOpen(true);

    event.preventDefault();

    setTitle("");
    setID("");
    setallTasks([]);

    try {
      setTitle(todo.title);
      setID(todo._id);
      todo.tasks.map((e) => {
        return setallTasks((arr) => [...arr, e]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllToDos();
  }, [alltodos]);

  return (
    <div className="overflow-auto w-full">
      <div className="px-2 flex-col">
        {alltodos &&
          alltodos.map((todo, i) => (
            <div className="m-1 p-3 w-auto border" key={i}>
              <div className="flex">
                <div className="mr-auto">
                  <h1 className="px-5 text-3xl font-medium">{todo.title}</h1>
                </div>
                <div className="ml-auto flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={(event) => {
                      editToDo(event, todo, todo._id);
                    }}>
                    Edit
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={(event) => {
                    const confirmResult = window.confirm("Are you sure you want to delete this todo?");
                        if(confirmResult)
                        {
                            deleteToDo(event, todo._id);
                        }
                    }}>
                    Delete
                  </button>
                </div>
              </div> 

              {todo.tasks.map((o, i) => (
                <div className="py-1 flex gap-2" key={i}>
                  <input className="border-2 w-5" type="checkbox" />
                  <label className="text-xl">{o}</label>
                </div>
              ))}
            </div>
          ))}
      </div>

      <div>
        <EditToDo
          title={title}
          alltasks={alltasks}
          id={id}
          setVisibility={""}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default ToDoList;
