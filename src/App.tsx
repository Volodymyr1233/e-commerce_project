import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainPost from "./components/MainPost/MainPost";
import ScrollLine from "./components/ScrollLine/ScrollLine";
import NewArrivals from "./components/Arrivals/Arrivals";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPost/>
        <ScrollLine/>
        <NewArrivals/>
    </div>
  );
}

export default App;
