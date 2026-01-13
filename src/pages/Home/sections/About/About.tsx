import { Box, Card, CardContent, CardMedia, Chip, Container, CssBaseline, Divider, Grid, Paper, Stack, styled, Typography } from "@mui/material";
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
    paddingTop: theme.spacing(2),
  }));

  const StyledCard = styled(Card)(() => ({
    position: "relative",
    zIndex: 0,

    maxWidth: 345,
    borderRadius: 24,

    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",

    textAlign: "center",
    transition: "transform 0.3s ease",

    "&:hover": {
      transform: "scale(1.04)",
    },
  })); 

  const GlowWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    display: "inline-block",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: -10,
      borderRadius: "3rem",
      background: `
        linear-gradient(
          135deg,
          ${theme.palette.primary.main},
          ${theme.palette.secondary.main},
          ${theme.palette.background.default}
        )
      `,
      filter: "blur(35px)",
      opacity: 0.4,
      zIndex: 0,
      transition: "opacity 0.3s ease",
    },

    "&:hover::before": {
      opacity: 1,
    },
  }));

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    overflow: "hidden",
    width: "100%",
  }));

  return (
    <>
    <StyledAbout>
      <CssBaseline/>
      <Container maxWidth="lg" sx={{ position: "relative"}}>
        <Stack spacing={2} alignItems="center">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 9 }}>
              <Stack spacing={2} alignItems="center">
                <Typography variant="h4">About Me</Typography>
                <Divider sx={{
                  width: "300px",
                  height: "2px",
                  backgroundColor: "#fff",
                }}></Divider>
                <StyledPaper elevation={3}>
                  <Typography variant="body1" textAlign="justify">
                    Hello! I'm Daniel T. Araújo, a passionate Full Stack Developer with a strong foundation in computer science and a keen interest in building innovative web applications. I hold a degree in Computer Science from XYZ University, where I honed my skills in programming, algorithms, and software development.
                  </Typography>
                </StyledPaper>
                <Typography variant="h4">Skills</Typography>
                <Divider sx={{
                  width: "300px",
                  height: "2px",
                  backgroundColor: "#fff",
                }}></Divider>
                <StyledPaper elevation={3} key={3}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    justifyContent="center"
                  >
                    <Chip label="Clickable"></Chip>
                    <Chip label="Clickable"></Chip>
                    <Chip label="Clickable"></Chip>
                    <Chip label="Clickable"></Chip> 
                    <Chip label="Clickable"></Chip>
                  </Stack>
                </StyledPaper>
              </Stack>
            </Grid>
             <Grid size={{ xs: 12, md: 3 }}>
              <Stack direction="column" spacing={2} alignItems="center">
                <GlowWrapper>
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
                </GlowWrapper>
                <GlowWrapper>
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
                </GlowWrapper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </StyledAbout>
    </>
  )
}

export default About
