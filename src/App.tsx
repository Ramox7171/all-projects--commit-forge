import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";

function App() {
  return (
    <Container sx={{ maxWidth: "100%" }}>
      <Navbar />
      <Hero />
      <ProjectGallery />
    </Container>
  );
}

export default App;
