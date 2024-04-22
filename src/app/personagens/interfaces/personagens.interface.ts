import { HttpErrorResponse } from '@angular/common/http';

export interface IPersonagensFavoritosData {
  personagensFavoritos: IPersonagens[];
  nextPage : string;
  previosPage: string;
  countPage: number;
  error?: HttpErrorResponse | any;
}

export interface IPersonagensData {
  personagens: IPersonagens[];
  nextPage : string;
  previosPage: string;
  countPage: number;
  error?: HttpErrorResponse | any;
}

export interface IReturnAPI {
  info: Info;
  results: IPersonagens[] ;
}
export interface IPersonagens {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
  isFavorito: boolean;
}
interface Origin {
  name: string;
  url: string;
}
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
