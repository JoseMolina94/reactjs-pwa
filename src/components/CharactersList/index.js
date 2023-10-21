import React from "react"
import "./style.css"
import {CharacterCard} from "../CharacterCard";

export const CharactersList = ({
  characters = [],
  loading = false
}) => {

  console.log(characters)
  return ( !loading &&
    <div className="container" >
      {
        characters.map((character, index) => (
          <CharacterCard
            {...character}
            key={index}
          />
        ))
      }
    </div>
  )
}
