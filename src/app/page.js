import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { proyek } from "@/data/proyek";

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

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        nama="Riza Maulana"
        tagline="Portofolio Riza Maulana Siswa SMKN Pasuruan Yang Merupakan seorang Software Development serta developer di bidang AOSP (Android Open Source Project)"
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
