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
                    Saya adalah mahasiswa Teknologi Informasi di Universitas Brawijaya yang memiliki minat pada pemrograman, pengembangan web, dan sistem informasi. Dengan latar belakang Rekayasa Perangkat Lunak, saya terbiasa mempelajari teknologi baru dan menyelesaikan masalah secara terstruktur. Saya pernah mengerjakan proyek aplikasi mobile berbasis API, website dengan Laravel, serta aplikasi sederhana menggunakan Python Kivy. Selain itu, saya memiliki pengalaman magang sebagai desainer dan web developer. Saya dikenal teliti, bertanggung jawab, dan mudah beradaptasi, baik saat bekerja mandiri maupun dalam tim. Di waktu luang, saya senang bermain eFootball dan menikmati game klasik untuk hiburan sekaligus melepas penat setelah rutinitas perkuliahan yang padat hampir setiap harinya.
                </p>

            </div>
        </div>
    );
}

export default Profile;