import "./App.css";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import UseMemoExample from "./components/UseMemoExample";

function App() {
  return (
    <div>
      <h1>React Hooks Showcase</h1>

      <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
      <UseMemoExample />
    </div>
  );
}

export default App;