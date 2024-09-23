import Weather from "./Weather"

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p><strong>Languages:</strong></p>
            <ul>
                {Object.keys(country.languages).map((key) =>
                    <li key={key}>{country.languages[key]}</li>
                )}
            </ul>
            <img src={country.flags.png} />
            
            <Weather name={country.capital[0]} lat={country.capitalInfo.latlng[0]} lon={country.capitalInfo.latlng[1]} />
            
        </div> 
    )
}

export default Country