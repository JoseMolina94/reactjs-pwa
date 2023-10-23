import React from "react"

export const PageHeader = props => {
  const {
    title
  } = props

  return (
    <div
      style={{
        borderBottom: '1px solid lightgrey',
        padding: '0 20px',
      }}
    >
      <h1>
        {title}
      </h1>
    </div>
  )
}
