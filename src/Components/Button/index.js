import { React } from 'react'

export default function Button(props) {

    function handleClick() {

        props.method()


    }

    return ( <button onClick={handleClick}>{props.title}</button>
)}