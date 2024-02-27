export function MyTip({ value, handleSelect, text }) {
  return (
    <div>
      <span>{text}</span>
      <select value={value} onChange={(e) => handleSelect(e)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was good (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
