import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../CounterSlice'

const Counter = () => {
  const Countervalue=  useSelector(state=>state.counter.value)
  const state=useSelector(state=>state)
  console.log("STATE IN JSX FILE",state);
  
  console.log(Countervalue);
  console.log(increment());
  
 const dispatch= useDispatch()
  
  return (
    <>
      <div>Counter{Countervalue}</div>
      <button type="button" onClick={() => dispatch(increment())}>
        Click
      </button>
    </>
  );
}

export default Counter