import React, { useState } from "react";
import Section from "../Section/Section";
import "../../common/Common.css";
import "./Recharge.css";

const Recharge = ({addBalance}) => {
  const btnLabel = "Recharge";
  const initialAmount = 0;
  let [amount, setAmount] = useState(0);

  const onAddBalance = () => {
    if (amount > 0) {
      console.log(`Recharge of ${amount} successful`);

      // callback from App
      addBalance(amount);

      // Reset after recharge is successful
      setAmount(initialAmount);
    }
  };

  return (
    <Section title="Recharge" subtitle="Add money to account">
      <div className="Recharge">
        <label>Enter recharge amount</label>
        <input
          className="Recharge-input subscribe-input"
          placeholder="Enter recharge amount"
          type="number"
          value={amount}
          onChange={event => {
            let newAmount = parseInt(event.target.value);
            setAmount(newAmount);
          }}
        />
        <button
          className="Recharge-button subscribe-btn"
          onClick={onAddBalance}
          disabled={amount <= 0 || isNaN(amount)}
        >
          {btnLabel}
        </button>
      </div>
    </Section>
  );
};

export default Recharge;
