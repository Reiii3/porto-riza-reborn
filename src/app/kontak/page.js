import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Riza Maulana melalui form kontak, email, atau GitHub.",
};

const github = "https://github.com/Reiii3";
const email = "rizamaulanaa3@gmail.com";

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Temukan Saya di</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
