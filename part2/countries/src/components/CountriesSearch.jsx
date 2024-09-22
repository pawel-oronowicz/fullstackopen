const CountriesSearch = ({ filter, handleCountryFilter }) => {
    return(
        <p>find countries: <input value={filter} onChange={handleCountryFilter} /></p>
    )
}

export default CountriesSearch