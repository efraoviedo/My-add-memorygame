import React from "react";
import Cards from "./Cards";
import "../styles/container.css";

function Container(props) {
  const { characters, selectCard } = props;

  const chara = characters.map((character) => (
    <Cards character={character} key={character.id} selectCard={selectCard} />
  ));

  return <div className="card-container">{chara}</div>;
}

export default Container;
