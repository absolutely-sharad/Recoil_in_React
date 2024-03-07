import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Counter } from '../Atoms/Counter';
import { computeCounter } from '../Selectors/computeCounter';
export default function CounterDisplay() {
    const [data, setData] = useRecoilState(Counter);
    const result = useRecoilValue(computeCounter);
  return (
    <div>
        <h1>I have clicked {data} times</h1>
      <button onClick={()=>setData(data+1)}> Increment</button>
      <h1>2X Increment {result}</h1>
      {/* <button onClick={()=>setData(data*2)}>Increase by 2X</button>
      <button onClick={()=>setData(data*0)}>Clear all</button> */}
    </div>

  )
}
