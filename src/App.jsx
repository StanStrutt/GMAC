import './App.css';
import Dropdownmenu from './Components/Dropdown';
import Dropdownlogic from './Components/DropdownLogic';
import InputTimer from './Components/inputtimer';


function App() {

  const {location, problem, ageRange, allInputsCompleted, handleLocationDropdownChange, handleAgeRangeDropdownChange, handleProblemDropdownChange} = Dropdownlogic()



  

  return (
    <div className="App">
      <div>
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
            <div className='Info-card-holder'>
              <InputTimer input={allInputsCompleted} problem={problem} location={location} ageRange={ageRange}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




