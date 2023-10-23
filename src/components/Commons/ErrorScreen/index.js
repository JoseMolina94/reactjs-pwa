import React from "react"
import { MdErrorOutline } from "react-icons/md"
import "./styles.css"

export const ErrorScreen = (props) => {
  const {
    error
  } = props

  return (
    <div className="error-container">

      <div className="error-icon">
        <MdErrorOutline />
      </div>

      <p className="error-text">
        {error}
      </p>
    </div>
  )
}
