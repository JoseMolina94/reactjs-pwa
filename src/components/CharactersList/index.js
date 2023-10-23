import React from "react"
import { CharacterCard } from "../CharacterCard"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import "./style.css"

export const CharactersList = ({
  characters = [],
  loading = false,
  setCharacterSelected = (character) => {},
  paginate = {}
}) => {

  return ( !loading &&
    <div className="container" >
      <div className="characters-list">
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

      <div className='paginate-container'>
        <div
          className="paginate-button"
          onClick={() => paginate.previousPage()}
        >
          <MdNavigateBefore />
        </div>

        <p>{paginate.page} / {paginate.pages}</p>

        <div
          className="paginate-button"
          onClick={() => paginate.nextPage()}
        >
          <MdNavigateNext />
        </div>
      </div>
    </div>
  )
}
