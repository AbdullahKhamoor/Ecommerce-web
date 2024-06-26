
import './App.css';
import {BrowserRouter  , Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReview';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';

import data from "./Data/data.json"



function App() {
  return (
  
    <BrowserRouter basename='Ecommerce-web'>
    
    <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} /> 
      <Offers offer = {data.offer} />
      <Heading text = "STAR PRODUCT" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      
      <Routes>
        <Route exact path='/https://AbdullahKhamoor.github.io/Ecommerce-web' element={<App />} />
        <Route exact path="/music" element={
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
    <Heading text = "PRODUCT REVIEW"/>
      <ProductReviews ProductReviews = {data.productReviews} />
      <Heading text="VIDEOS" />   

      <Videos Videos = {data.videos} />     
      <Heading text= "IN THE PRESS" />
      <Banner banner = {data.banner} />
      <Footer footer={data.footer} />

    </BrowserRouter>
  
  );
}

export default App;
