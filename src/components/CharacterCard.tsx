import type{ Character } from "../types/character";
import { Link } from "react-router-dom";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => (
  <Link to={`/character/${character.id}`}>
    <div style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 10,
      width: 200,
      marginBottom: 20,
      transition: "transform 0.2s",
      cursor: "pointer"
    }}
      onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={character.image} alt={character.name} style={{ width: "100%", borderRadius: 8 }} />
      <h3 style={{ color:"#8f0909ff",fontWeight: "bold", margin: "10px 0 5px" }}>{character.name}</h3>
      <p style={{ color: "#555", margin: 0 }}>{character.species}</p>
    </div>
  </Link>
);
