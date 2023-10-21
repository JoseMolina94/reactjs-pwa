import React, { useState } from "react";
import "./style.css"

export const CharacterCard = (props) => {
  const {
    image,
    name
  } = props
  const [onHover, setOnHover] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div
        className="character-img"
        style={{
          backgroundImage: `url("${image}")`
        }}
      />

      {
        onHover &&
        <div className="character-name" >
          {name}
        </div>
      }
    </div>
  )
}
