import { observer } from "mobx-react-lite";
import counterStore from "./stores/counterStore";

import "./App.css";

const App = observer(() => {
  return (
    <div className="container">
      <h1>MobX Counter</h1>

      <h2>{counterStore.count}</h2>

      <div className="buttons">
        <button onClick={() => counterStore.decrement()}>
          -
        </button>

        <button onClick={() => counterStore.increment()}>
          +
        </button>

        <button onClick={() => counterStore.reset()}>
          Reset
        </button>
      </div>
    </div>
  );
});

export default App;