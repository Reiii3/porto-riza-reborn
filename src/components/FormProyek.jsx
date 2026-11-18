"use client";

import { useActionState } from "react";
import TombolKirim from "@/components/TombolKirim";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormProyek({ aksi, proyek, teksTombol }) {
  const [state, formAction] = useActionState(aksi, { proyek });
  const fitur = Array.isArray(state.proyek.fitur) ? state.proyek.fitur : [];

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="id" value={state.proyek.id ?? ""} />
      <div className="space-y-2">
        <Label htmlFor="judul">Judul</Label>
        <Input id="judul" name="judul" defaultValue={state.proyek.judul} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" defaultValue={state.proyek.slug} placeholder="contoh: buku-tamu" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="kategori">Kategori</Label>
        <Input id="kategori" name="kategori" defaultValue={state.proyek.kategori} placeholder="HTML, CSS, JavaScript, atau Next.js" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="minggu">Dibuat di</Label>
        <Input id="minggu" name="minggu" defaultValue={state.proyek.minggu} placeholder="Contoh: Minggu 15" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="deskripsi">Deskripsi singkat</Label>
        <Textarea id="deskripsi" name="deskripsi" rows={2} defaultValue={state.proyek.deskripsi} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fitur">Yang saya pelajari (satu baris satu poin)</Label>
        <Textarea id="fitur" name="fitur" rows={3} defaultValue={fitur.join("\n")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gambar_url">Alamat gambar</Label>
        <Input id="gambar_url" name="gambar_url" defaultValue={state.proyek.gambar_url} placeholder="/proyek/proyek-buku-tamu.png" />
      </div>
      <TombolKirim teks={teksTombol} />
      {state.error && <p className="text-sm text-aksen">{state.error}</p>}
    </form>
  );
}
