"use client";
import * as React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import Axios from "axios";

interface Venue {
  name: string;
  location: string;
  capacity: number;
  description: string;
}

export default function Venues() {
  const [venues, setVenues] = React.useState<Venue[]>();

  React.useEffect(() => {
    Axios.get("http://localhost:8080/api/v1/venues").then((response) => {
      setVenues(response.data);
    });
  }, []);

  return (
    <Box className="px-[3%]">
      <Typography
        className="text-4xl font-bold my-6"
        gutterBottom
        align="center"
      >
        Venues
      </Typography>

      <Box className="flex flex-row justify-evenly flex-wrap rounded-lg shadow-xl gap-y-4 gap-x-4 p-4">
        {venues?.map((venue) => (
          <>
            <Box className="flex flex-col flex-wrap bg-[#fefefe] rounded-lg shadow-xl p-6 w-72">
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
  );
}
