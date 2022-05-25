import "./App.css";
import "antd/dist/antd.min.css";
// import { ColorCard } from "./day01/complex-component/ColorCard";
import { TodoList } from "./todo-list/TodoList";

function App(props) {
  return (
    <div className="App">
      {/* <ColorCard></ColorCard> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
