import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  console.log(title);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) {
      return;
    }
    e.preventDefault();
    dispatch(addTodo({ title }));
    setTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="input-with-icon-textfield"
          label="todos"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="what needs to be done"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
};

export default Form;
