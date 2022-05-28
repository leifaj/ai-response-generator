import React from "react"

export default function ExampleSection() {
  return (
      <section className="exampleSection">
        <div className="exampleTitle">
          <h1>What should I ask?</h1>
          <div className="tooltip"><p>Input some text, and the AI model will generate a response. It'll try to match whatever context or pattern it's given! You might get a slightly different completion every time you call it, even with the same prompt.</p></div>
        </div>
        <img className="examples" alt="example prompts" src="https://readme-typing-svg.herokuapp.com?size=12&duration=6000&color=000000&center=false&vCenter=true&width=400&height=13&lines=write+a+love+letter+to+Spiderman;create+a+list+of+5+girl+names+that+start+with+L;complete+the+saying:+better+late+than;give+me+a+random+color;write+a+poem+about+bananas;create+a+list+of+3+romance+animes;create+5+questions+to+ask+a+chef"/>
      </section>
  )
}