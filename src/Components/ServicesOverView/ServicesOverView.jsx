import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ServicesOverview = () => (
  <Box py={8} sx={{ mb: { xs: 10, md: 8 } }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="text.primary"
        mt={8}
        mb={-20}
      >
        Get help from vetted software developers
      </Typography>
    </Container>
  </Box>
);

export default ServicesOverview;
