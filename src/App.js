import logo from './logo.svg';
import {Todo} from "./YasinSir/Todo"  //naming import
import {TodoAdvance} from "./TodoAdvance/TodAdvance"
import { Todo1 } from './YasinSir/Todo1';
import { Colors } from './YasinSir/Colors';
import {OneClick} from "./Components/OneClick"
import { Fullname } from './Components/Fullname';
import { Toggle1 } from './Components/Toggle1';
import { Toggle2 } from './Components/Toggle2';
import {Api} from "./API/Api"
import {ColorsHome} from "./API/ColorsHome"
import HookRouting from './Hooks/HookRouting';

function App() {
  return (
    <div className="App" >
      {/* <TodoAdvance/> */}
      {/* <Todo/> */}
      {/* <Todo1/> */}
      {/* <ColorsHome/> */}
      {/* <Colors/> */}
      {/* <OneClick/> */}
      {/* <Fullname/> */}
      {/* <Toggle1/>
      <Toggle2/> */}
      {/* <Api/> */}
      <HookRouting/>
    </div>
  );
}

export default App;
