import React, { useState } from "react";
import "./BasePack.css";
import "../../common/Common.css";
import Section from "../Section/Section";
import { getChannels } from "../../data/helper";

const BasePack = ({
  pack,
  accountBalance,
  subscribe,
  showSubscribeDetails = true,
  alreadySubscribed
}) => {
  const [subscriptionMonth, setSubscriptionMonth] = useState(0);
  const btnLabel = "Subscribe";
  const { channels=[], name, price, id } = pack;
  const canBeSubscribed = subscriptionMonth * price <= accountBalance;
  const alreadySubscribedClass = alreadySubscribed ? "already-subscribed" : "";
  const DISCOUNT = 10;

  const onSubscribePack = () => {
    if (canBeSubscribed) {
      let totalAmount = subscriptionMonth * price;

      //discount if applicable
      let discountedAmount = subscriptionMonth >= 3 ? Math.floor(totalAmount * DISCOUNT / 100) : 0;

      // sufficient balance to subscribe pack
      subscribe({
        type: "packs",
        amount: totalAmount - discountedAmount,
        values: [id],
      });

      setSubscriptionMonth(0);
      console.log("Pack subscribed successfully", discountedAmount > 0 && " with 10% Discount");
    } else {
      // Not enough balance
      console.log(
        "Not enough balance, Please recharge your account with appopriate balance"
      );
    }
  };

  return (
    <Section title={`${name} - ₹ ${price}`} subtitle="Subscription pack">
      <div className="BasePack">
        <ul className="BasePack-ChannelList">
          {channels.map((channelId) => {
            let channelName = getChannels[channelId]["name"];
            return (
              <li className="BasePack-ChannelList-item" key={channelName}>
                {channelName}
              </li>
            );
          })}
        </ul>

        <div
          className="BasePack-subscribe"
          style={{ display: showSubscribeDetails ? "flex" : "none" }}
        >
          <label>Number of Months</label>
          <input
            type="number"
            className="BasePack-Months subscribe-input"
            value={subscriptionMonth}
            onChange={(event) => {
              let newMonths = parseInt(event.target.value);
              setSubscriptionMonth(newMonths);
            }}
          />
          <button
            className={"BasePack-Subscribe-button subscribe-btn " + alreadySubscribedClass}
            onClick={onSubscribePack}
            disabled={subscriptionMonth <= 0 || isNaN(subscriptionMonth) || alreadySubscribed}
          >
            {alreadySubscribed ? "Subscribed" : btnLabel}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default BasePack;
