import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <>
      <Home/>
      <Analytics />
    </>
  )
}

export default App
