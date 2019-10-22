import React, { useState } from 'react'

const App = () => {
  // カウントを操作する関数 ex[price, setPrice]
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const double = () => setCount(previousCount => previousCount * 2)
  
  const division = () => setCount(previousCount => 
    // {return ... } 無くても可 参考演算子 返り値 関数が３の倍数(% 3)であれば３で割り(/ 3) : 違うければそのまま
      previousCount % 3 === 0 ? previousCount / 3 : previousCount    
    // if(previousCount % 3 === 0){
    //   return previousCount / 3 
    // } else {
    //   return previousCount
    // }
  )

  const reset = () => setCount(0)

  return (
    <>
      <div>count: { count }</div>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
      <p></p>
      <button onClick={increment2}> +1 </button>
      <button onClick={decrement2}> -1 </button>
      <p></p>
      <button onClick={double}> x2 </button>
      <p></p>
      <button onClick={division}> 3の倍数の時だけ３で割る </button>
      <p></p>
      <button onClick={reset}>Reset</button>
    </>
  )
}
export default App