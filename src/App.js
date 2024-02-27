import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [value, setValue] = useState(0);
  const [friendValue, setFriendValue] = useState(0);

  let tip;

  function handleInput(b) {
    setBill(Number(b.target.value));
  }

  function handleSelect(event) {
    setValue(Number(event.target.value));
  }

  function handleFriendSelect(event) {
    setFriendValue(Number(event.target.value));
  }

  function handleReset() {
    setBill(0);
    setValue(0);
    setFriendValue(0);
  }

  tip = (value + friendValue) / 2;

  return (
    <div>
      <Bill bill={bill} handleInput={handleInput} />
      <MyTip
        value={value}
        handleSelect={handleSelect}
        text="How did you like the service? "
      />
      <MyTip
        value={friendValue}
        handleSelect={handleFriendSelect}
        text="How did your friend like the service? "
      />

      <Result bill={bill} tip={tip} />
      <Button onReset={handleReset} />
    </div>
  );
}

function Bill({ handleInput, bill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input type="text" value={bill} onChange={handleInput} />
    </div>
  );
}

function MyTip({ value, handleSelect, text }) {
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

function Result({ bill, tip }) {
  let total = bill + tip;
  return (
    <div>
      <h1>
        You pay {total} (${bill} + ${tip} tip)
      </h1>
    </div>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
