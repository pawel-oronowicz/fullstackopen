import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Harry Potter', number: '012-345-6789' },
    { id: 2, name: 'Hermione Granger', number: '454-565-7888' },
    { id: 3, name: 'Ron Weasley', number: '744-565-3214' },
    { id: 4, name: 'Albus Dumbledore', number: '556-778-9891' }
  ]) 
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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