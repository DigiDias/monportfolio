import "./styles/navbar-footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import ScrollToTop  from "./components/ScollTopTop.jsx";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Contact from "./Pages/Contact.jsx";
import Mentions from "./Pages/Mentions.jsx";
import SAV from "./Pages/SAV.jsx";  
import PowerBi from "./Pages/PowerBI.jsx";  
import Holding from "./Pages/Holding.jsx";
import Foot from "./Pages/Foot.jsx";
import Tva from "./Pages/Tva.jsx";


function App() {

    const userData = {
      nom: "Gouljiar",
      prenom: "Sammy",
      adresse: "200 rue Emmanuel Burel Trois Mares",
      codePostal : "97430",
      ville : "le Tampon",
      Pays : "Réunion", 
      Tel :  "0692 82 39 99",
      Email : "sammy.gouljiar@digidias.re",
    };


  
  return (
    <BrowserRouter>
      <Navbar {...userData } />
            <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home {...userData}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact {...userData} />} />
        <Route path="/mentions" element={<Mentions {...userData}/>} />
        <Route path="/sav" element={<SAV />} />
        <Route path="/powerbi" element={<PowerBi />} />
        <Route path="/holding" element={<Holding />} />
        <Route path="/foot" element={<Foot />} />
        <Route path="/tva" element={<Tva />} />
      </Routes>
      <Footer {...userData}/>
    </BrowserRouter>
  );
}

export default App;
