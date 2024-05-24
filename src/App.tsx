import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainPost from "./components/MainPost/MainPost";
import ScrollLine from "./components/ScrollLine/ScrollLine";
import NewArrivals from "./components/Arrivals/Arrivals";
import TopSelling from "./components/TopSelling/TopSelling";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPost/>
        <ScrollLine/>
        <NewArrivals/>
        <TopSelling/>
    </div>
  );
}

export default App;
