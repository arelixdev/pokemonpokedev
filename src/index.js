import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Card from './components/Card';
import { pokemons } from './pokemons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card id={pokemons[0].id} name={pokemons[0].name} types={pokemons[0].types}/>, document.getElementById('root'));
registerServiceWorker();
