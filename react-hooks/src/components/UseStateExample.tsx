import { useState } from "react";

export default function UseStateExample() {
  const [message] = useState("Hello, World / useState");

  return <h2>{message}</h2>;
}