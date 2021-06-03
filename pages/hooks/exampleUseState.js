import { useState } from 'react'
import ExampleUseEffect from './exampleUseEffect'

const ExampleUseState = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
export default ExampleUseState