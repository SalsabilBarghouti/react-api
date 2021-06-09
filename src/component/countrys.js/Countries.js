import React, { useState, useEffect } from 'react'
import'../Countries.css'

function Countries({flag,name,capital,languages,region,population,alpha2Code,alpha3Code,subregion,currencies}) {

    const country = {flag,name,capital,languages,region,population,alpha2Code,alpha3Code,currencies,subregion}
    console.log(name);

    const [text,setText] = useState('add')

    const ls = (data , text) =>{
        //init an array to store it on local storage
        let visitedCountry;
        // check if the localstorage equal null or not
        if(localStorage.getItem(text) === null) {
            visitedCountry = []
        } else {
            visitedCountry = JSON.parse(localStorage.getItem(text))
        }
        // push the task to the taskes array
        visitedCountry.push(data)
        // set the item for localstorage
        localStorage.setItem(text , JSON.stringify(visitedCountry))
        }

        useEffect(()=> {
            if(text === 'remove'){
              ls(country , 'visited')
            }else {
              // removels(country) 
            }},[text])

            
        const visit =() => {
            if(text === 'add'){
                setText('remove')
            } else {
                setText('add')
            }
        }
    
    return (
        <div className="countries">
            <div className="image">
                    <img src={flag} alt="flag" />
            </div>
            <div className="countries-details">
                    <h2 className='country-name'>{name}</h2>
                    <p> Capital : {capital}</p>
                    <p> Language :
                    {languages.map(language => <span key={languages.name}> {language.name}</span>)}
                    </p>
                    <p>region : {region}</p>
                    <p>population : {population}</p>
                    <p className="alph2" > {alpha2Code} </p> 
                     <p className="alph3"> {alpha3Code} </p> 
            </div>
            
            
            <div>
            <button className="add" onClick={visit}>
                {text}
            </button>
            </div>


        </div>
    )
}

export default Countries
