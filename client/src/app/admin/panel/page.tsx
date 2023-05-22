"use client";

import { Box, Typography, Stack, Button } from "@mui/material";
import yup from "yup";

export default function adminPanel() {
  return (
    <Box className="px-[3%]">
      <Box>
        <Typography
          className="text-4xl font-bold my-6"
          gutterBottom
          align="center"
        >
          Admin Panel
        </Typography>
      </Box>
    </Box>
  );
}
