import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UseCase from './components/UseCase/UseCase';
import "bootstrap-icons/font/bootstrap-icons.css";
import Tutorial from './components/Tutorial/Tutorial';
import Content from './components/Content/Content';
import Questions from './components/Questions/Questions';
import Instructors from './components/Instructors/Instructors';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Newsletter/>
      <UseCase/>
      <Tutorial/>
      <Content/>
      <Questions/>
      <Instructors/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
