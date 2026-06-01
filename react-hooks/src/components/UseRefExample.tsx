import { useRef } from "react";

export default function UseRefExample() {
  const messageRef = useRef("Hello World / useRef");

  return <h2>{messageRef.current}</h2>;
}