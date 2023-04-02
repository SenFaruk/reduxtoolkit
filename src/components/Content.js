import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";

const Content = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControlLabel label="" control={<Checkbox color="primary" />} />
            <Typography variant="body1" color="initial">
              {index + 1} - {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Content;
