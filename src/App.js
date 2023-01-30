
import './App.css';
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
        <NavBar/>
      <div className="md:flex">
        <ToDo></ToDo>
        <ToDoList></ToDoList>
      </div>
    </div>
   
  );
}

export default App;
