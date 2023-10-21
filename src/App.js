import React from 'react';
import './App.css';
import { useGetCharactersList } from "./hooks/useGetCharactersList";

function App() {
  const {
    charactersList
  } = useGetCharactersList()

  console.log(charactersList)
  return (
    <div className="App">

    </div>
  );
}

export default App;
