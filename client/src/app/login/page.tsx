"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Typography className="text-4xl font-bold mb-6" gutterBottom>
        Log In to Emali Tickets
      </Typography>
      <form className="flex flex-col bg-[#fcfcfc] shadow-xl rounded-lg w-96 p-6">
        <FormControl>
          <FormHelperText id="my-helper-text">
            Enter your email address
          </FormHelperText>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            type="email"
            required
            className="w-full px-4"
          />
        </FormControl>
        <FormControl>
          <FormHelperText id="my-helper-text">Password</FormHelperText>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            type="password"
            required
            className="w-full px-4"
          />
        </FormControl>
        <Button
          variant="contained"
          color="error"
          className="m-4 bg-emerald-500 "
        >
          Log In
        </Button>
        <Typography className="text-black">
          Do not have an account?{" "}
          <Link href="/signup" className="underline text-blue-300">
            Sign Up
          </Link>
        </Typography>
      </form>
    </main>
  );
}
