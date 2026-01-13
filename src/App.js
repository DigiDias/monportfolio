import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Mentions from "./Pages/Mentions";
import SAV from "./Pages/SAV";  
import PowerBi from "./Pages/PowerBI";  
import Holding from "./Pages/Holding";

function App() {

    const userData = {
      nom: "Gouljiar",
      prenom: "Sammy",
      adresse: "200 rue Emmanuel Burel Trois Mares",
      codePostal : "97430",
      ville : "le Tampon",
      Pays : "Réunion"
    };


  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home {...userData}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact {...userData} />} />
        <Route path="/mentions" element={<Mentions {...userData}/>} />
        <Route path="/sav" element={<SAV />} />
        <Route path="/powerbi" element={<PowerBi />} />
        <Route path="/holding" element={<Holding />} />
      </Routes>
      <Footer {...userData}/>
    </BrowserRouter>
  );
}

export default App;
