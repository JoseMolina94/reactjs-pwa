import React, {useEffect, useState} from "react"
import {CharactersList} from "../../components/CharactersList"
import {useGetCharactersList} from "../../hooks/useGetCharactersList"
import { CharacterDetails } from "../../components/CharacterDetails"
import { PageHeader } from "../../components/Commons/PageHeader"

export const CharactersListContainer = () => {
  const {
    charactersList,
    visualizationStatistics,
    loadingCharactersList,
    paginate
  } = useGetCharactersList()
  const [characterSelected, setCharacterSelected] = useState(null)

  const closeDetailsSection = () => {
    setCharacterSelected(null)
  }

  useEffect(() => {
    setCharacterSelected(null)
  }, [paginate.page])

  return (
    <div>
      <PageHeader title="Rick and Morty Characters" />

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
          paginate={paginate}
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
    </div>
  )
}
