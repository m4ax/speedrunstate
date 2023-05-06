import Button from '../Button/index.js'
import Counter from '../Counter/index.js'
import { React, useState } from 'react';

export default function App() {

    const [ count, setCount ] = useState(0)

    function increaseCount() {

        setCount(count +1)
    }

    function resetCount() {

        setCount(0)
    }

    return ( <div>
        <Button setCount={setCount} count={count} title="increase" method={increaseCount}/>
        <Button setCount={setCount} count={count}  title="decrease" method={resetCount}/>
        <Counter count={count} />
    </div>
)}

