export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl bg-surface-container p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-on-surface">{judul}</h2>
      {children}
    </section>
  );
}
