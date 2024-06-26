import { Rodzaj } from "./rodzaj.interface";

export interface KlawiaturaResponseDTO {
  id: number;
  model: string;
  rodzaj: Rodzaj;
}
