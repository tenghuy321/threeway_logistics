import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Logistics from "./components/Logistics"
import Services from "./components/Services"
import Career from "./components/Career"
import Contact from "./components/Contact"

import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);

      return () => clearTimeout(timer);
    }, 2000)
  }, [location.pathname]);

  if(isLoading){
    return <Loading />
  }

  return (
    <>
      <div>
        <Header />
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/logistics" element={<Logistics />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
