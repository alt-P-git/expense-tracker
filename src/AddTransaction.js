import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";

function Balance() {
    const [text, setText] = useState('');
    const[amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          id="text"
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="number"
          id="amount"
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default Balance;
