"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box className="flex flex-col w-48 shadow-xl border-r-black h-screen absolute left-0">
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
  );
}
