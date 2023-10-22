import React from "react"
import "./style.css"
import {CharacterCard} from "../CharacterCard";

export const CharactersList = ({
  characters = [],
  loading = false,
  setCharacterSelected = (character) => {}
}) => {

  return ( !loading &&
    <div className="container" >
      {
        characters.map((character, index) => (
          <CharacterCard
            {...character}
            key={index}
            characterSelectFunc={() => setCharacterSelected(character)}
          />
        ))
      }
    </div>
  )
}
