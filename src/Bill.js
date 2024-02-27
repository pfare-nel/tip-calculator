export function Bill({ handleInput, bill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input type="text" value={bill} onChange={handleInput} />
    </div>
  );
}
