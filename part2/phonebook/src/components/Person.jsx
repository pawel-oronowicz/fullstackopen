const Person = ({ person, removePerson }) => {
    return (
        <div>
            <p>{person.name} {person.number} <button onClick={removePerson}>delete</button></p>
        </div> 
    )
}

export default Person