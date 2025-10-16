import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import arcImage from "../../../public/visit-arc.svg";
// import arcImage from "./47f36359-e438-41f9-a7a0-f071efb2e377.png"; // use your uploaded image

const ArcSection = () => (
  <Box sx={{ py: 10, backgroundColor: "background.default" }}>
    <Container maxWidth="xl">
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
              src={arcImage}
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

        {/* Right Side (Text) */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle2"
            textTransform="lowercase"
            color="text.secondary"
            mb={1}
          >
            arc()
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#0f172a" }} // dark navy for clarity
            mb={2}
          >
            Hiring for a bigger project?
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Arc helps you find senior developers for both permanent full-time
            roles and 40+ hour contract projects.
          </Typography>

          <Link
            href="#"
            underline="hover"
            sx={{
              color: "#2563eb",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              "&:hover": { color: "#1d4ed8" },
            }}
          >
            Visit Arc to learn more →
          </Link>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default ArcSection;
