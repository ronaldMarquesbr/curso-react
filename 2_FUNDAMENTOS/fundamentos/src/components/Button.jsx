import React from 'react'

const handleButton = () => {
    console.log("Click!!!");
};

function Button() {
  return (
    <button onClick={handleButton}>Clique aqui</button>
  )
}

export default Button