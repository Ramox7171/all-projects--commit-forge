import {
  Box,
  Card,
  Container,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { PROJECTS } from "../store/data.helper";

const ProjectGallery = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    >
      {PROJECTS.map((project) => (
        <Box
          sx={{
            width: 345,
            flex: "0 0 auto",
            marginBottom: 2,
          }}
          key={project.title}
        >
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{
                height: 200,
                width: "100%",
                objectFit: "cover",
              }}
              image={project.imgSrc}
              title={project.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: 1,
                }}
              >
                {project.stack.map((skill, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      backgroundColor: "primary.light",
                      color: "primary.contrastText",
                      px: 1,
                      borderRadius: 1,
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ paddingTop: "8px" }}>
              <Button component="a" href={project.github} target="_blank">
                Github
              </Button>
              <Button
                size="medium"
                component="a"
                href={project.live}
                target="_blank"
              >
                Live
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Container>
  );
};

export default ProjectGallery;
