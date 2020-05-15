import React from "react";
import "./DetailView.css";
import { getPacks, getChannels, getServices } from "../../data/helper";
import { ROUTE_PATHS } from "../../common/appConstants";
import BasePack from "../BasePack/BasePack";
import _ from "lodash";
import Section from "../Section/Section";
import Checklist from "../Checklist/Checklist";
import Recharge from "../Recharge/Recharge";
import BalanceView from "../BalanceView/BalanceView";

const DetailView = ({ location, subscribe, accountBalance, addBalance, packs, channels, services }) => {
  const hideLeftPanel = location.pathname === ROUTE_PATHS.BALANCE;

  const subscribeChannelOrService = (items, type) => {
    const collection = type === "channels" ? getChannels : getServices;
    const amount = items
    .map((item) => collection[item]["price"])
    .reduce((acc, value) => acc + value, 0);

    if(amount <= accountBalance) {
      subscribe({
        type: type,
        amount: amount,
        values: items
      });

      console.log("Channels subscribed successfully");
    }
    else {
      // Not enough balance
      console.log(
        "Not enough balance, Please recharge your account with appopriate balance"
      );
    }
  };

  return (
    <div className="DetailView">
      <div
        className="DetailView-left"
        style={{ display: hideLeftPanel ? "none" : "flex" }}
      >
        {
          /* PACKS */
          location.pathname === ROUTE_PATHS.PACK &&
            _.toArray(getPacks).map((pack) => (
              <BasePack
                subscribe={subscribe}
                accountBalance={accountBalance}
                pack={pack}
                key={pack.name}
                alreadySubscribed={packs.indexOf(pack.id) >= 0}
              />
            ))
        }

        {
          /* CHANNELS */
          location.pathname === ROUTE_PATHS.CHANNEL && (
            <Section title="Available Channels" subtitle="All Channels">
              <Checklist
                items={getChannels}
                submitLabel="Subscribe"
                onSubmit={channels => subscribeChannelOrService(channels, "channels")}
                alreadyChecked={channels}
              />
            </Section>
          )
        }

        {
          /* SERVICES */
          location.pathname === ROUTE_PATHS.SERVICE && (
            <Section title="Available Services" subtitle="All Services">
              <Checklist
                items={getServices}
                submitLabel="Subscribe"
                onSubmit={services => subscribeChannelOrService(services, "services")}
                alreadyChecked={services}
              />
            </Section>
          )
        }

        {
          /* RECHARGE */
          location.pathname === ROUTE_PATHS.RECHARGE && (
            <Recharge addBalance={addBalance} />
          )
        }
      </div>

      <div className="DetailView-right">
        <BalanceView balance={accountBalance} />
      </div>
    </div>
  );
};

export default DetailView;
