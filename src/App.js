import { useState } from "react";
import { Bill } from "./Bill";
import { MyTip } from "./MyTip";
import { Result } from "./Result";
import { Button } from "./Button";

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
