import { Search, SortOutlined } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Box sx={{ padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Welcome, Chris.</Typography>
        <Box
          sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "50%",
            padding: "12px",
          }}
        >
          <img src="assets/bucket-icon.svg" alt="bucket-icon" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for fruit salad combos"
          sx={{
            width: "90%",
            "& .MuiOutlinedInput-input": {
              padding: "12px !important",
              paddingLeft: "0px !important",
              border: "unset !important",
            },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#F5F5F5",
              borderRadius: "12px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "unset !important",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            padding: "12px",
            backgroundColor: "#F7F7FC",
            borderRadius: "12px",
          }}
        >
          <SortOutlined />
        </Box>
      </Box>
    </Box>
  );
}
