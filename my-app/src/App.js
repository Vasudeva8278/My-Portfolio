import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
//import { Skills } from './components/Skills';
import { ContactUs } from './components/ContactUs';
//import Projects from './components/Projects';
//import Contact from './components/Contact';
import './App.css';
import { Container } from 'react-bootstrap';


const App = () => {
  
 

  return (
    <>
    <div style={{ backgroundColor: "#201414" }}>
  
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
     
        <Route path="/contact" element={<ContactUs />} />
      
        {/*
       
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
