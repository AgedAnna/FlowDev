import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  useTheme,
} from "@mui/material";
import { projects } from "./utils";

const Portfolio = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: theme.spacing(4), textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", marginBottom: theme.spacing(4) }}
      >
        Portfolio
      </Typography>

      <Typography
        variant="subtitle1"
        component="h3"
        sx={{ marginBottom: theme.spacing(6) }}
      >
        Contact us for more information about our working conditions
      </Typography>

      <Grid container spacing={6}>
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginBottom: theme.spacing(2),
                fontWeight: "medium",
              }}
            >
              {project.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: theme.spacing(2),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: { xs: "90%", sm: "250px", md: "300px" },
                  height: { xs: "200px", sm: "180px", md: "200px" },
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt={`${project.title} Desktop`}
                  image={project.desktopImage}
                  sx={{ height: "100%", objectFit: "cover" }}
                />
              </Card>

              <Card
                sx={{
                  width: { xs: "120px", sm: "100px", md: "80px" },
                  height: { xs: "240px", sm: "200px", md: "160px" },
                  boxShadow: 3,
                  borderRadius: 2,
                  marginLeft: "-6vh",
                }}
              >
                <CardMedia
                  component="img"
                  alt={`${project.title} Mobile`}
                  image={project.mobileImage}
                  sx={{ height: "100%", objectFit: "cover" }}
                />
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
