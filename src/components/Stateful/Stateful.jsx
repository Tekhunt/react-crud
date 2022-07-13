import { Page1 } from "./Page1";

import React, {useState} from 'react'
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

export const Stateful = () => {
    const [name, setName] = useState('Chizzy')
  return (
    <div>
        <Page1 name={name} />
        <Page2 name={name} />
        <Page3 name={name} />
    </div>
  )
}

