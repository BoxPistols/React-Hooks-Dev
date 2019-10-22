import React, { useState } from 'react'

const App = () => {
  // カウントを操作する関数 ex[price, setPrice]
  const [count, setCount] = useState(0)
  console.log({count})
  console.log({setCount})
  console.log(typeof setCount)
  return (
    <div>
      This is Template
    </div>
  )
}
export default App
