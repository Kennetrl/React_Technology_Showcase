import { useMemo } from "react";

export default function UseMemoExample() {
  const message = useMemo(() => {
    return "Hello World / useMemo";
  }, []);

  return <h2>{message}</h2>;
}