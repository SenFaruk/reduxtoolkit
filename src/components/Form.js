import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

const Form = () => {
  return (
    <Box sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
    }}>
      <TextField
        id="input-with-icon-textfield"
        label="todos"
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
    </Box>
  );
};

export default Form;
