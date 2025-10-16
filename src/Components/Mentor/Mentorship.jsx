import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Code, School, Help } from "@mui/icons-material";

const Mentorship = () => (
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Grid container spacing={6} alignItems="center">
      {/* Text Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4" fontWeight="bold" color="text.primary" mb={3}>
          One-on-one live mentorship
        </Typography>

        <Stack spacing={2} mb={4}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Code sx={{ color: "#007b83" }} />
            <Typography color="text.secondary">
              Debug with the help of an expert
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <School sx={{ color: "#007b83" }} />
            <Typography color="text.secondary">
              Personalize your learning experience
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Help sx={{ color: "#007b83" }} />
            <Typography color="text.secondary">
              Get answers to complex problems
            </Typography>
          </Stack>
        </Stack>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f15b43",
            "&:hover": { backgroundColor: "#d84d37" },
            px: 4,
            py: 1.5,
            fontWeight: "bold",
          }}
        >
          FIND A MENTOR
        </Button>
      </Grid>

      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Main Image */}
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

          {/* Optional Floating Image Example */}
          {/* <Box
            component="img"
            src="/path-to-small-avatar.png"
            alt="Mentor"
            sx={{
              position: "absolute",
              top: 20,
              left: 40,
              width: 60,
              height: 60,
              borderRadius: "50%",
              boxShadow: 3,
            }}
          /> */}
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default Mentorship;
