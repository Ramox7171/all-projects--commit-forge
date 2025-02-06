import { Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        justifyContent: "flex-end",
        maxWidth: "100%",
      }}
    >
      <Button
        component="a"
        variant="contained"
        href="https://example.com"
        target="_blank"
      >
        {" "}
        Return to github profile
      </Button>
    </Box>
  );
};

export default Navbar;
