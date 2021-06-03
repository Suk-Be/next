import { useCounter } from './hook'

export default function CounterDemo({
    start,
    finish,
    step
  }) {
  const [count, handleCount] = useCounter(start, finish, step);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>
        Click me
      </button>
    </div>
  );
}