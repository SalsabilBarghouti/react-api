import React,{useEffect, useState } from 'react';
import Countries from './Countries'
import'./App.css'
import Header from './header';
import {BrowserRouter  as Router , Route } from 'react-router-dom'
import Visited from './Visited';


function App() {
  const [countries,setCountrys] = useState([]);
   var storage = localStorage.getItem('countries')
    console.log(storage);



            // ________localstorge_________//

             useEffect(() => {
              localStorage.setItem('countries', JSON.stringify(countries))
             },[countries]);

 
            // ________localstorge_________//
        

  const fetchData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountrys(data));
  }
  useEffect(() => fetchData(),[])


  


      
      return (  
        <Router>
          <Route path='/' exact>
         <Header></Header>
          <div className="container">
          
            { 
            countries.map(countries => <Countries {...countries} key={countries.name}></Countries>)
            }
          </div>
          </Route>
          <Route path='/visited' exact>
              <Visited></Visited>
          </Route>
    </Router>   
  )
 
}

export default App