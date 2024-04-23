
import './App.css';
import { HashRouter as Router , Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';

import data from "./Data/data.json"



function App() {
  return (
  
    <Router>
      
      <Navbar />
      <PreNavbar />
      <Slider start={data.banner.start} /> 
      <Offers offer = {data.offer} />
      <Heading text = "HOT ACCESSORIES" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      
      <Routes>

        <Route exact path="/music'" element={
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}

      />
      <Route exact path="/smartDevice" element={
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}

      />
      <Route exact path="/home" element={
        <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}

      />
      <Route exact path="/lifestyle" element={
        <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}

      />
      <Route exact path="/mobileAccessories" element={
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}

      />

    </Routes>
 


    </Router>
  
  );
}

export default App;
