import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addTodo } from './todoSlice';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        description,
        completed: false,
      }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
      <label className="font-bold text-xl text-gray-700 mb-2">New Todo Task</label>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;
