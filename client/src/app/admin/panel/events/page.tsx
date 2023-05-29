"use client";
import {
  Box,
  Typography,
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Link,
} from "@mui/material";
import Axios from "axios";
import * as React from "react";
import { AiFillDelete } from "react-icons/ai";

interface Event {
  name: string;
  time: string;
  venue: {
    name: string;
  };
  price: number;
  date: string;
  description: string;
}

export default function Venues() {
  const [events, setEvents] = React.useState<Event[]>();

  React.useEffect(() => {
    try {
      fetch("http://localhost:8080/api/v1/events")
        .then((response) => response.json())
        .then((data) => setEvents(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteEvent = (): void => {
    Axios.delete("http:localhost:8080/api/v1/events:id");
  };

  return (
    <Box>
      <Typography align="center" className="font-bold text-xl">
        Events
      </Typography>
      <Box className="flex flex-col shadow-xl bg-[#fcfcfc] p-8 m-6 rounded-lg w-full">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button className="bg-emerald-500 hover:bg-emerald-800">
              <Link
                href="/admin/panel/venues/create-event"
                className="no-underline text-white"
              >
                Create Event
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Table className="mt-10">
          <TableHead>
            <TableRow>
              <TableCell className="text-xl font-bold">Event</TableCell>
              <TableCell className="text-xl font-bold">Venue</TableCell>
              <TableCell className="text-xl font-bold">Price</TableCell>
              <TableCell className="text-xl font-bold">Delete Event</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events?.map((event) => (
              <>
                <TableRow>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.venue.name}</TableCell>
                  <TableCell>{event.price}</TableCell>
                  <TableCell>
                    <Button onClick={deleteEvent}>
                      <AiFillDelete />
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </Box>
    </Box>
  );
}
