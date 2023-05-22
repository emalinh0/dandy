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

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Typography className="text-4xl font-bold mb-6" gutterBottom>
        Sign Up to Emali Tickets
      </Typography>
      <form className="p-4 flex flex-col bg-[#fcfcfc] shadow-xl rounded-lg">
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
                />
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
                <TextField fullWidth required color="info" variant="outlined" />
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
          />
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
          />
        </FormControl>
        <Button
          variant="contained"
          color="error"
          className="my-6  bg-emerald-500"
        >
          Log In
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
