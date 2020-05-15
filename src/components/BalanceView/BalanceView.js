import React from "react";
import "./BalanceView.css";
import {getCurrency} from "../../common/Localization";

const BalanceView = ({ balance, children }) => {
  return (
    <div className="BalanceView-container">
      {/* <div className="BalanceView-header">

      </div> */}

      <div className="BalanceView-box">
        <span>Account Balance :</span>
        <span className="BalanceView-amount">{getCurrency()} {balance}</span>
      </div>

      <div className="BalanceView-footer">{children}</div>
    </div>
  );
};

export default BalanceView;
