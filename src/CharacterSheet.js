import { useState, Component } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";

function CharacterSheet() {
  let initialAttributeValues = [];

  ATTRIBUTE_LIST.map(attribute =>
    initialAttributeValues.push({ name: attribute, value: 0 })
  );
  const [attributeValue, setAttributeValue] = useState(initialAttributeValues);

  const handleIncrementOnClick = attributeName => {
    const nameIndex = attributeValue
      .map(attribute => attribute.name)
      .indexOf(attributeName);
    attributeValue[nameIndex].value = attributeValue[nameIndex].value + 1;
    setAttributeValue(attributeValue);
  };

  const handleDecrementOnClick = attributeName => {
    const nameIndex = attributeValue
      .map(attribute => attribute.name)
      .indexOf(attributeName);
    attributeValue[nameIndex].value = attributeValue[nameIndex].value - 1;
    setAttributeValue(attributeValue);
  };

  return (
    <section className="character-sheet">
      <h2>Character {"# of chars"}</h2>
      <div className="skill-check-controls">
        <h3>Skill Check</h3>
        <form action=""></form>
      </div>
      <div className="character-controls">
        <div className="attributes">
          <h3>Attributes</h3>
          <ul className="attribute-list">
            {attributeValue.map(({ name, value }) => (
              <li key={name}>
                {name} (Modifier: {"#"}):
                <button onClick={() => handleDecrementOnClick(name)}>-</button>
                {value}
                <button onClick={() => handleIncrementOnClick(name)}>+</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="classes">
          <h3>Classes</h3>
          <ul className="class-list">
            {Object.getOwnPropertyNames(CLASS_LIST).map(value => (
              <li key={value}> {value}</li>
            ))}
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skill-list">
            {SKILL_LIST.map(({ name }) => (
              <li key={name}> {name} </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CharacterSheet;
