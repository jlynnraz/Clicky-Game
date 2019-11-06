import React from 'react';
import logo from './logo.svg';
import AnimalCard from "./AnimalCard/index";
import Wrapper from "./components/Wrapper";
import './App.css';
import animals from "./animals.json";
import { restElement } from '@babel/types';

class App extends React.Component{
  state = {
    animals,
    score: 0,
    targetScore: 12
  }


updateAnimal = id => {
  const animals = this.state.animals.map(animal => {
    if (animal.id === id && animal.clicked === true){
      this.reset()
      alert("You've clicked this animal twice! You lose!")
    } else if (animal.id === id && animal.clicked === false){
    animal.clicked = true
    this.updateScore()
  } else if(animal.clicked === false && this.state.score === 12) {
    alert("You win!")
  }
  return animal;
  });
  
  this.setState({ animals });
  this.shuffleDeck(this.state.animals);
};

shuffleDeck = (array) => {
  const shuffledDeck = array.sort(function (a, b) { return 0.5 - Math.random() });
  this.setState({ animals: shuffledDeck })
}

updateScore = () => {
  this.setState({ score: this.state.score + 1 })
  
}

reset = () =>{
const animals = this.state.animals.map(animal => (animal.clicked = false))
console.log("game reset")

this.setState({ animals:animals, score: 0});
}


  render(){
    return (
      <Wrapper>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Clicky Game</h1>
    <p class="lead">Click all the meme's without clicking the same animal twice!</p>
  </div>
</div>
        {/* <h1 className="title">Clicky Game</h1> */}
        <h2 className="score"> Score: {this.state.score}</h2>
       {this.state.animals.map(animal =>(
         <AnimalCard
         key={animal.id}
         id={animal.id}
         name={animal.name}
         image={animal.image}
         updateAnimal={this.updateAnimal}
         />
       ))}
      </Wrapper>
    );
  }
}

export default App;
