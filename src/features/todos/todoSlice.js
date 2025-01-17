import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    resetTodo: (state) => {
      state.todos = [];
    }
  }
})


export const { 
  addTodo,
  toggleTodo,
  deleteTodo,
  resetTodo,
} = todoSlice.actions;

export default todoSlice.reducer;