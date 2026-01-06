import { Card, CardContent, CardMedia, Container, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

const About = () => {
  const StyledAbout = styled("section")(({ theme }) => ({
    width: "100%",
    minHeight: "100dvh",
    zIndex: 100,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
  }));

  const StyledCard = styled(Card)(({ theme }) => ({

    alignItems: "center",
    textAlign: "center",
    maxWidth: 345,
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
            background: `linear-gradient(
    90deg,
    ${theme.palette.primary.main},
    ${theme.palette.secondary.main}
  )`,
    },
  }));

  return (
    <>
    <StyledAbout>
      <Container maxWidth="lg" sx={{ position: "relative"}}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4">About Me</Typography>
            <Divider sx={{
              width: "300px",
              height: "2px",
              backgroundColor: "#fff",
            }}></Divider>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack direction="column" spacing={2} alignItems="center">
                <StyledCard>
                  <CardContent>
                   <Typography variant="h5"><b>Education</b></Typography>
                  </CardContent>
                  <CardMedia>
                    <SchoolOutlinedIcon sx={{ fontSize: 80, color: "#fff" }}/>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="body1">Bachelor’s Degree in Information Systems </Typography>
                    <Divider variant="middle"></Divider>             
                    <Typography variant="body2">Universidade de Uberaba (UNIUBE), 2024 - 2027</Typography>
                  </CardContent>
                </StyledCard>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h5"><b>Experience</b></Typography>
                  </CardContent>         
                  <CardMedia>
                    <WorkHistoryOutlinedIcon sx={{ fontSize: 80, color: "#fff" }}/>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="body1">Systems Development Intern</Typography>
                    <Divider variant="middle"></Divider>             
                    <Typography variant="body2">CES Consultoria e Sistemas, oct 2024 - sep 2025</Typography>
                  </CardContent>
                </StyledCard>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Typography variant="body1" textAlign="justify">
                Hello! I'm Daniel T. Araújo, a passionate Full Stack Developer with a strong foundation in computer science and a keen interest in building innovative web applications. I hold a degree in Computer Science from XYZ University, where I honed my skills in programming, algorithms, and software development.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </StyledAbout>
    </>
  )
}

export default About
