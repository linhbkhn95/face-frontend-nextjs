import React, { useState, useEffect } from "react";
import getStatusFriend from "../functions/getStatusFriend";
const friendList = [
  {
    id: 1,
    name: "Phoebe"
  },
  {
    id: 2,
    name: "Rachel"
  },
  {
    id: 3,
    name: "Ross"
  }
];

export default function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = getStatusFriend(recipientID);

  return (
    <>
      <div> {isRecipientOnline ? "green" : "red"} </div>{" "}
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {" "}
            {friend.name}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </>
  );
}
