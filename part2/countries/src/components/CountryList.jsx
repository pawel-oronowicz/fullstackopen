const CountryList = ({ countries, viewCountry }) => {
    if(countries.length > 10) {
        return (
            <p>Too many countries, specify another filter</p>
        )
    } else {
        return (
            <div>
                {countries.map(country =>
                    <p key={country.cca3}>{country.name.common} <button onClick={viewCountry}>view</button></p>
                )}
            </div> 
        )
    }
}

export default CountryList