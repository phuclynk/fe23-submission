import "./App.css";
import { Lesson } from "./day2/lesson/Lesson";
import {Card} from "./day2/complex-component/card/Card"
import AddTodoItemForm from "./day3/todo-list/add-todo-item-form/AddTodoItemForm";
import TodoListPanel from "./day3/todo-list/todo-list-panel/TodoListPanel";
import TodoList from "./day3/todo-list/TodoList";


function App() {
  return (
    <div className="App">
      <div className="container">
     {/* < <AddTodoItemForm/>
      <TodoListPanel/>> */}
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
