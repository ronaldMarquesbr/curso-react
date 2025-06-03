import { useState } from "react"

const ConditionalRender = () => {

  const [conditionalRender, setConditionalRender] = useState(false);
  const [nameList, setNameList] = useState([]);

  const handleShowWarning = () => {
      setConditionalRender(prevConditionalRender => !prevConditionalRender);
  }


  const handleShowNameList = () => {
    setNameList(prev => [...prev, "Ronald"]);
  }

  return (
    <>
        <h2>ConditionalRender</h2>
        {conditionalRender ? <p>Isso eh verdadeiro</p> : <p>Isso eh falso</p>}
        <button onClick={handleShowWarning}>Alterar veracidade</button>

        <h2>IF/ELSE</h2>
        {
          nameList.length > 0 ? (
            <ul>
              {nameList.map((name, idx) => <li key={idx}>{name}</li>)}
            </ul>
          ) : (
            <p>Nao ha nomes!</p>
          )
        }
        <button onClick={handleShowNameList}>Mostrar lista de nomes</button>
    </>
  )
}

export default ConditionalRender