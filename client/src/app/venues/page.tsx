"use client";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";

export default function Venues() {
  const venues = [
    {
      name: "Nyayo Stadium",
      location: "Nairobi",
      capacity: "60,000",
    },
    {
      name: "Kasarani Stadium",
      location: "Nairobi",
      capacity: "60,000",
    },
    {
      name: "Bukhungu Stadium",
      location: "Kakamega",
      capacity: "60,000",
    },
    {
      name: "City Stadium",
      location: "Nairobi",
      capacity: "20,000",
    },
  ];
  return (
    <Box className="px-[3%]">
      <Typography
        className="text-4xl font-bold my-6"
        gutterBottom
        align="center"
      >
        Venues
      </Typography>

      <Box className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        <Box className="flex flex-row justify-evenly gap-x-4">
          {venues.map((venue) => (
            <>
              <Box className="flex flex-col items- bg-[#fefefe] rounded-lg shadow-xl p-6 w-72">
                <Typography>Stadium: </Typography>
                <Typography className="text-xl font-bold mb-6" gutterBottom>
                  {venue.name}
                </Typography>
                <Typography className="mb-6" gutterBottom>
                  Location: {""}
                  {venue.location}
                </Typography>
                <Typography className="mb-6" gutterBottom>
                  Capacity: {""}
                  {venue.capacity}
                </Typography>
                <Stack>
                  <Typography>View upcoming events</Typography>
                  <Button>Go</Button>
                </Stack>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
