import logo from './logo.svg';
import './App.css';
import { TaskList } from './task-list/TaskList';
import { TodoHeader } from './todo-header/TodoHeader';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <TaskList/>
    </div>
  );
}

export default App;
