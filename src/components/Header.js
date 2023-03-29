import React from "react";
import {Typography, Box} from "@mui/material/";


import Form from "./Form";
import Content from "./Content";

const Header = () => {
  return (
    <> 
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems:"center",
        width:"60%",
        Height:"100vh",
        backgroundColor:"#ddd4d4",
        m:'auto',
        borderRadius: "30px",
        border:"6px solid blue",

    }}>

   
      <Typography variant="h3" color="primary" 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt:10,
        
      }}>
        Todos
      </Typography>

     <Form/>
     <Content/>
     </Box>
    </>
  );
};

export default Header;
