import "./App.css";
import { Cards } from "./components/card-list/cards/Cards.jsx";
// todo-list >>>
import { TodoForm } from "./components/todo-list/todo-form/TodoForm";
import { TodoList } from "./components/todo-list/todo-list/TodoList";
import { WrapperHero } from "./components/wrapper/wrapper-hero/WrapperHero";

function App() {
  return (
    <div className="App">
      <div className="todo-list-hero">
        <TodoForm />
        <TodoList />
      </div>
      <div className="wrapper-container">
        <WrapperHero />
      </div>
      <div className="card-list">
        <Cards />
      </div>
    </div>
  );
}

export default App;
