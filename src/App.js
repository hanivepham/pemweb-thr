

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Ini cara manggil file profil lu yang tadi dibikin
import HanifProfile from "./pages/hanif";

function App() {
  return (
    <Router>
      <Routes>
        {/* URL /hanif bakal nampilin desain dari hanif.jsx */}
        <Route path="/hanif" element={<HanifProfile />} />

        {/* Nanti kalau temen lu udah ngerjain, tambahin rutenya di bawah sini */}
        {/* <Route path="/nama-temen" element={<ProfileTemen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;