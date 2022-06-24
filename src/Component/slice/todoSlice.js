import { createSlice } from "@reduxjs/toolkit";

const getInitTodoList = () => {
   var list = localStorage.getItem("todo-list");
   if (list) {
      return JSON.parse(list);
   }
   return [];
};
export const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todoList: getInitTodoList(),
   },
   reducers: {
      updateTodoList: (state, action) => {
         state.todoList = [...action.payload];
         localStorage.setItem("todo-list", JSON.stringify(state.todoList));
      },
   },
});

export const { updateTodoList } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
