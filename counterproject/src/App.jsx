import { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("July 26 2026");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onclick={() => setStep((c) => c - 1)}> -</button>
        <span>step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>count:{count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count == 0
            ? "Today is"
            : count > 0
              ? `${count} daysfrom today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}
