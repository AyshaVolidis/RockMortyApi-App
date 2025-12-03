import type { Character } from "../types/character";
import type { Episode } from "../types/episode";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name:string=""):Promise<Character[]> => {
  const response = await fetch(`${BASE_URL}/character/?name=${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
  const data = await response.json();
  return data.results as Character[];
}

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) throw new Error("Error fetching character");
  return res.json() as Promise<Character>;
};

export const fetchEpisodeByUrl = async (url: string): Promise<Episode> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error fetching episode");
  return res.json() as Promise<Episode>;
};