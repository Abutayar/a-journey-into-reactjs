import { useState } from "react"

export default function Player({ initialName, symbol, onNameChange, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function toggleEditing() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    function bindPlayerName({ target }) {
        setPlayerName(target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {
                    isEditing
                        ? <input type="text" required value={playerName} onChange={bindPlayerName} />
                        : <span className="player-name"> {playerName} </span>
                }
                <span className="player-symbol"> {symbol}</span>
            </span>
            <button
                onClick={toggleEditing}
            >
                {isEditing ? 'save' : 'edit'}
            </button>
        </li>
    )
}