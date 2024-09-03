const Filter = ({ filter, handleNameFilter }) => {
    return (
        <p>filter: <input value={filter} onChange={handleNameFilter} /></p>
    )
}

export default Filter