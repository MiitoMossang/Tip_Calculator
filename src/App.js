import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myWaiterService, setMyWaiterService] = useState(0);
  const [friendWaiterService, setFriendWaiterService] = useState(0);
  function handleReset() {
    setBill("");
    setFriendWaiterService(0);
    setFriendWaiterService(0);
  }

  const Average = Math.floor((myWaiterService + friendWaiterService) / 2);

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <MyService
        bill={bill}
        myWaiterService={myWaiterService}
        setMyWaiterService={setMyWaiterService}
      />
      <FriendService
        bill={bill}
        friendWaiterService={friendWaiterService}
        setFriendWaiterService={setFriendWaiterService}
      />
      {bill > 0 && (
        <>
          <Tip bill={bill} Average={Average} />
          <Button handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        name="name"
        value={bill}
        id=""
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
function MyService({ myWaiterService, setMyWaiterService, bill }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        name="name"
        value={myWaiterService}
        onChange={(e) => setMyWaiterService(Number(e.target.value))}>
        <option value={0}> Dissatisfied (0%) </option>
        <option value={(bill * 5) / 100}> It was okay (5%) </option>
        <option value={(bill * 10) / 100}> It was good (10%) </option>
        <option value={(bill * 20) / 100}> Absolutely amazing! (20%) </option>
      </select>
    </div>
  );
}
function FriendService({ friendWaiterService, setFriendWaiterService, bill }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        value={friendWaiterService}
        onChange={(e) => setFriendWaiterService(Number(e.target.value))}>
        <option value={0}> Dissatisfied (0%) </option>
        <option value={(bill * 5) / 100}> It was okay (5%) </option>
        <option value={(bill * 10) / 100}> It was good (10%) </option>
        <option value={(bill * 20) / 100}> Absolutely amazing! (20%) </option>
      </select>
    </div>
  );
}

function Tip({ bill, Average }) {
  return (
    <div>
      <h1>
        You pay {`$${bill + Average}`} {`($${bill} + $${Average} tip)`}
      </h1>
    </div>
  );
}
function Button({ handleReset }) {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
