import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Tournament from "./pages/Tournament";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-nfccYellow-light text-yellow-900">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tournament/:year" element={<Tournament />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
