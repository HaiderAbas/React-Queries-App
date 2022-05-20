import React from "react";

function Character({ character }) {
  return (
    <>
      <div className="card">
        <img src={character.image} />
        <div className="text-container">
          <h3>{character.name}</h3>
          <p>{character.status}</p>
        </div>
      </div>
    </>
  );
}

export default Character;
