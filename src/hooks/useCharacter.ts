import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../api/rickAndMortyApi";
import type { Character } from "../types/character";

export const useCharacter = (id: number) => {
  return useQuery<Character, Error>({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  });
};
