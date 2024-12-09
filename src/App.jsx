import './App.css';
import Dropdownmenu from './Components/Dropdown';
import Dropdownlogic from './Components/DropdownLogic';
import InfoCards from './Components/Infocards';



export default function App() {

  const {location, problem, ageRange, filteredResults, handleLocationDropdownChange, handleAgeRangeDropdownChange, handleProblemDropdownChange} = Dropdownlogic()


  const scrollOnComplete = () => {
    if (filteredResults) {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight + 1,
          left: 0,
          behaviour: "smooth, !important"})
      }, 1000)
    }
  }
  scrollOnComplete()

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
        <div className="Info-cards">
          <InfoCards filteredResults={filteredResults} source="https://fastly.picsum.photos/id/1002/800/400.jpg?hmac=aiLg5Y1Yk9qfv2bgkITz9jCoUP_NirxrP6E4n5FED2Y"/> 
        </div>
      </div>
    </div>
  );
}






