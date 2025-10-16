import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
  Chip,
  Button,
} from "@mui/material";

const Developers = () => {
  const developers = [
    {
      name: "Jessamyn Smith",
      role: "Sr Full Stack Web Developer",
      initials: "JS",
    },
    {
      name: "Daniel Hamilton",
      role: "Senior Software Engineer",
      initials: "DH",
    },
    {
      name: "Martijn Pieters",
      role: "Sr Stack Overflow Python Answerer",
      initials: "MP",
    },
    { name: "Ionică Bizău", role: "Full Stack Developer", initials: "IB" },
    { name: "Miroslav Kuták", role: "Senior C++ Developer", initials: "MK" },
    {
      name: "Ben Gottlieb",
      role: "Senior iOS Developer and Consultant",
      initials: "BG",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #0f766e, #0d9488)",
        color: "white",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
          Connect with
        </Typography>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={6}>
          12000+ top developers anytime
        </Typography>

        <Grid container spacing={3} mb={8}>
          {developers.map((dev, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "white",
                  color: "text.primary",
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: "#3b82f6",
                      width: 56,
                      height: 56,
                      fontWeight: "bold",
                      mr: 2,
                    }}
                  >
                    {dev.initials}
                  </Avatar>
                  <Box>
                    <Typography fontWeight="bold" fontSize="1.1rem">
                      {dev.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dev.role}
                    </Typography>
                  </Box>
                </Box>

                <Stack direction="row" spacing={1}>
                  <Chip
                    label="★ 5.0"
                    size="small"
                    sx={{ backgroundColor: "#e5e7eb" }}
                  />
                  <Chip
                    label="💬 250+"
                    size="small"
                    sx={{ backgroundColor: "#e5e7eb" }}
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center">
          <Typography variant="h6" fontWeight="600" mb={3}>
            Start working with our developers
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              "&:hover": { backgroundColor: "#dc2626" },
              px: 8,
              py: 1.5,
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: 2,
            }}
          >
            GET STARTED
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Developers;
