import React, { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core';
import InfoBox from './Infobox';
import Map from './Map';

function App() {  
  const [countries, setCountries] = useState([]);
  const [country, setCountry ] = useState();

  useEffect(() => {
    //async => send request to server,do something with data
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name:country.country, // united states
            value: country.countryInfo.iso2 // us
          }));

        //setCountry("Worldwide");
        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange =async (event) => {
    const countryCode = event.target.value;
    setCountries(countryCode);
  }

  return (
    <div className="App">
      <div className="app_left">
       <div className="app_header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app_dropdown">
         <Select variant="outlined" onChange={onCountryChange} value={country}>
           {/*Loops through all the countries*/
           <MenuItem value="worldwide">Worldwide</MenuItem>}
           {countries.map((country) => (
             <MenuItem value={country.value}>{country.name}</MenuItem>
           ))} 
         </Select>
        </FormControl>
      </div>
      <div className="app_stats">
            <InfoBox title="Coronavirus cases" cases={123} total={2000}></InfoBox>
            <InfoBox title="Recovered" cases={1234} total={1000}></InfoBox>
            <InfoBox title="Deaths" cases={1235} total={200}></InfoBox>
      </div>
      <Map />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
          {/*Table*/}
          {/*Graph*/}
        </CardContent>
            
      </Card>
    </div>
  );
}

export default App;
