"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Resolver } from "react-hook-form";
import Axios from "axios";

interface LoginProps {
  email: string;
  password: string;
}

const resolver: Resolver<LoginProps> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Please enter your email address.",
          },
          password: {
            type: "required",
            message: "Please enter your password.",
          },
        }
      : {},
  };
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver });

  const onSubmit = handleSubmit((data) => {
    try {
      Axios.post("http://localhost:8080/api/v1/users/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => router.push("/"));
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Typography className="text-4xl font-bold mb-6" gutterBottom>
        Log In to Emali Tickets
      </Typography>
      <form
        className="flex flex-col bg-[#fcfcfc] shadow-xl rounded-lg w-96 p-6"
        method="POST"
        onSubmit={onSubmit}
        action="http://localhost:8080/api/v1/users/login"
      >
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
          type="submit"
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
