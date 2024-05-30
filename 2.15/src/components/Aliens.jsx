import React from "react"

const Aliens = (props) => (
    <p> {props.name} - {props.number} <button onClick={props.confirm}>{"delete"}</button> </p>
    )
    
    
    export default Aliens

