import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const duplicateNameIndex = persons.findIndex(index => index.name.toLowerCase() === newName.toLowerCase())
    
    if(duplicateNameIndex !== -1) {
      if(confirm(`${newName} is already in the phonebook. Replace the existing number with the new one?`)) {
        const person = persons[duplicateNameIndex]
        const updatedObject = {
          ...person,
          name: newName,
          number: newNumber
        }
        personService
        .update(person.id, updatedObject)
        .then(returnedPerson => {
          const updatedPersons = persons.with(duplicateNameIndex, returnedPerson)
          setPersons(updatedPersons)
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      const newObject = {
        id: String(parseInt(persons[persons.length - 1].id) + 1),
        name: newName,
        number: newNumber
      }
      
      personService
      .create(newObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const removeName = (id) => {
    if(window.confirm('Are you sure you want to delete this person from the phonebook?')) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch(error => {
          alert(
            `the person with id '${id}' has already been deleted from the server`
          )
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const handleNameFilter = (event) => {
    const name = event.target.value
    setFilter(name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleNameFilter={handleNameFilter} />
      <h2>Add new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <Person key={person.id} person={person} removePerson={() => removeName(person.id)} />
      )}
    </div>
  )
}

export default App