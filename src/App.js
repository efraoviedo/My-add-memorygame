import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Top from "./components/Top";
import Scores from "./components/Scores";

import cat from "./images/cat.jpg";
import corazon from "./images/corazon.png";
import girasol from "./images/girasol.png";
import helecho from "./images/helecho.jpg";
import margarita from "./images/margarita.png";
import pensamiento from "./images/pensamiento.png";
import petalo from "./images/petalo.png";
import question from "./images/question.png";
import redRoses from "./images/redRoses.jpg";
import rosas from "./images/rosas.png";
import Container from "./components/Container";

function App() {
  const [characters, setCharacters] = useState([
    {
      name: "CAT",
      id: 1,
      selected: false,
      image: cat,
    },
    {
      name: "CORAZON",
      id: 2,
      selected: false,
      image: corazon,
    },
    {
      name: "GIRASOL",
      id: 3,
      selected: false,
      image: girasol,
    },
    {
      name: "HELECHO",
      id: 4,
      selected: false,
      image: helecho,
    },
    {
      name: "MARGARITA",
      id: 5,
      selected: false,
      image: margarita,
    },
    {
      name: "PENSAMIENTO",
      id: 6,
      selected: false,
      image: pensamiento,
    },
    {
      name: "PETALO",
      id: 7,
      selected: false,
      image: petalo,
    },
    {
      name: "QUESTION",
      id: 8,
      selected: false,
      image: question,
    },
    {
      name: "RED ROSES",
      id: 9,
      selected: false,
      image: redRoses,
    },
    {
      name: "ROSAS",
      id: 10,
      selected: false,
      image: rosas,
    },
  ]);

  const [character, setCharacter] = useState([]);


  const [currentScore, setCurrentScore] = useState(0);

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const incrementCurrentScore = () => {
    setCurrentScore((prevScore) => prevScore + 1);
  };

  const [highestScore, setHighestScore] = useState(0);

  const scoreHandler = () => {
    // If score is greater than 9 reset current score and reset selected to false else increment score
    if (currentScore > 9) {
      resetCurrentScore();
      resetAllSelectedToFalse();
    } else {
      incrementCurrentScore();
    }
  };

  // Shuffles the objects in the array
  const shuffle = () => {
    for (let i = characters.length; --i; ) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    setCharacters([...characters]);
  };

  const selectCard = (id) => {
    let reset = false;

    // loop over the characters to find the character id
    const updatedCharacters = characters.map((character) => {
      // If character id matches and character select it false
      if (character.id === id && character.selected === false) {
        // Increase score and change selected on object to true
        scoreHandler();
        return { ...character, selected: true };
        // If character id equals to id and character selected is true
      } else if (character.id === id && character.selected === true) {
        // Set reset to true and change current character selected to false
        reset = true;
        return { ...character, selected: false };
      } else return character;
    });

    // If reset is true reset all selected to false and reset score
    if (reset) {
      resetAllSelectedToFalse();
      resetCurrentScore();
      // Else update characters
    } else {
      setCharacters(updatedCharacters);
    }
  };

  const resetAllSelectedToFalse = () => {
    // Go through all characters
    const updatedCharacters = characters.map((character) => {
      // If character selected is true set character selected to false
      if (character.selected === true) {
        return { ...character, selected: false };
      }
      return character;
    });
    // sets updated characters
    setCharacters(updatedCharacters);
  };

  // Updates on component did render and when current score is changed to shuffle
  useEffect(() => {
    shuffle();
    // If currenScore is higher than highestScore set highestScore equal to currentScore
    if (currentScore > highestScore) {
      setHighestScore((prevState) => (prevState = currentScore));
    }

    // If current score is 10 reset current score
    if (currentScore === 10) {
      resetCurrentScore();
    }
  }, [currentScore]);

  return (
    <div className="App">
      <Top />
      <Scores currentScore={currentScore} highestScore={highestScore} />
      <Container characters={characters} selectCard={selectCard} />
      {/* <Background /> */}
      {/* <Cards character={character} selectCard={selectCard} /> */}

    </div>
  );
}

export default App;
