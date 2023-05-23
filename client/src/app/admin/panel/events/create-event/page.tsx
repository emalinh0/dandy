"use client";
import * as React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm, Resolver } from "react-hook-form";
import { useRouter } from "next/navigation";
import Axios from "axios";

interface FormValues {
  name: string;
  venue: string;
  date: Date;
  time: string;
  price: number;
  description: string;
}

interface Venue {
  _id: string;
  name: string;
  location: string;
  capacity: number;
  description: string;
}

export default function CreateEvent() {
  const [venues, setVenues] = React.useState<Venue[]>([]);

  React.useEffect(() => {
    Axios.get("http://localhost:8080/api/v1/venues").then((response) => {
      setVenues(response.data);
    });
  }, []);

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
            venue: {
              type: "required",
              message: "This is required.",
            },
            date: {
              type: "required",
              message: "This is required.",
            },
            time: {
              type: "required",
              message: "This is required.",
            },
            price: {
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
      Axios.post("http://localhost:8080/api/v1/events", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => router.push("/admin/panel/events"));
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <Box className="px-[3%]">
      <Typography variant="h4" className="text-center font-bold mb-6">
        Create Event
      </Typography>
      <form
        className="p-8 bg-[#fcfcfc] rounded-lg shadow-xl"
        onSubmit={onSubmit}
      >
        <Stack spacing={2}>
          <TextField
            id="name"
            label="Event Name"
            variant="outlined"
            fullWidth
            required
            {...register("name")}
          />
          <FormHelperText
            sx={{
              fontWeight: 500,
              margin: "10px",
              fontSize: 16,
              color: "#11142d",
            }}
          >
            Select Venue
          </FormHelperText>
          <Select required {...register("venue")}>
            <MenuItem value="Nyayo Stadium">Nyayo Stadium</MenuItem>
            <MenuItem value="Nyayo Stadium">Kasarani Stadium</MenuItem>
            {venues.map((venue) => (
              <>
                <MenuItem value={venue.name}>{venue.name}</MenuItem>
              </>
            ))}
          </Select>
          <TextField
            id="date"
            label="Date"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            {...register("date")}
          />
          <TextField
            id="time"
            label="Time"
            type="text"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            {...register("time")}
          />
          <TextField
            id="price"
            label="Price"
            variant="outlined"
            fullWidth
            required
            {...register("price")}
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
            className="bg-emerald-500 hover:bg-emerald-800"
            type="submit"
            fullWidth
          >
            Create Event
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
