import React from 'react'
import { Assemble } from './Assemble'
import { Increment } from './Increment'
import { Decrement } from './Decrement'

const Main = () => {
  return (
    <div>
        <h2>Assembled code base</h2>
        <Assemble />
        <h2>Increment stand alone</h2>
        <Increment />
        <h2>Decrement stand alone</h2>
        <Decrement />
    </div>
  )
}

export default Main