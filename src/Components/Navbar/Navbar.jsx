import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          maxWidth: "xl",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h6" color="textPrimary" fontWeight="bold">
            codementor
          </Typography>

          <Button color="inherit">Mentorship ▼</Button>
          <Button color="inherit">Expert help ▼</Button>
          <Button color="inherit">Freelancing ▼</Button>
          <Button color="inherit">More ▼</Button>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button color="inherit">Become a mentor</Button>
          <Button color="inherit">Log in</Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              "&:hover": { bgcolor: "grey.800" },
              px: 3,
              py: 1,
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Navbar;
