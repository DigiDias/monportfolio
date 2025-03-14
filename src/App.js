import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Mentions from './Pages/Mentions';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/mentions" element={<Mentions />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter>

  );
}

export default App;
