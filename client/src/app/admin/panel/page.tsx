"use client";

import { Box, Typography, Stack, Button, IconButton } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

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
        <Stack direction="row" spacing={2}>
          <Button className="bg-emerald-500 hover:bg-emerald-800 no-underline text-white">
            Create Event
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-800 no-underline text-white">
            Create Venue
          </Button>
        </Stack>
        <Box>
          <Typography className="text-2xl font-bold my-6" gutterBottom>
            Overview
          </Typography>
          <Box className="flex flex-col shadow-xl bg-[#fcfcfc] p-8 m-6 rounded-lg w-full gap-y-3">
            <Box className="bg-[#fefefe] shadow-xl rounded-lg  p-6">
              <Typography className="text-xl font-bold">Events</Typography>
              <Typography>View all events currently on the database</Typography>
              <IconButton className="bg-emerald-500">
                <Link href="/admin/panel/events">
                  <AiOutlineArrowRight />
                </Link>
              </IconButton>
            </Box>
            <Box className="bg-[#fefefe] shadow-xl rounded-lg p-6">
              <Typography className="text-xl font-bold">Venues</Typography>
              <Typography>View all venues currently on the database</Typography>
              <IconButton className="bg-emerald-500">
                <Link href="/admin/panel/venues">
                  <AiOutlineArrowRight />
                </Link>
              </IconButton>
            </Box>
            <Box className="bg-[#fefefe] shadow-xl rounded-lg p-6">
              <Typography className="text-xl font-bold">Tickets</Typography>
              <Typography>
                View all tickers currently on the database
              </Typography>
              <IconButton className="bg-emerald-500">
                <Link href="/admin/panel/tickets">
                  <AiOutlineArrowRight />
                </Link>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
