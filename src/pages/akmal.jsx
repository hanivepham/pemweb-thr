import React from "react";

import fotoProfil from "../assets/my foto gua.jpg";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md text-center">

                <img
                    src={fotoProfil}
                    alt="Foto Profil"
                    className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
                />

                <h2 className="text-2xl font-bold mt-4">Akmal Cahya Pamungkas</h2>
                <p className="opacity-80 text-lg">Teknologi Informasi</p>

                <p className="opacity-70 text-sm mt-1 border-b border-white/20 pb-3">
                    Kelas: TI-E
                </p>

                <p className="mt-4 text-sm leading-relaxed text-justify">
                    Halo! Saya Akmal Cahya Pamungkas, mahasiswa semester 2 Program Studi Teknologi Informasi, Fakultas Vokasi, Universitas Brawijaya angkatan 2026. Perjalanan teknologi saya dimulai sebagai lulusan Teknik Komputer dan Jaringan (TKJ) dari SMK Negeri 2 Malang, yang membekali saya dengan pemahaman kuat mengenai infrastruktur jaringan dan sistem komputer. Saat ini, saya fokus mendalami pengembangan perangkat lunak, khususnya pemrograman web menggunakan PHP dan React, serta aktif mengeksplorasi bidang keamanan siber. Selain akademik, saya juga berkontribusi dalam organisasi BEM Vokasi UB di departemen Advokesma. Dengan kombinasi latar belakang teknis dan semangat inovasi, saya berdedikasi menciptakan solusi digital yang fungsional, aman, dan berdampak positif bagi masyarakat.
                </p>

            </div>
        </div>
    );
}

export default Profile;