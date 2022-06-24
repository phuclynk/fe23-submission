import { Provider } from "react-redux";
import { todoStore } from "./Component/store/todoStore";
import { TodoApp } from "./Component/TodoApp";
function App() {
   return (
      <>
         <Provider store={todoStore}>
            <TodoApp />
         </Provider>
      </>
   );
}

export default App;
