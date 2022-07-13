import React from 'react'
import { Page2 } from './Page2'
import { useCounter } from '../Context/ContextApi'

export const Page1 = ({name}) => {
    const {count, increment} = useCounter()
  return (
    <div>Page1 for {name} with {count} count
    <Page2 name={name}/>
    <button onClick={increment} class="ui inverted basic button">Increase</button>
    </div>
  )
}

