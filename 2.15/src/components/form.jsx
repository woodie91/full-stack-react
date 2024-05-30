import React from "react"

const Form = ({onSubmit, name, number}) => {
return (
<form onSubmit={onSubmit}>
            <div>name: <input value={name.value} onChange={name.onChange}/></div>
            <div>number: <input value={number.value} onChange={number.onChange}/></div>
            <button type="submit">save</button>
          </form> 


)
}


export default Form 

 