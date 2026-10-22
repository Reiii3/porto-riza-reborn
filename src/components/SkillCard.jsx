export default function SkillCard({ nama, level }) {
  return (
    <div className="rounded-xl bg-surface-container-high p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-on-surface">{nama}</h3>
      <p className="mt-1 text-sm text-on-surface-variant">Level: {level}</p>
    </div>
  );
}
