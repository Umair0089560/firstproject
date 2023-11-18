import React from "react";
import Navigat from "./components/navigaion/Navigation";
import './App.css'
import Banner from "./components/banner/Banner";
import Review from "./components/review/Review";
import Features from "./components/features/Features";
import Plane from "./components/plan/Plane";
import Network from "./components/network/Network";
import Costmer from "./components/customer/Costmer";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navigat />
      <Banner />
      <Review />
      <Features />
      <Plane />
      <Network />
      <Costmer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
