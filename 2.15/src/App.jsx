import { useState, useEffect } from 'react'
import axios from 'axios'
import Aliens from './components/Aliens'
import Form from './components/form' 
import Filter from './components/filter'
import noteService from './services/people'
import Notification from './components/Notification'

const App = () => {
  const [people, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
 // const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
noteService   
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault();
    const person = people.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
  
    if (person) {
      const updatedNumber = { ...person, number: newNumber };
  
      if (window.confirm(`${newName} is already added to the phonebook. Would you like to replace the old number with a new one?`)) {
        noteService
          .update(person.id, updatedNumber)
          .then(returnedPerson => {
            setPersons(people.map(p => (p.id !== person.id ? p : returnedPerson)));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
  
      noteService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(people.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error creating person:', error);
        });
    }
  };
  

const deleteName = (person) => {
if (window.confirm(`Delete ${person.name}`)) {
window.open("http://localhost:5173/", "Thanks for Visiting!");
noteService
.remove(person.id)
.then(returnedPerson => {
setPersons(people.concat(returnedPerson))
setNewName('')
setNewNumber('')
}) 
}}

const filterNames = !newFilter
? people
: people.filter((person) => 
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
<Filter value={newFilter} onChange={handleFilterChange} />
<h2>Phonebook</h2>
<Form onSubmit={addName} name={{value:newName, onChange:handleNameChange}} number={{value:newNumber, onChange:handleNumberChange}} />
<h2>Numbers</h2>


{ filterNames.map((person) => {
  return (
    <div key={person.id}><Aliens name={person.name} number={person.number} confirm={() => deleteName(person)} /></div>
  );
})
}

</div>
)
}

export default App