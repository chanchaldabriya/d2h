import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from '../../common/appConstants';

const options = [
  {
    name: "Current Balance",
    description: "View current balance in the account",
    action: ROUTE_PATHS.BALANCE
  },
  {
    name: "Recharge Account",
    description: "Recharge to add money in your account",
    action: ROUTE_PATHS.RECHARGE
  },
  {
    name: "Subscription Catalog",
    description: "View available packs, channels and services",
    action: ROUTE_PATHS.CATALOG
  },
  {
    name: "Subscribe pack",
    description: "Subscribe to base packs",
    action: ROUTE_PATHS.PACK
  },
  {
    name: "Add Channels",
    description: "Add channels to an existing subscription",
    action: ROUTE_PATHS.CHANNEL
  },
  {
    name: "Special Services",
    description: "Subscribe to special services",
    action: ROUTE_PATHS.SERVICE
  },
  {
    name: "View Current Subscription",
    description:
      "View currently subscribed packs, channels and services for your account",
      action: ROUTE_PATHS.CURRENT_SUBSCRIPTION
  },
  {
    name: "Update notification details",
    description: "Update email and phone number for notifications",
    action: ROUTE_PATHS.UPDATE_DETAILS
  },
  // {
  //   name: "Exit",
  //   description: "Exit the app",
  //   action: ROUTE_PATHS.EXIT
  // }
];

const Menu = () => {
  return (
    <div className="Menu">
      {options.map(menuItem => {
        return (
          <Link className="Menu-Item" key={menuItem.action} to={menuItem.action}>
            <span className="Menu-Item-title">{menuItem.name}</span>
            <span className="Menu-Item-subtitle">{menuItem.description}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
