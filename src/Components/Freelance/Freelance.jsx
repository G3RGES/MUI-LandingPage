import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Paper,
} from "@mui/material";
import { Code, Build, Edit } from "@mui/icons-material";

const Freelance = () => (
  <Box py={8}>
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              p: 4,
              borderRadius: 2,
              minHeight: 320,
            }}
          >
            <Box
              component="img"
              src={"mentorship.jpg"}
              alt="Mentorship session"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
                boxShadow: 4,
              }}
            />
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="text.primary"
            mb={3}
          >
            Project-based freelance work
          </Typography>

          <Stack spacing={2.5} mb={5}>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Code sx={{ color: "primary.main" }} />
              <Typography color="text.secondary">
                Find experts for on-demand code review
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1.5}>
              <Build sx={{ color: "primary.main" }} />
              <Typography color="text.secondary">
                Build features for your existing product
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1.5}>
              <Edit sx={{ color: "primary.main" }} />
              <Typography color="text.secondary">
                Turn your idea into an MVP
              </Typography>
            </Box>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ef4444",
              "&:hover": { backgroundColor: "#dc2626" },
              px: 6,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            FIND A FREELANCER
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Freelance;
