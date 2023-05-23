"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box className="flex flex-col w-48 shadow-xl border-r-black">
      <Typography className="font-bold my-6" gutterBottom align="center">
        Emali Ticketing
      </Typography>
      <Box className="flex flex-col gap-y-4 mt-3">
        <Button>
          <Link href="admin/panel/events">Events</Link>
        </Button>
        <Button>
          <Link href="admin/panel/venues">Venues</Link>
        </Button>
        <Button>
          <Link href="admin/panel/tickets">Tickets</Link>
        </Button>
      </Box>
      <Box className="absolute bottom-4 ml-10">
        <Button className="">Logout</Button>
      </Box>
    </Box>
  );
}
