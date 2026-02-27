import styled from "@emotion/styled"
import Button from "@mui/material/Button"
// import { TypeAnimation } from 'react-type-animation';
// import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fade from '@mui/material/Fade';
import { lazy, Suspense, useEffect, useState } from "react"

const TriangleParticles = lazy(() => import("../../../../components/visual/TriangleParticles"))

const StyledHero = styled("section")(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",

  background: `linear-gradient(
    120deg,
    ${theme.palette.primary.main},
    ${theme.palette.secondary.main},
    ${theme.palette.background.default}
  )`,
  backgroundSize: "400% 400%",
  animation: "gradientMove 10s ease infinite",

  "@keyframes gradientMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  },
}));

const ParticlesWrapper = styled("div")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  pointerEvents: "none",
  "@media (min-width:600px)": {
    filter: "blur(4px)",
  },
});

const Hero = () => {
  const [text, setText] = useState("")
  const [showParticles, setShowParticles] = useState(false)

  const fullText = "Full Stack Developer"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 60)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true)
    }, 1150)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <StyledHero>
        {showParticles && (
          <Fade in={true} style={{ transitionDelay: "0.5s" }}>
            <ParticlesWrapper>
              <Suspense fallback={null}>
                <TriangleParticles color="#ffffff" quantity={100} />
              </Suspense>
            </ParticlesWrapper>
          </Fade>
        )}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Stack spacing={3} alignItems="center">
            <Fade in={true} timeout={1000}>
              <Typography variant="h1" textAlign="center">
                Daniel T. Araújo
              </Typography>
            </Fade>
            <Typography variant="h2" textAlign="center">
              {text}
            </Typography>
            <Fade in={true} timeout={1000} style={{ transitionDelay: "1.5s" }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <StyledButton startIcon={<LinkedInIcon />} variant="outlined">
                  <Typography>LinkedIn</Typography>
                </StyledButton>
                <StyledButton startIcon={<FileDownloadOutlinedIcon />} variant="outlined">
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Stack>
            </Fade>
          </Stack>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
