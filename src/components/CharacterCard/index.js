import React from "react"
import { MdMale, MdFemale } from "react-icons/md"
import { getStatusStyle } from "../../utils/generals";
import "./style.css"

export const CharacterCard = (props) => {
  const {
    image,
    name,
    species,
    type,
    gender,
    status,
    characterSelectFunc = () => {}
  } = props

  return (
    <div
      className="card"
      onClick={characterSelectFunc}
    >
      <div
        className="character-img"
        style={{
          backgroundImage: `url("${image}")`
        }}
      />

      <div className={`character-gender ${gender && gender.toLowerCase()}`}>
        {
          gender === "Male" && <MdMale />
        }
        {
          gender === "Female" && <MdFemale />
        }
      </div>

      <div className="character-info-text" >
        <h1 className="character-name" >
          {name}
        </h1>
        <p className="character-race-and-type">
          {species} { type && `(${type})` }
        </p>
        <p className="character-status">
          Status: <strong style={getStatusStyle(status)}> {status} </strong>
        </p>
      </div>
    </div>
  )
}
