import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import komponen profil dari folder pages
import HanifProfile from "./pages/hanif";
import AhmadProfile from "./pages/ahmad";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama (Opsional, biar gak kosong saat buka localhost:3000) */}
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Project Pemweb THR</h1>
            <p>Pilih profil mahasiswa:</p>
            <nav>
              <Link to="/hanif">Profil Hanif</Link> | <Link to="/ahmad">Profil Ahmad</Link>
            </nav>
          </div>
        } />

        {/* Rute untuk profil Hanif */}
        <Route path="/hanif" element={<HanifProfile />} />

        {/* Rute untuk profil Ahmad */}
        <Route path="/ahmad" element={<AhmadProfile />} />

        {/* Tambahkan rute teman lain di bawah ini jika sudah ada filenya */}
        {/* <Route path="/nama-teman" element={<NamaKomponen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;