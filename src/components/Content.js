import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Content = () => {
  return (
    <>
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems:"flex-start",
    }}>

 
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
          learn react
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
         dayımıasın ağa mısın onu sorun
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControlLabel label="" control={<Checkbox color="primary" />} />
        <Typography variant="body1" color="initial">
         dayıları kıralı
        </Typography>
      </Box>
      </Box>
    </>
  );
};

export default Content;
