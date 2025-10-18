import { createTheme } from "@mui/material";

const theme = (mode) =>
  createTheme({
    // components: {
    //   MuiButton: {
    //     defaultProps: {
    //       disableElevation: true,
    //       disableRipple: true,
    //       variant: "contained",
    //     },
    //     styleOverrides: {
    //       root: {
    //         color: "#fff",
    //         backgroundColor: "#f50057",
    //         "&:hover": {
    //           backgroundColor: "#f50057",
    //         },
    //         fontFamily: "Poppins, sans-serif",
    //         fontWeight: 600,
    //         variants: [
    //           {
    //             props: { variant: "dashed" },
    //             style: {
    //               boxShadow: "none",
    //               borderRadius: "8px",
    //               border: "2px dashed #f50057",
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
    // },
    palette: {
      mode,
      secondary: {
        main: "#f50057",
      },
    },
  });

export default theme;
