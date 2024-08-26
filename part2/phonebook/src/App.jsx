import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

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
      <p>filter: <input value={filter} onChange={handleNameFilter} /></p>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App