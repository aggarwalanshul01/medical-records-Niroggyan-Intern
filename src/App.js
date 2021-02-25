import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Header from "./components/Header";
import Trending from "./components/Trending";
import React,{useState} from 'react';

 

function App() {
  const [Lang, setLang] = useState('eng');
  const engtohindi=()=>{
    setLang('hindi');
  }
  const hinditoeng=()=>{
    setLang('eng');
  }
  return (
    <div className='main_div'>
      <div className='left_nav' >
        <Navbar Lang={Lang}/>
      </div>
      
      <div className='display_comp'>
        <Header engtohindi={engtohindi} hinditoeng={hinditoeng} Lang={Lang}/>
        <Body Lang={Lang}/>
      </div>

      <div className='right_cards'>
        <Trending Lang={Lang}/>
      </div>
      
    </div>
  );
}

export default App;
