import React from "react"

export const InfoLabel = props => {
  const {
    label,
    infoValue
  } = props

  return (
    <p>
      <strong>{label}:</strong> {infoValue}
    </p>
  )
}
