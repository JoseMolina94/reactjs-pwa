import React from "react"
import { getStatusStyle } from "../../utils/generals"
import { InfoLabel } from "../Commons/InfoLabel"
import { MdClose } from "react-icons/md"
import { StatisticsBars } from "../StatisticsBars"
import "./styles.css"

export const CharacterDetails = (props) => {
  const {
    character,
    closeFunc = () => {},
    visualizationStatistics
  } = props

  console.log('CHAR', character, visualizationStatistics)

  return (
    <div className="details-character-container">
      <div className="character-info-container" >
        <div className="details-section-header">
          <div
            className='close-icon'
            onClick={closeFunc}
          >
            <MdClose />
          </div>
          <h1>Character Details</h1>
        </div>


        <div className="info-grid">
          <div className="character-img-container">
            <img
              src={character?.image}
              alt={character.name}
              width="100%"
              height="auto"
            />
          </div>

          <div className="character-info">
            <h2>{character.name}</h2>
            <InfoLabel
              label="Gender"
              infoValue={character?.gender || "Unknow"}
            />
            <InfoLabel
              label="Species"
              infoValue={`${character.species} ${character?.type && `(${character.type})`}`}
            />
            <InfoLabel
              label="Origin"
              infoValue={character.origin.name}
            />
            <InfoLabel
              label="Status"
              infoValue={<strong style={getStatusStyle(character.status)}> {character.status} </strong>}
            />
          </div>
        </div>
      </div>

      <div className="character-info-container">
        <div className="details-section-header">
          <h1>Visualization</h1>
        </div>

        <StatisticsBars
          data={visualizationStatistics}
          value="visualization"
          category="name"
          categoryTitle="Character"
          valueTitle="Visualization"
          currentSelect={character}
        />

      </div>
    </div>
  )
}
