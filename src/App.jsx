import './App.css';
import Dropdownmenu from './Components/Dropdown';


function App() { 
  return (
    <div className="App">
      <div>
        <div className='img-background'>
          <div className='front-text'>
            <div className='front-spacer'>
              <h1>Greater Manchester
                <br/>
                Autism Consortium</h1>           
              <div className='front-body'>
                <p>We’re here to help you find valuable information and connect with a community that <br/> understands.
                  Whether you’re a parent, caregiver, educator, or on the autism spectrum, we <br/> can help.</p>
              </div>
              <div className='drop-down'>
                <Dropdownmenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




