import React from "react"
import Card from "./Card"

export default function ResponseSection(props) {
  console.log(props.cardList)
  const listItems = props.cardList.map((item, index) => {
    return (
      <li key={index}>
      <Card 
        prompt={item.prompt}
        response={item.response}
      />
    </li>
    )
  });

  return (
      <section className="responseSection">
        <div className="responseTitle">
          <h1>Responses</h1>
          {props.cardList.length > 0 && 
          <button className="clear" onClick={props.handleDelete}>Clear</button>}
        </div>
        {props.cardList.length > 0 && <ol className="cardList">
          {listItems}
        </ol>}
        {props.cardList.length === 0 && <p className="emptyResponse">No saved responses</p>}
      </section>
  )
}