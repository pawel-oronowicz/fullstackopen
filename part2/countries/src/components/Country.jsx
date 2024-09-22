const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <p><strong>Languages:</strong></p>
            <ul>
                {Object.keys(country.languages).map((key) =>
                    <li key={key}>{country.languages[key]}</li>
                )}
            </ul>
            <img src={country.flags.png} />
        </div> 
    )
}

export default Country