import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const hobi = ["Ngoding", "Bermain Game"];

const rencana = [
  "Terus Mempelajari konsep di dunia Operasi System",
  "Mengasah Skill Serta Pemahaman Bahasa Program",
  "Bekerja sebagai pengembang di Bidang AOSP",
  "Terus Mempelajari bahasa dengan mengikuti kemajuan zaman",
];

const skills = [
  { nama: "HTML", level: "Mahir" },
  { nama: "CSS", level: "Mahir" },
  { nama: "Git dan GitHub", level: "Senior" },
  { nama: "Vite", level: "Senior" },
  { nama: "Next.js", level: "Mahir" },
  { nama: "Desain poster dengan Canva", level: "Menengah" },
  { nama: "JavaScript", level: "Mahir" },
  { nama: "TypeScript", level: "Menengah" },
  { nama: "Shell/Bash", level: "Mahir" },
  { nama: "Kotlin", level: "Menengah" },
  { nama: "Java", level: "Menengah" },
  { nama: "Go", level: "Menengah" },
  { nama: "React", level: "Mahir" },
  { nama: "Jetpack Compose", level: "Menengah" },
  { nama: "TailwindCSS", level: "Mahir" },
  { nama: "C", level: "Junior" },
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 00.00", kegiatan: "Mengerjakan Project Sekolah (Tugas)" },
  { hari: "Selasa", waktu: "19.00 - 00.00", kegiatan: "Mengerjakan Project Pribadi" },
  { hari: "Rabu", waktu: "20.00 - 00.00", kegiatan: "Mengerjakan Project Pribadi" },
  { hari: "Kamis", waktu: "20.00 - 01.00", kegiatan: "Mengerjakan Project Pribadi" },
  { hari: "Jumat", waktu: "19.30 - 01.30", kegiatan: "Belajar Bahasa Program dan Melanjutkan Project Pribadi" },
  { hari: "Sabtu", waktu: "19.30 - 02.30", kegiatan: "Belajar Bahasa Program Serta Penguasaan dengan problem solfing Dan Melanjutkan Project Pribadi" },
  { hari: "Minggu", waktu: "19.30 - 02.30", kegiatan: "Melakukan Analisis terhadap project pribadi untuk perbaikan di keesokan hari" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        nama="Riza Maulana"
        tagline="Portofolio Riza Maulana Siswa SMKN Pasuruan Yang Merupakan seorang Software Development serta developer di bidang AOSP (Android Open Source Project)"
      />

      <div className="mt-10 flex flex-col gap-6">
        <Kartu judul="Tentang Saya">
          <p className="text-on-surface-variant" >
            Saya adalah seorang siswa Jurusan Rekayasa Perangkat Lunak Di SMKN 1 Pasuruan, Saya adalah seorang AOSP Anthusiast yang dimana
            saya adalah seorang pengembang tools tweak system Android, saya mengenal dunia program sejak duduk di bangku SMP tepat nya saat
            masih menjadi siswa di MTSN 1 Kota Pasuruan dan Tepat di Tahun Ini Saya sudah 5 Tahun menjadi seorang programer, dulu awal saya
            belajar dasar bahasa program yakni bahasa Bash/Shell yang jalan di terminal Berbasis Linux dari salah satu member AOSP Anthusiast
            juga yang mempunyai Username Anonim Lykafkaa Atau nama aslinya Bang Saputra Prima yang biasa saya panggil bang Prima setelah hampir 4 bulan
            belajar dengan beliau dan pada akhirnya beliau hiatus atau berhenti untuk menjadi seorang pengembang lagi, kemudian saya bertemu dengan
            salah seorang developer Aplikasi Native Android yang ranah nya masih satu jallur dengan AOSP yakni bang FahrezONE atau yang memiliki nama asli
            Fahreza Raditya Busan, dia adalah seorang developer Aplikasi Native menggunakan Bahasa Java saat awal saya bertemu dan sekarang pindah ke Kotlin
            Dari sini lah saya mulai jauh lebih dalam mempelajari bahasa pemrograman yang dimana catatan Stack saya selama bang Pahrez Menjadi Mentor,
            saya sudah mempelajaari sekitar 3 bahasa program yakni Java, Kotlin, Dan JavaScript dan kemudian beliau menyarankan saya untuk menggali lebih dalam
            sendiri, dan pada akhir nya setelah 5 tahun mengenal dunia program saya sudah mempelajari sekitar 7 bahasa program yakni Java, Kotlin, JavaScript, Go, Python, Bash, dan TypeScript
            dan sampai sekarang saya masih berhubungan dengan dengan beliau bahkan saya sendiri sering meminta saran untuk bagaimana perkembangan saya
            dimasa yang akan datang nanti, beliau sendiri sekarang sudah berhasil menembus pasar Global yakni dengan Rilis nya aplikasi Buatan Beliau di Play Store
            dan sebelum nya baliau sudah pernah rilis sebuah aplikasi ke play store namun pada saat itu Aplikasi yang Beliau Rilis Terkena Suspend Berat yang membuat dia kecewa dengan kebijakan Play store
          </p>
        </Kartu>

        <div className="grid gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc pl-5">
              {hobi.map((item) => (
                <li key={item} className="text-on-surface-variant">{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="text-on-surface-variant">
              Menjadi Pengembang sebuah Aplikasi Native serta dapat mengembangkan sebuah Operasi System Yang Berjalan di Smartphone
            </p>
            <ol className="mt-2 list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item} className="text-on-surface-variant">{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

        <Kartu judul="Keahlian">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>

        <Kartu judul="Jadwal Mingguan">
          <table className="w-full text-left">
            <thead className="bg-secondary-container text-white">
              <tr>
                <th className="px-3 py-2">Hari</th>
                <th className="px-3 py-2">Waktu</th>
                <th className="px-3 py-2">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((j) => (
                <tr key={j.hari} className="border-b border-b-on-surface-variant text-on-surface-variant">
                  <td className="px-3 py-2">{j.hari}</td>
                  <td className="px-3 py-2">{j.waktu}</td>
                  <td className="px-3 py-2">{j.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Kartu>
      </div>
    </main>
  );
}
