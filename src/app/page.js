import Advantages from "./components/Advantages"
import Contact from "./components/Contact"
import FaqSection from "./components/FaqSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ListComponent from "./components/ListComponent"
import MoreCars from "./components/MoreCars"
import PopularCarsSection from "./components/PopularCarsSection"
import { Suspense } from "react"


function Home() {
  
  

  return <>
    <Header />
    <Hero />
    <Suspense fallback={<p>Loading the photos</p>}>
    <PopularCarsSection />
    </Suspense>
    <MoreCars />
    <Advantages />
    <ListComponent />
    <Contact />
    <FaqSection />
    <Footer />
    
    </>

}





export default Home;