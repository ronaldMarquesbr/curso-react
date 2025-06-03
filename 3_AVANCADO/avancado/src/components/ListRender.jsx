import { useState } from "react"

const ListRender = () => {

  const [list, setList] = useState(["Maria", "Joao", "Teste da Silva"]);

  const removeLastItem = () => {

    setList(prevList => 
      prevList.filter((_, index) => index != prevList.length - 1)
    )
  }

  return (
    <div>
        <ul>
            {list.map((item, key) => (<li key={key}>{item}</li>))}
        </ul>
        <button onClick={removeLastItem}>Remove item</button>
    </div>
  )
}

export default ListRender