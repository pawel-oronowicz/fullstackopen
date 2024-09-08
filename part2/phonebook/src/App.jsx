import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    if(JSON.stringify(persons).includes(newName)) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const newObject = {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(newObject))
      setFilteredPersons(persons.concat(newObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameFilter = (event) => {
    const name = event.target.value
    setFilter(name)
    setFilteredPersons([])
    const names = []
    
    persons.map((person) => {
      if(person.name.toLowerCase().includes(name.toLowerCase())) {
        names.push(person)
      }
      setFilteredPersons(names)
    })
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleNameFilter={handleNameFilter} />
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App