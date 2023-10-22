import React from "react"
import "./style.css"
import { MdMale, MdFemale } from "react-icons/md"

export const CharacterCard = (props) => {
  const {
    image,
    name,
    species,
    type,
    gender,
    status
  } = props

  const getStatusStyle = () => {
    switch (status) {
      case "Alive":
        return {
          color: "green"
        }
      case "Dead":
        return {
          color: "red"
        }

      default:
        return {
          color: "white"
        }
    }
  }

  return (
    <div
      className="card"
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
          Status: <strong style={getStatusStyle()}> {status} </strong>
        </p>
      </div>
    </div>
  )
}
