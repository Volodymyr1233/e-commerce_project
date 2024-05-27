import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainPost from "./components/MainPost/MainPost";
import ScrollLine from "./components/ScrollLine/ScrollLine";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPost/>
        <ScrollLine/>
        <Sections/>
    </div>
  );
}

export default App;
