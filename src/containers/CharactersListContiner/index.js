import React, { useState } from "react"
import {CharactersList} from "../../components/CharactersList"
import {useGetCharactersList} from "../../hooks/useGetCharactersList"
import { CharacterDetails } from "../../components/CharacterDetails";

export const CharactersListContainer = props => {
  const {
    charactersList,
    visualizationStatistics,
    loadingCharactersList
  } = useGetCharactersList()
  const [characterSelected, setCharacterSelected] = useState(null)

  const closeDetailsSection = () => {
    setCharacterSelected(null)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: !characterSelected ? '1fr' : '1fr 0.5fr'
      }}
    >
      <CharactersList
        characters={charactersList}
        loading={loadingCharactersList}
        setCharacterSelected={setCharacterSelected}
      />

      {
        characterSelected &&
          <CharacterDetails
            character={characterSelected}
            closeFunc={closeDetailsSection}
            visualizationStatistics={visualizationStatistics}
          />
      }
    </div>
  )
}
