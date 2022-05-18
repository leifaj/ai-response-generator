import React from "react"

export default function PromptSection(props) {
  return (
    <section className="promptSection">
      <h1>Enter prompt</h1>
      <textarea
        name="prompt"
        value={props.promptData.prompt}
        placeholder="write a haiku about skateboarding"
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit} disabled={props.promptData.prompt === ""} className="submit">Submit</button>
    </section>
  )
}