"use client";
import { Box, Button, Typography } from "@mui/material";
import bg from "../assets/bg.jpg";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  // const data = await fetch("http://localhost:8080/api/v1/events", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const events = await data.json();

  const events = [
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
    {
      name: "Police FC vs Chemelil Sugar",
      venue: "Bukhungu Stadium",
      date: "12/12/2023",
      time: "12:00 PM",
      price: "Ksh. 500",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          className="text-4xl font-bold mb-6"
          align="center"
          gutterBottom
        >
          Welcome to Emali Tickets
        </Typography>
        <Box>
          <Typography
            className="text-2xl font-bold mb-6"
            gutterBottom
            align="center"
          >
            Get tickets for your favorite sporting events
          </Typography>
        </Box>
        <Box className="flex flex-row justify-evenly flex-wrap gap-x-2">
          {events.map((event) => (
            <>
              <Box className="bg-[#fcfcfc] p-8 shadow-xl rounded-lg mb-4 w-72">
                <Typography className="font-bold text-xl">
                  {event.name}
                </Typography>
                <Typography>{event.venue}</Typography>
                <Typography>{event.date}</Typography>
                <Typography>{event.time}</Typography>
                <Typography>{event.price}</Typography>
                <Button variant="contained" className="bg-emerald-500 mt-8">
                  <Link href="/ticket/:id">Buy Ticket</Link>
                </Button>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </main>
  );
}
