import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/rickAndMortyApi";
import type { Character } from "../types/character";

export const useCharacters = (search: string) => {
  return useQuery<Character[], Error>({
    queryKey: ["characters", search],
    queryFn: () => fetchCharacters(search),
  });
};
