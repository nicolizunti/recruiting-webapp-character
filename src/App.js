import { useState } from "react";
import "./App.css";
import CharacterSheet from "./CharacterSheet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Character Sheet</h1>
      </header>
      <section className="character-menu">
        <div>
          <button>Add New Character</button>
          <button>Reset All Charactert</button>
          <button>Save All Charactert</button>
        </div>
      </section>
      <section className="skill-check-display">
        <h2>Skill Check Results</h2>
        <h3>Character 1</h3>
        <p>
          Skill: {"skill name"}: {"# skill Point"}
        </p>
        <p>You Rolled: {"dice #"}</p>
        <p>The DC was: {"DC #"}</p>
        <p>Result: {"result"}</p>
      </section>
      <CharacterSheet />
    </div>
  );
}

export default App;
