import { Rodzaj } from "./rodzaj.interface";

export interface KlawiaturaRequestDTO {
  model: string | null;
  rodzaj: Rodzaj | null;
}
