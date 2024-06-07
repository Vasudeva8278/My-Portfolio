import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactUs } from './components/ContactUs';

import './App.css';

const App = () => {
  
 

  return (
    <>
    <div style={{ backgroundColor: "#201414",height:"auto" }}>
  
    <Router>
      <Navbar />
      <br></br>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Skills' element={<Skills />} />
      
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/projects" element={<Projects />} />
       
        
      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
