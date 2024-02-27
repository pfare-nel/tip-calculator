export function Result({ bill, tip }) {
  let total;
  let percentage = bill * (tip / 100);
  total = bill + percentage;
  return (
    <div>
      <h1>
        You pay ${total} (${bill} + ${percentage} tip)
      </h1>
    </div>
  );
}
