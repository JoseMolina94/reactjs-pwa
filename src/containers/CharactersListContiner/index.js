import React, {useEffect, useState} from "react"
import {CharactersList} from "../../components/CharactersList"
import {useGetCharactersList} from "../../hooks/useGetCharactersList"
import { CharacterDetails } from "../../components/CharacterDetails"
import { PageHeader } from "../../components/Commons/PageHeader"
import { useScreenDimensions } from "../../hooks/useScreenDimensions"
import { ErrorScreen } from "../../components/Commons/ErrorScreen"

export const CharactersListContainer = () => {
  const {
    charactersList,
    visualizationStatistics,
    loadingCharactersList,
    paginate,
    error
  } = useGetCharactersList()
  const [characterSelected, setCharacterSelected] = useState(null)
  const { width } = useScreenDimensions()

  const closeDetailsSection = () => {
    setCharacterSelected(null)
  }

  useEffect(() => {
    setCharacterSelected(null)
  }, [paginate.page])

  return (
    <div>
      <PageHeader title="Rick and Morty Characters" />

      {
        error
          ? <ErrorScreen error={error.message} />
          : width >= 1000
            ? <div
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
            : <div
              style={{
                display: 'grid',
                gridTemplateRows: !characterSelected ? '1fr' : 'auto 1fr'
              }}
            >
              {
                characterSelected &&
                <CharacterDetails
                  character={characterSelected}
                  closeFunc={closeDetailsSection}
                  visualizationStatistics={visualizationStatistics}
                />
              }

              <CharactersList
                characters={charactersList}
                loading={loadingCharactersList}
                setCharacterSelected={setCharacterSelected}
                paginate={paginate}
              />
            </div>
      }

    </div>
  )
}
