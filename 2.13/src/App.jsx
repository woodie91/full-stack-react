import { useState, useEffect } from 'react'
import axios from 'axios'
import Aliens from './components/Aliens'
import Form from './components/form' 
import Filter from './components/filter'
import noteService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
noteService   
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (persons.find(({name}) => name.toLowerCase() === newName.toLowerCase() ))
    {
      alert (`${newName} is already added to phonebook`)
    }

    else {

    const noteObject = {
      name: newName,
      number: newNumber,
      //id: persons.length + 1,
    }

    noteService
    .create(noteObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  
    axios
    .post('http://localhost:3001/persons', noteObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })

   
  }
}

const filteredList = !newFilter
? persons
: persons.filter((person) => 
person.name.toLowerCase().includes(newFilter.toLowerCase())
 );

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  } 

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)

  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

  }

  return (
  
    <div>

    <Filter value = {newFilter} onChange = {handleFilterChange}  />
    
          <h2>Phonebook</h2>
        
          <Form onSubmit = {addName} 
          name = {{value: newName, onChange:handleNameChange}}
          number = {{value: newNumber, onChange:handleNumberChange}}/>

   
          <h2>Numbers</h2>
          <div>debug: {newName}</div>
          {
            filteredList.map((person) => {
              return (
                <p key = {person.id}>
               <Aliens name = {person.name} number = {person.number}/>
               </p>
               );
            })
          }
        </div>
  )
  }

 

export default App