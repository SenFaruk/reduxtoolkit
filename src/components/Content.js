import React from "react";

import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/todos/todosSlice";

const Content = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  const handleCheckboxChange = (id) => {
    dispatch(toggle({ id }));
  };

  return (
    <>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox
            checked={item.completed}
            onChange={() => handleCheckboxChange(item.id)}
            inputProps={{
              "aria-label": "controlled",
            }}
          />

          <Typography
            variant="body1"
            color="initial"
            sx={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {index + 1} - {item.title}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default Content;
