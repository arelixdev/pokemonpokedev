import React, { Component } from 'react';
import Card from '../components/Card';
import { pokemons } from '../pokemons';
import './App.css';


const App = () => {
  return (
  
    <Card id={pokemons[0].id}/>
  );
}

export default App;
