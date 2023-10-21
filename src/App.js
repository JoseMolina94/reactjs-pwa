import React from "react";
import "./App.css";
import { useGetCharactersList } from "./hooks/useGetCharactersList"
import { CharactersList } from "./components/CharactersList"

function App() {
  const {
    charactersList,
    loadingCharactersList
  } = useGetCharactersList()

  return (
    <div className="App">
      <CharactersList
        characters={charactersList}
        loading={loadingCharactersList}
      />
    </div>
  );
}

export default App;
