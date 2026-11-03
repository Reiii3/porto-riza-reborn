export const metadata = {
  title: "Kontak",
  description: "Hubungi Riza Maulana melalui form kontak, email, atau GitHub.",
};

// GANTI dengan GitHub dan email milikmu sendiri
const github = "https://github.com/Reiii3";
const email = "rizamaulanaa3@gmail.com";

const kolom =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2";

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Contoh: Budi Santoso"
                required
                className={kolom}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@gmail.com"
                required
                className={kolom}
              />
            </div>

            <div>
              <label htmlFor="hp" className="block font-semibold">
                Nomor HP
              </label>
              <input
                type="tel"
                id="hp"
                name="hp"
                placeholder="081234567890"
                required
                className={kolom}
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold">
                Keperluan
              </label>
              <select id="keperluan" name="keperluan" required className={kolom}>
                <option value="">-- Pilih keperluan --</option>
                <option value="pertanyaan">Pertanyaan</option>
                <option value="kerja-sama">Kerja sama</option>
                <option value="saran">Saran dan masukan</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tulis pesanmu di sini"
                required
                className={kolom}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-aksen px-5 py-2 font-semibold text-white"
            >
              Kirim Pesan
            </button>
            <p className="text-sm text-gray-600">
              Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di
              Minggu 15.
            </p>
          </form>
        </section>

        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-utama">Temukan Saya di</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-aksen hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="text-aksen hover:underline">
                {email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
