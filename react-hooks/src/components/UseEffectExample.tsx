import { useEffect } from "react";

export default function UseEffectExample() {
  useEffect(() => {
    console.log("Hello, World / useEffect");
  }, []);

  return <h2>Hello, World / useEffect</h2>;
}