import React from 'react'



const Search = () => {
   
  
    const onWrite = value => {
          const countryName = document.querySelectorAll('.country-name');
          const countryAlpha2 = document.querySelectorAll('.alph2');
          const countryAlpha3 = document.querySelectorAll('.alph3');
         
     if (value.length > 3){ 
                countryName.forEach(name => {
          if(name.innerText.toLowerCase()==value.toLowerCase()){
              name.parentElement.parentElement.style.display = 'block'
          }
          else {
              name.parentElement.parentElement.style.display = 'none'
          }
      })}
    if (value.length === 2) {
        countryAlpha2.forEach(alpha2Code => {
            if (alpha2Code.innerText.toLowerCase().includes(value.toLowerCase())) {
              alpha2Code.parentElement.parentElement.style.display = 'block'
            } else {
              alpha2Code.parentElement.parentElement.style.display = 'none'
          }
        })
      } 

      if (value.length === 3) {
        countryAlpha3.forEach(alpha3Code => {
            if (alpha3Code.innerText.toLowerCase().includes(value.toLowerCase())) {
                alpha3Code.parentElement.parentElement.style.display = 'block'
            } else {
                alpha3Code.parentElement.parentElement.style.display = 'none'
          }
        })
      } if (value === "") {
          
        window.location.reload(true); 

      }

    }
      return (
          
          <div>
 
                <input
                      id="search"
                      name= 'search'
                      label="Search for country"
                      variant="outlined"
                      color="primary"
                      onInput ={(e) => onWrite(e.target.value)}
                  />
          </div>
        
      )
  }
  
  export default Search;

  