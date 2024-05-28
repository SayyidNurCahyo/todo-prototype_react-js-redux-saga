import { useState } from "react";
import Header from "./pages/Header";
import TodoInput from "./pages/todo/TodoInput";
import TodoList from "./pages/todo/TodoList";

function App() {
  const [selectedTodo, setSelectedTodo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <>
      <div className="d-flex">
        <main className="w-100 flex-grow-1">
          <Header />
          <div className="container-fluid pt-4">
            <TodoInput selectedTodo={selectedTodo} setIsLoading={setIsLoading}/>
            <TodoList setSelectedTodo={setSelectedTodo} isLoading={isLoading}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
