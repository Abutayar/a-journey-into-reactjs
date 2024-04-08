export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(({ square, player }) => (
                <li key={`${square.rowIndex}${square.colIndex}`}>
                    {player} selected {square.rowIndex},{square.colIndex}
                </li>
            ))}
        </ol>
    )
}