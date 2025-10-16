import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";

const Hero = () => (
  <Box
    sx={{
      background: "linear-gradient(to right, #0f766e, #0d9488)",
      color: "white",
      py: 10,
      textAlign: "center",
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Find a developer for
      </Typography>
      <Typography variant="h3" fontWeight="bold" mb={6}>
        live mentorship & freelance projects
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ef4444",
          "&:hover": { backgroundColor: "#dc2626" },
          px: 6,
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
          fontSize: "1.1rem",
        }}
      >
        GET HELP NOW
      </Button>

      <Box
        mt={10}
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
      ></Box>

      <Box
        component="img"
        src={"hero.png"}
        alt="Mentorship illustration"
        sx={{
          width: "100%",
          maxWidth: 500,
          display: "block",
          mx: "auto",
          mb: -20,
        }}
      />
    </Container>
  </Box>
);

export default Hero;
