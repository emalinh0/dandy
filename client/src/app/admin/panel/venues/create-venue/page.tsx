"use client";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";
import Axios from "axios";

interface FormValues {
  name: string;
  location: string;
  capacity: number;
  description: string;
}

export default function CreateVenue() {
  const router = useRouter();
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required.",
            },
            location: {
              type: "required",
              message: "This is required.",
            },
            capacity: {
              type: "required",
              message: "This is required.",
            },
            description: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    try {
      Axios.post("http://localhost:8080/api/v1/venues", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => router.push("/admin/panel/venues"));
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <Box className="px-[3%]">
      <Typography variant="h4" className="text-center font-bold mb-6">
        Create Venue
      </Typography>
      <form
        className="p-8 bg-[#fcfcfc] rounded-lg shadow-xl"
        onSubmit={onSubmit}
      >
        <Stack spacing={2}>
          <TextField
            id="name"
            label="Venue Name"
            variant="outlined"
            fullWidth
            required
            {...register("name")}
          />
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            fullWidth
            required
            {...register("location")}
          />
          <TextField
            id="capacity"
            label="Capacity"
            variant="outlined"
            fullWidth
            required
            {...register("capacity", { valueAsNumber: true })}
          />
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
            {...register("description")}
          />
          <Button
            variant="contained"
            className="bg-emerald-500 hover:bg-emerald-700"
            type="submit"
            fullWidth
          >
            Create Venue
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
