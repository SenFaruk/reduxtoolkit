import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "learn polinomlar",
      },
      {
        id: "2",
        title: "learn algoritma",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {addTodo} = todosSlice.actions;

export default todosSlice.reducer;
