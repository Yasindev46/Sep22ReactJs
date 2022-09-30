import logo from './logo.svg';
// import './App.css';

 import {Login} from "./Components/Login"    //naming export 
import {Navbar} from "./Components/Navbar"
import {Todolist} from "./Components/TodoList"
import {Mapproducts} from "./Components/Mapproducts"
import { ColorsHome } from './API/ColorsHome';
import { UpdateTodo } from './Components/UpdateTodo';
import { TodoAdvance } from './TodoAdvance/TodAdvance';




function App() {

  return (
    <div className="App" >
      {/* <Navbar/>
      <Login/> */}
{/* <ColorsHome/> */}
<Todolist/>
{/* <UpdateTodo/> */}
{/* <TodoAdvance/> */}
  
    </div>
  );
}

export default App;
