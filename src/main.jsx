import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


const persons = [
  { 
    id: 1, 
    name: 'Arto Hellas',
    number: 96,
  },

  { 
    id: 2, 
    name: 'Cher', 
    number: 805385,
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App persons = {persons}/>
  </React.StrictMode>,
)
