import React from "react"
import PromptSection from "./PromptSection"
import ResponseSection from "./ResponseSection"
import ExampleSection from "./ExampleSection"

export default function Main() {
  const [promptData, setPromptData] = React.useState(
    {
        prompt: "",
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
  )
  const [result, setResult] = React.useState();
  const [cardList, setCardList] = React.useState(() => {
    const saved = localStorage.getItem("cardList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setPromptData(prevPromptData => {
        return {
            ...prevPromptData,
            [name]: value
        }
    })
  }

  async function handleSubmit(event) {
    addCard();
    setPromptData(prevPromptData => ({...prevPromptData, prompt: ""}));
  }

  React.useEffect(() => {
    localStorage.setItem('cardList', JSON.stringify(cardList));
  }, [cardList])

  function handleDelete(event) {
    localStorage.clear();
    setCardList(JSON.parse(localStorage.getItem("cardList")) || []);
  }

  async function addCard() {
      const data = await handleFetch();
      setResult(data.choices[0].text.trim());
      const newResult = data.choices[0].text.trim();
      const newCard = {
        prompt: promptData.prompt,
        response: newResult
      }
      setCardList(prevCardList => [newCard, ...prevCardList])
  }

  async function handleFetch() {
    const res = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAIKEY}`,
      },
      body: JSON.stringify(promptData),
    });
    const data = await res.json();
    return data;
  }

  return (
      <main>
          <ExampleSection />
          <PromptSection
            promptData={promptData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ResponseSection
            promptData={promptData}
            result={result}
            cardList={cardList}
            handleDelete={handleDelete}
          />
      </main>
  )
}