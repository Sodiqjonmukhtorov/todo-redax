import AddTodo from "./features/todos/AddTodo";
import TodoList from "./features/todos/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { resetTodo } from "./features/todos/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoApp.todos);
  const todoCounts = todos ? todos.filter(todo => !todo.completed).length : 0;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="w-full text-center py-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-4xl font-extrabold shadow-md">
        Todo List Application
      </header>
      <main className="flex-grow w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 mt-8 mb-6">
        <AddTodo />
        <TodoList />
      </main>
      <footer className="w-full text-center text-gray-100 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-sm flex items-center justify-between px-6 shadow-lg">
        <div className="text-white font-medium">
          Tasks Left: <span id="tasks-left" className="font-bold">{todoCounts}</span>
        </div>
        <div className="text-white">Created By Shrikant Yadav</div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs hover:bg-red-700 transition duration-300"
          onClick={() => dispatch(resetTodo())}
        >
          Reset
        </button>
      </footer>
    </div>
  );
}

export default App;
