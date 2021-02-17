import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Header from "./components/Header";
import Trending from "./components/Trending";

function App() {
  return (
    <div className='main_div'>
      <div className='left_nav'>
        <Navbar/>
      </div>
      
      <div className='display_comp'>
        <Header/>
        <Body/>
      </div>

      <div className='right_cards'>
        <Trending/>
      </div>
      
    </div>
  );
}

export default App;
