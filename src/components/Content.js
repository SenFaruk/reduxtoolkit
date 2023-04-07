import React from "react";

import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

const Content = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  const handleCheckboxChange = (id) => {
    dispatch(toggle({ id }));
  };
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ")) {
      dispatch(destroy(id));
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "3px solid black",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "flex-start",
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleDestroy(item.id)}
          >
            sil
          </Button>
        </Box>
      ))}
    </>
  );
};

export default Content;
