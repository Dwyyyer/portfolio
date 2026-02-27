import { lazy } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"

const About = lazy(() => import("./sections/About/About"))

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About /> 
    </>
  )
}

export default Home
