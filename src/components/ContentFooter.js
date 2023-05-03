import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => !item.completed).length;
  // ==============

  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();


  return (
    <>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1" color="initial">
            {itemsLeft} item{itemsLeft > 1 && "s"} left
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <Button onClick = {()=>dispatch(changeActiveFilter('all'))}>All</Button>
          <Button onClick = {()=>dispatch(changeActiveFilter('active'))}>active</Button>
          <Button onClick = {()=>dispatch(changeActiveFilter('completed'))}>completed</Button>
        </Box>
        <Box>
          <Button 
          onClick = {()=>dispatch(clearCompleted())}
          variant="text" color="primary">
            Clear completed
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContentFooter;
