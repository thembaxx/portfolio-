export function SectionLabel({ title, note }: { title: string; note: string }) {
  return (
    <div className="section-label mono">
      <span>{title}</span>
      <span>{note}</span>
    </div>
  );
}
