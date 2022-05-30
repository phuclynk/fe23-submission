import './App.css';
import {TodoListPanel} from './todo-list/TodoListPanel.jsx'
function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', fontSize:"20px", marginTop: "50px"}}>
      <TodoListPanel/>
    </div>
  );
}

export default App;
