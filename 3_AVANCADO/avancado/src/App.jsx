import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {

  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    setNumber(number + 1)
  }

  return (
    <>
    <h2>{number}</h2>
     <button onClick={handleNumber}>
      teste
     </button>
     <ListRender />
     <ConditionalRender />
     <ShowUserName name={number} />
    </>
  )
}

export default App
