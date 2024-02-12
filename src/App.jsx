import { useState } from 'react'
import Aliens from './components/Aliens'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(noteObject))
    setNewName('')
  }
  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  } 

  const namesToShow = showAll
    ? persons
    : persons.filter(person => person.important === true)

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <button type="submit">save</button>
      </form>  

      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {namesToShow.map(person => 
          <Aliens key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
  }

export default App