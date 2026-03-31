import React from "react";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md text-center">

                <img
                    src="My face.png" 
                    alt="Foto Profil Muhammad Nur Ramadhani"
                    className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
                />

                <h2 className="text-2xl font-bold mt-4">Muhammad Nur Ramadhani</h2>
                <p className="opacity-80 text-lg">D3 Teknologi Informasi</p>

                <p className="opacity-70 text-sm mt-1 border-b border-white/20 pb-3">
                    NIM: 253140707111052 | Domisili: Malang
                </p>

                <p className="mt-4 text-sm leading-relaxed text-justify">
                    Saya merupakan mahasiswa D3 Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya yang berasal dari Lawang dan kini berdomisili di Malang. Sebelumnya, saya menempuh pendidikan di Pondok Pesantren Madrasah Aliyah Al-Umm selama enam tahun. Saat ini, saya aktif menjalani karir sebagai freelance video dan graphic design editor. Saya memiliki minat besar di dunia videografi serta desain, dan sangat terbiasa mengoperasikan perangkat lunak seperti CapCut hingga Adobe Premiere Pro. Untuk menunjang kompetensi digital, saya juga telah mengantongi sertifikasi Google Ads. Selain fokus pada akademik dan pekerjaan freelance, saya masih menyempatkan diri aktif sebagai ketua tim sound system 'Soundman Al-Umm' serta membimbing adik kelas. Untuk menyeimbangkan padatnya aktivitas sehari-hari, saya rutin bermain badminton, atau sekadar bersantai dengan bermain game kompetitif seperti Valorant dan Mobile Legends.
                </p>

            </div>
        </div>
    );
}

export default Profile;