import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Ini cara manggil file profil lu yang tadi dibikin
import AhmadProfile from "./pages/ahmad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ahmad" element={<AhmadProfile />} />

        {/* Nanti kalau temen lu udah ngerjain, tambahin rutenya di bawah sini */}
        {/* <Route path="/nama-temen" element={<ProfileTemen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;