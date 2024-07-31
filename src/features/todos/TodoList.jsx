import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todoApp.todos);
    const dispatch = useDispatch();

    return (
        <ul className="w-full max-w-md mx-auto mt-8 space-y-4">
            {todos && todos.map(todo => (
                <li 
                    key={todo.id} 
                    className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <div className="flex-grow">
                        <div className={`font-bold text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {todo.title}
                        </div>
                        <div className={`text-gray-600 text-sm ${todo.completed ? 'line-through' : ''}`}>
                            {todo.description}
                        </div>
                    </div>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-red-600 transition duration-300"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
