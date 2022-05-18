import React from "react"

export default function Card(props) {
  return (
      <div className="card">
        <h3>Prompt:</h3>
        <p className="card--prompt">{props.prompt}</p>
        <h3>Response:</h3>
        <p className="card--response">{props.response}</p>
      </div>
  )
}