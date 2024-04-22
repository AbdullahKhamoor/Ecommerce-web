
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import data from "./Data/data.json"



function App() {
  return (

    <Router>
      
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} /> 
      <Offers offer = {data.offer} />
      <Heading text = "HOT ACCESSORIES" />
      <StarProduct StarProduct={data.starProduct} />
     
    </Router>
  
  );
}

export default App;
