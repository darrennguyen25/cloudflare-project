"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addMessage } from "@/actions/addMessage";

export default function MessageForm() {
  const [message, setMessage] = useState("");

  async function handleAddMessage() {
    const response = await addMessage(message);

    if (response.ok) {
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="Add a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button onClick={handleAddMessage}>Submit</Button>
    </div>
  );
}
