import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { pokemons } from '../pokemons';
import './App.css';


class App extends Component {
	constructor(){
    	super();
        this.state = {
            pokemons: pokemons,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const {pokemons, searchfield} = this.state;
    	const filteredPokemons = pokemons.filter(pokemons =>{
    		return pokemons.name.toLowerCase().includes(searchfield.toLowerCase());
		})
        
        if(pokemons.length === 0){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"} alt={"title"}/>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList pokemons={filteredPokemons}/>  
                    </Scroll>         
                </div>
            );
        }
    }
}

export default App;
