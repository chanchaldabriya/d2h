import React from "react";
import "./User.css";
import { getUserName, getUserMail, getUserContact } from '../../data/helper';

const User = ({user={}}) => {
  // UI variables
  let myUserName, myUserEmail, myUserContact;

  // props
  const {username, email, contact} = user;

  if(username || email || contact) {
    // Take the passed props values
    myUserName = username;
    myUserEmail = email;
    myUserContact = contact;
  }
  else {
    // Take the default values
    myUserName = getUserName;
    myUserEmail = getUserMail;
    myUserContact = getUserContact;
  }
  return (
    <div className="User">
        <span className="User-name">{myUserName}</span>
        <span className="User-email">{myUserEmail}</span>
    </div>
  );
};

export default User;
