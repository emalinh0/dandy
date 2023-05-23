"use client";
import Navbar from "../../components/Navbar";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Button,
} from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { generateTicketPdf } from "@/components/TicketPdf";

export default function myTickets() {
  const tickets = [
    {
      name: "Gor Mahia vs AFC",
      venue: "City Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
    {
      name: "Mathare vs Tusker",
      venue: "Kasarani Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
    {
      name: "KK Homeboys vs Wazito FC",
      venue: "Nyayo Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
    {
      name: "Vihiga Bullets vs Chemelil Sugar",
      venue: "Bukhungu Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
    {
      name: "Kariobangi Sharks vs Ulinzi Stars",
      venue: "Bukhungu Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
  ];

  return (
    <Box className="px-20">
      <Typography className="text-2xl font-bold py-6" align="center">
        My Tickets
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="text-xl font-bold">Event</TableCell>
            <TableCell className="text-xl font-bold">Venue</TableCell>
            <TableCell className="text-xl font-bold">Date</TableCell>
            <TableCell className="text-xl font-bold">Time</TableCell>
            <TableCell className="text-xl font-bold">Price</TableCell>
            <TableCell className="text-xl font-bold">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <>
              <TableRow>
                <TableCell>{ticket.name}</TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell>{ticket.time}</TableCell>
                <TableCell>{ticket.price}</TableCell>
                <TableCell>
                  <Button
                    endIcon={<AiOutlineDownload />}
                    onClick={generateTicketPdf}
                  >
                    Get Ticket
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Box>
  );
}
