import React from "react";

import fotoProfil from "../assets/foto-gua.jpg";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md text-center">

                <img
                    src={fotoProfil}
                    alt="Foto Profil"
                    className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
                />

                <h2 className="text-2xl font-bold mt-4">Moch Lutfi Hanif Arrozak</h2>
                <p className="opacity-80 text-lg">Teknologi Informasi</p>

                <p className="opacity-70 text-sm mt-1 border-b border-white/20 pb-3">
                    Kelas: TI-E
                </p>

                <p className="mt-4 text-sm leading-relaxed text-justify">
                    Lulusan SMK Teknik Komputer dan Jaringan (TKJ) yang kini menempuh pendidikan D3 Teknologi Informasi untuk memperdalam keahlian teknis dan manajerial di dunia digital. Memiliki fondasi kuat dalam instalasi perangkat keras, konfigurasi sistem operasi, serta pengelolaan infrastruktur jaringan dasar yang didapat selama masa sekolah menengah. Kombinasi keterampilan praktis lapangan dan pemahaman teoritis mendalam membentuk profil profesional yang adaptif, inovatif, dan siap menghadapi tantangan industri. Berkomitmen penuh untuk bertransformasi menjadi tenaga ahli kompeten yang mampu menghadirkan solusi teknologi relevan bagi kebutuhan masa depan yang dinamis.
                </p>

            </div>
        </div>
    );
}

export default Profile;