import { createTheme } from "@mui/material";

const theme = createTheme({
   typography: {
      fontFamily: [
         "Barlow Condensed",
         "Roboto",
         "Helvetica",
         "Arial",
         "sans-serif",
      ].join(","),
      h1: {
         fontFamily: ["Helvetica", "sans-serif"].join(","),
         fontSize: "150px",
      },
      h2: {
         fontFamily: ["Helvetica", "sans-serif"].join(","),
         fontSize: "100px",
      },
      h3: {
         fontFamily: ["Helvetica", "sans-serif"].join(","),
         fontSize: "56px",
      },
      h4: {
         fontFamily: ["Helvetica", "sans-serif"].join(","),
         fontSize: "32px",
      },
      h5: {
         fontSize: "28px",
         letterSpacing: 4.75,
      },
      h6: {
         fontSize: "28px",
         fontFamily: ["Helvetica", "sans-serif"].join(","),
      },
      body1: {
         letterSpacing: 2.5,
         lineHeight: 1.65,
      },
      body2: {
         letterSpacing: 1.5,
         fontSize: "16px",
      },
      subtitle1: {
         fontSize: "14px",
         letterSpacing: 2.35,
      },
      subtitle2: {
         fontSize: "16px",
         letterSpacing: 2.7,
      },
   },
   palette: {
      primary: {
         main: "#3a4eb5",
      },
      secondary: {
         main: "#ffffff",
      },
   },
   breakpoints: {
      values: {
         xs: 0,    
         sm: 768, 
         md: 992,   
         lg: 1200,   
         xl: 1920,
      },
   },
});

export default theme;
