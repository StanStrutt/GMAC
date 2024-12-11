import './App.css';
import Dropdownmenu from './Components/Dropdown';
import Dropdownlogic from './Components/DropdownLogic';
import InfoCards from './Components/Infocards';
import FAB from "./Components/FAB"
import { useRef, useState, useEffect } from 'react';

export default function App() {

  const {location, problem, ageRange, filteredResults, handleLocationDropdownChange, handleAgeRangeDropdownChange, handleProblemDropdownChange} = Dropdownlogic()

  const [scrollToComplete, setScrollToComplete] = useState([])

  useEffect(() => {
    if (filteredResults) {
      const scrollOnComplete = () => {
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight + 1,
            left: 0,
            behaviour: "smooth"})
        }, 800);
      }
      setScrollToComplete(scrollOnComplete)
    } else {
      setScrollToComplete([])
    }
  }, [filteredResults]);

  // I guessed all of this, not correct because scrollToComplete is not used but it works
  
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);
  
  const updateHeight = () => {
  if (elementRef.current) {
      setHeight(elementRef.current.getBoundingClientRect().height);
  }
  };
  
  useEffect(() => {
  // Initial height calculation
  updateHeight();
  
  // Add a resize event listener
  window.addEventListener('resize', updateHeight);
  
  return () => {
      window.removeEventListener('resize', updateHeight);
  };
  }, []);

  // console.log(height)

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
      setScrollPosition(window.scrollY); // window.scrollY gives the vertical scroll position
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup the event listener on component unmount
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
  }, []);

  // console.log(scrollPosition)


  // const scrollOnComplete = () => {
  //   if (filteredResults)
  //     setTimeout(() => {
  //       window.scrollTo({
  //         top: window.innerHeight + 1,
  //         left: 0,
  //         behaviour: "smooth"})
  //     }, 800);
  //   }


  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true); 
    }, []);


  return (
    <div className="App">
      <div className='img-background' ref={elementRef}>
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
      {mounted && (
        <div className={scrollPosition >= height ? "visible" : "hidden"}>         
          <FAB />         
        </div>
      )}
        <div className="Info-cards">
          <InfoCards filteredResults={filteredResults} source="https://fastly.picsum.photos/id/1002/800/400.jpg?hmac=aiLg5Y1Yk9qfv2bgkITz9jCoUP_NirxrP6E4n5FED2Y" 
          /> 
        </div>
      </div>
    </div>
  );
}






