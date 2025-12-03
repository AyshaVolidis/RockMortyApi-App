import { useState,useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { SearchInput } from "../components/SearchInput";
import { CharacterCard } from "../components/CharacterCard";

export const CharactersPage = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const { data, isLoading, isFetching, error } = useCharacters(debouncedSearch);

   useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400); 

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  return (
    <div style={{ maxWidth: 1200, padding: 20, textAlign: "center" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Rick & Morty Characters
      </h1>

      <SearchInput value={search} onChange={setSearch} />

      {error && <ErrorMessage message="Failed to load characters. Try again!" />}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {isFetching && (
            <p style={{ color: "#666", marginBottom: 10, textAlign: "center" }}>
               Updating results...
            </p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              justifyContent: "center",
            }}
          >
            {data?.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
