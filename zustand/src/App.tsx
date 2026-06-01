import "./App.css";
import { useCounterStore } from "./store/counterStore";

function App() {
  const message = useCounterStore((state) => state.message);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;