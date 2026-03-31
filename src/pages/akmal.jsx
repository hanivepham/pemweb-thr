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

                <h2 className="text-2xl font-bold mt-4">Moch Lutfi Hanif Arrozak</h2>
                <p className="opacity-80 text-lg">Teknologi Informasi</p>

                <p className="opacity-70 text-sm mt-1 border-b border-white/20 pb-3">
                    Kelas: TI-E
                </p>

                <p className="mt-4 text-sm leading-relaxed text-justify">
                    Saya merupakan mahasiswa Teknologi Informasi di Universitas Brawijaya dengan latar belakang Rekayasa Perangkat Lunak. Saya memiliki minat besar dalam bidang pemrograman, pengembangan aplikasi, serta sistem informasi. Saya telah mengerjakan berbagai proyek seperti aplikasi mobile berbasis API, aplikasi web menggunakan Laravel, dan aplikasi kalkulator dengan Python Kivy. Selain itu, saya juga memiliki pengalaman magang sebagai desain dan web developer. Dikenal sebagai pribadi yang teliti, bertanggung jawab, dan cepat belajar, saya mampu bekerja secara individu maupun dalam tim untuk menyelesaikan berbagai permasalahan teknis secara efektif dan efisien. Di luar waktu kuliah, saya sering menghabiskan waktu luang dengan bermain eFootball untuk mengasah strategi, serta memainkan Grand Theft Auto: San Andreas untuk sekadar bernostalgia dengan game klasik.
                </p>

            </div>
        </div>
    );
}

export default Profile;