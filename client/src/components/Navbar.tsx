"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Box className="flex flex-row shadow-xl px-4 py-2 justify-between">
        <Typography>Emali Ticketing</Typography>
        <Box className="flex flex-row gap-x-4">
          <Typography>
            <Link href="/">Home</Link>
          </Typography>
          <Typography>
            <Link href="/venues">Venues</Link>
          </Typography>
          <Typography>
            <Link href="/my-tickets">My Tickets</Link>
          </Typography>
        </Box>
        <Box className="flex flex-row justify-between gap-x-4">
          {/* <Typography>
            <Link href="/signup">Sign Up</Link>
          </Typography> */}
          <Typography>
            <Link href="/login">Log Out</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
