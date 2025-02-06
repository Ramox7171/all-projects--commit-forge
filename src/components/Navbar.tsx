import { Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        justifyContent: "flex-start",
        maxWidth: "100%",
        gap: 2
      }}
    >
      <Button
        component="a"
        variant="contained"
        href="https://github.com/Ramox7171"
        target="_blank"
      >
        {" "}
        Return to github profile
      </Button>
      <Button
        component="a"
        variant="contained"
        href="https://www.linkedin.com/in/mikolaj-lora/"
        target="_blank"
      >
        {" "}
        Return to github profile
      </Button>
      
    </Box>
  );
};

export default Navbar;
