import React from 'react'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Count</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Count