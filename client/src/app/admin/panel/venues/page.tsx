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

  const deleteVenue = (): void => {
    Axios.delete("http:localhost:8080/api/v1/venues:id");
  };

  return (
    <Box>
      <Typography align="center" className="font-bold text-xl">
        Venues
      </Typography>
      <Box className="flex flex-col shadow-xl bg-[#fcfcfc] p-8 m-6 rounded-lg w-full">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button className="bg-emerald-500 hover:bg-emerald-800">
              <Link
                href="/admin/panel/venues/create-venue"
                className="no-underline text-white"
              >
                Create Venue
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Table className="mt-10">
          <TableHead>
            <TableRow>
              <TableCell className="text-xl font-bold">Venue</TableCell>
              <TableCell className="text-xl font-bold">Location</TableCell>
              <TableCell className="text-xl font-bold">Capcity</TableCell>
              <TableCell className="text-xl font-bold">Delete Venue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {venues?.map((venue) => (
              <>
                <TableRow>
                  <TableCell>{venue.name}</TableCell>
                  <TableCell>{venue.location}</TableCell>
                  <TableCell>{venue.capacity}</TableCell>
                  <TableCell>
                    <Button onClick={deleteVenue}>
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
