import { useParams, useNavigate } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { useEffect, useState } from "react";
import { fetchEpisodeByUrl } from "../api/rickAndMortyApi";
import type { Episode } from "../types/episode";
import { Spinner } from "../components/Spinner";

export const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: character, isLoading } = useCharacter(Number(id));
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    if (character) {
      Promise.all(character.episode.map(fetchEpisodeByUrl)).then(setEpisodes);
    }
  }, [character]);

  if (isLoading) return <Spinner />;

  return (
    <div style={{ maxWidth: "full", margin: "0 auto", padding: 20 }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 16px",
          marginBottom: 20,
          border: "none",
          borderRadius: 10,
          backgroundColor: "#8f0909ff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
      <div
        style={{
          maxWidth: "full",
          margin: "0 auto",
          padding: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 600,
              height: 600,
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={character?.image}
              alt={character?.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ maxWidth: 1000 }}>
            <h1 style={{ marginBottom: 10 }}>{character?.name}</h1>
            <p>
              <strong>Status:</strong> {character?.status}
            </p>
            <p>
              <strong>Species:</strong> {character?.species}
            </p>
            <p>
              <strong>Gender:</strong> {character?.gender}
            </p>
            <p>
              <strong>Origin:</strong> {character?.location.name}
            </p>

            <h2 style={{ marginTop: 30 }}>Episodes</h2>
            <ul style={{ paddingLeft: 20 }}>
              {episodes.map((ep) => (
                <li key={ep.id}>
                  {ep.episode} – {ep.name} -
                  <a href={ep.url} target="_blank">
                    {ep.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
