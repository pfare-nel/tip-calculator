export function Result({ bill, tip }) {
  let total = bill + tip;
  return (
    <div>
      <h1>
        You pay {total} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}
