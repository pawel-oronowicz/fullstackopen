import { useState, useEffect } from 'react'
import CountriesSearch from './components/CountriesSearch'
import Country from './components/Country'
import CountryList from './components/CountryList'
import countryService from './services/countries'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(returnedCountries => {
        returnedCountries.sort((a, b) => {
          const nameA = a.name.common.toLowerCase();
          const nameB = b.name.common.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        })
        setCountries(returnedCountries)
      })
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())).sort()

  const handleCountryFilter = (event) => {
    setFilter(event.target.value)
  }

  const showCountry = (selectedCountry) => {
    setFilter(selectedCountry.name.common)
  }

  return (
    <div>
      <CountriesSearch filter={filter} handleCountryFilter={handleCountryFilter} />
      { filteredCountries.length === 1 ? 
        <Country country={filteredCountries[0]} />:
        <CountryList countries={filteredCountries} showCountry={showCountry} />
      }
    </div>
  )
}

export default App
