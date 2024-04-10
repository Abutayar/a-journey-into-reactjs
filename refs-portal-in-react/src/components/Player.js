import { useState, useRef } from "react";

export default function Player() {
  const playerInput = useRef();
  const [playerName, setPlayerName] = useState();

  function handleBtnClick() {
    setPlayerName(playerInput.current.value);
    playerInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      {/* Example of inline style */}
      <div style={{display: 'flex',justifyContent:'center'}}>
        <input ref={playerInput} type="text" />
        <button onClick={handleBtnClick}>Set Name</button>
      </div>
    </section>
  );
}
