import React, { useState } from 'react'

const Calc = (props: any) => {
  const [state, setState] = useState(props)
  const {name, price} = state
  return (
    <React.Fragment>
      <h1>現在の{name}は、{price}円です。</h1>
      <div className="btnGroup">
      <p>
      <button onClick={() => setState({...state, price: price + 1})}> +1 </button>
      </p>
      <p>
      <button onClick={() => setState({...state, price: price - 1})}> -1 </button>
      </p>
      <p>
      <button onClick={() => setState({...state, price: Math.floor(price * 1.10) })}> x 1.10 </button>
      </p>
      <p>
      <button onClick={() => setState({...state, price: Math.floor(price * 1.08) })}> x 1.08 </button>
      </p>
      <p>
      <button onClick={() => setState({...state, price: Math.floor(price * 1.10 - price * 1.08) })}> Tax Diff </button>
      </p>
      <p>
      <button onClick={() => setState(props)} >Reset </button>
      </p>
      <p>
      <input value={name} onChange={(e: any) => setState({...state, name: e.target.value})}/>
      </p>
      <input value={price} onChange={(e: any) => setState({...state, price: e.target.value})}/>
      </div>
    </React.Fragment>
  );
}

Calc.defaultProps = {
  name: 'アイテム',
  price: 1000
}
export default Calc
