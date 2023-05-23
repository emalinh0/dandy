"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import Axios from "axios";
import { useRouter } from "next/navigation";
interface SignupProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const resolver: Resolver<SignupProps> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
          lastName: {
            type: "required",
            message: "This is required.",
          },
          email: {
            type: "required",
            message: "This is required.",
          },
          password: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>({ resolver });
  const onSubmit = handleSubmit((data) => {
    try {
      Axios.post("http://localhost:8080/api/v1/users", data, {
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
        Sign Up to Emali Tickets
      </Typography>
      <form
        className="p-4 flex flex-col bg-[#fcfcfc] shadow-xl rounded-lg"
        onSubmit={onSubmit}
      >
        <Box>
          <FormControl sx={{ flex: 1, flexDirection: "row", width: "100%" }}>
            <Grid container width="100%">
              <Grid item direction="column" xs={12} sm={6}>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px",
                    color: "#11142d",
                  }}
                >
                  First Name
                </FormHelperText>
                <TextField
                  required
                  color="info"
                  variant="outlined"
                  sx={{
                    width: "95%",
                  }}
                  {...register("firstName")}
                />
                {errors?.firstName && (
                  <Typography>{errors.firstName.message}</Typography>
                )}
              </Grid>
              <Grid item direction="column" xs={12} sm={6}>
                <FormHelperText
                  sx={{
                    fontWeight: 500,
                    margin: "10px",
                    color: "#11142d",
                  }}
                >
                  Last Name
                </FormHelperText>
                <TextField
                  fullWidth
                  required
                  color="info"
                  variant="outlined"
                  {...register("lastName")}
                  autoComplete="off"
                />
                {errors?.lastName && (
                  <Typography>{errors.lastName.message}</Typography>
                )}
              </Grid>
            </Grid>
          </FormControl>
        </Box>

        <FormControl>
          <FormHelperText
            id="my-helper-text"
            sx={{
              fontWeight: 500,
              margin: "10px",
              color: "#11142d",
            }}
          >
            Email
          </FormHelperText>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            type="email"
            required
            {...register("email")}
          />
          {errors?.email && <Typography>{errors.email.message}</Typography>}
        </FormControl>
        <FormControl>
          <FormHelperText
            id="my-helper-text"
            sx={{
              fontWeight: 500,
              margin: "10px",
              color: "#11142d",
            }}
          >
            Password
          </FormHelperText>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            type="password"
            required
            {...register("password")}
          />
          {errors?.password && (
            <Typography>{errors.password.message}</Typography>
          )}
        </FormControl>
        <Button
          variant="contained"
          color="error"
          className="my-6  bg-emerald-500"
          type="submit"
        >
          Sign Up
        </Button>
        <Typography className="text-black">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-300">
            Log In
          </Link>
        </Typography>
      </form>
    </main>
  );
}
