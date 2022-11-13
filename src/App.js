import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import Results from './components/Results/Results';
import Search from './components/Search/Search';

function App() {
  const [showMap, setShowMap] = useState(false)
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <div className='main_container'>
          <Search />
          <button className='map_btn' onClick={() => setShowMap(!showMap)}>show map</button>
          {
            !showMap ? (
              <div className='results_'>
                <Results />
              </div>
            ): (
                <div className='showMap_container'>
                  <div className='left_side'>
                    <Results />
                  </div>
                
                  <div className='right_side'>
                    
                  </div>
                </div>
            )
          }
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
