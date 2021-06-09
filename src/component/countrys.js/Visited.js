import React from 'react';
import'./Visited.css'


const Visited = () => {
    const visite = JSON.parse(localStorage.getItem('visited'))
    return  (
        <>
            {visite && visite.map((vis) => (
                 <div  className='cards' id="container">
                 <div className="image">
                   <img  src={vis.flag} alt="" />
                   <div>
                    <h2>
                      name: <span className="vis-name">{vis.name}</span> 
                    </h2>

           
                     <p>
                      region: {vis.region}
                      </p>
            
                    <p>
                     subregion: {vis.subregion}
                    </p>
                  
           
                    <p>

                      capital: {vis.capital}
                    </p>
           
                    <p>

                      languages: {vis.languages.map(lang => lang.name)}
                    </p>

                    <p>

                      population: {vis.population}
                    </p>
           
                    <p>

                      currency: {vis.currencies.map(currency => currency.name)}
                    </p>
                    <p>
                      Alphacode : {<span className='alpha2'>{vis.alpha2Code}</span> } , { <span className='alpha3'>{vis.alpha3Code}</span>}
                       
                        </p> 
                
                   </div>
                   
                  </div>
                  </div>
            ))}
       
        </>
    )
   
}

export default Visited