export default function LineNumbers({ count }) {
  return (
    <div className="select-none shrink-0 w-10 text-right pr-3 text-[#3a4060] text-xs leading-6 font-mono pt-1">
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}
