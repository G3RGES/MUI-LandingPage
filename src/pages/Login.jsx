import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ mt: 10 }} error={!!errors.email}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        <FormHelperText>
          {errors.email
            ? errors.email.message
            : "We'll never share your email."}
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ mt: 10 }} error={!!errors.password}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <FormHelperText>
          {errors.password
            ? errors.password.message
            : "We'll never share your password."}
        </FormHelperText>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: "black",
          color: "white",
          px: 4,
          py: 1,
          "&:hover": { bgcolor: "grey.800" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
