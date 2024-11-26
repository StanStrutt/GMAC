import './App.css';
import Dropdownmenu from './Components/Dropdown';
import Dropdownlogic from './Components/DropdownLogic';
import InfoCards from './Components/Infocards';
import resources from "./resources.json"
import { useState } from 'react';



function App() {

  const {location, problem, ageRange, allInputsCompleted, filteredResults, 
  handleLocationDropdownChange, handleAgeRangeDropdownChange, handleProblemDropdownChange, filterResources} = Dropdownlogic()



  return (
    <div className="App">
      <div className='img-background'>
        <div className='no-flex'>
          <div className='fifty-fifty'>
            <div className='front-text'>
              <div className='front-spacer'>
                <h1>Greater Manchester
                <br/>
                Autism Consortium</h1>           
                <div className='front-body'>
                  <p>We’re here to help you find valuable information and connect with a community that understands.
                    Whether you’re a parent, caregiver, educator, or on the autism spectrum, we can help.</p>
                </div>
                <div className='drop-down'>
                  <Dropdownmenu problem={problem} location={location} ageRange={ageRange} 
                  handleProblemDropdownChange={handleProblemDropdownChange} 
                  handleLocationDropdownChange={handleLocationDropdownChange}
                  handleAgeRangeDropdownChange={handleAgeRangeDropdownChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pseudo-footer'>
        <div className='Info-card-holder'>
          <div className="Info-cards">
            <InfoCards input={allInputsCompleted} problem={problem} source="https://fastly.picsum.photos/id/957/500/150.jpg?hmac=1oWQd-RpDaQrNgGxB7jnzFzAHwsf_IFrUFcOIVrGQwo"
            />
            <InfoCards input={allInputsCompleted} location={location} source="https://fastly.picsum.photos/id/571/500/150.jpg?hmac=0EGEYFwIlW5oydtwKO8x_Grq96r5EkCFL9anWG1ahhA"
            />
            <InfoCards input={allInputsCompleted} ageRange={ageRange} source="https://fastly.picsum.photos/id/91/500/150.jpg?hmac=BAg_gjC8kef2J7E4MKUXu4i_zTp6mzxb2cQgu3ZWQPY"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


