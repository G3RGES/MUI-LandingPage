import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => (
  <Box sx={{ bgcolor: "#000", color: "#fff", py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} md={3}>
          <Typography fontWeight="bold" mb={2} color="#fff">
            PRODUCTS
          </Typography>
          <Stack spacing={1}>
            {[
              "Codementor",
              "Codementor Events",
              "Attend and host",
              "Arc",
              "Learn",
              "Team",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography fontWeight="bold" mb={2} color="#fff">
            PAGES
          </Typography>
          <Stack spacing={1}>
            {[
              "Become a Codementor",
              "How it works",
              "Find Mentors",
              "Find Freelancers",
              "Find a Tutor",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            {[
              "Community",
              "Blog",
              "Codementor for Students",
              "Codementor for Teams",
              "Code Review",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            {[
              "Pair Programming",
              "Best Web Design Software",
              "Coding Starter Kit",
              "Best Developer Account",
              "Best Language to Learn",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "#222", mb: 4 }} />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography sx={{ color: "#aaa", fontSize: "0.875rem" }}>
          © Copyright 2024 Codementor
        </Typography>

        <Stack direction="row" spacing={3}>
          {[
            "Cookie Policy",
            "Privacy Policy",
            "Terms of Service",
            "Careers",
            "Help Center",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              underline="hover"
              sx={{
                color: "#aaa",
                "&:hover": { color: "#fff" },
                fontSize: "0.875rem",
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          <IconButton sx={{ color: "#aaa", "&:hover": { color: "#fff" } }}>
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: "#aaa", "&:hover": { color: "#fff" } }}>
            <Twitter fontSize="small" />
          </IconButton>
          <IconButton sx={{ color: "#aaa", "&:hover": { color: "#fff" } }}>
            <YouTube fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Footer;
