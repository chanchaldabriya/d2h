import React, { useState } from "react";
import "./UpdateUserDetails.css";
import "../../common/Common.css";
import Section from "../Section/Section";
import { getUserName, getUserMail, getUserContact } from "../../data/helper";

const UpdateUserDetails = ({ user={}, updateUser }) => {
  const [email, setEmail] = useState(user.email || getUserMail);
  const [contact, setContact] = useState(user.contact || getUserContact);
  const [username, setUsername] = useState(user.username || getUserName);

  return (
    <div className="UpdateUserDetails-container">
      <Section title="My Account" subtitle="Change notification details">
        <form className="UpdateUserDetails">
          <label>Username</label>
          <input
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="subscribe-input"
          />

          <label>Email</label>
          <input
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="subscribe-input"
          />

          <label>Contact Number</label>
          <input
            type="number"
            maxLength="12"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            className="subscribe-input"
          />

          <input
            type="submit"
            value="Update"
            className="UpdateUserDetails-btn subscribe-btn"
            onClick={(e) => {
              updateUser({username, email, contact});
              console.log("User Notifcation details updated successfully");

              // Prevent refreshing of the page.
              e.preventDefault();
            }}
          />
        </form>
      </Section>
    </div>
  );
};

export default UpdateUserDetails;
