import React from "react";
import { Box, Paper, Stack, TextField } from "@mui/material";

function District() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: "90%",
          height: "500px",
        },
      }}
    >
      <Paper elevation={3}>
        <div className="row">
          <div className="col">
            <div className="DistrictText">
              <TextField
                id="standard-basic"
                label="District"
                variant="standard"
              />
            </div>
          </div>
          
        </div>
      </Paper>
    </Box>
  );
}

export default District;
