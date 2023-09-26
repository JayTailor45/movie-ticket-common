import { Subjects } from "../subjects";

export interface MovieUpdatedEvent {
  subject: Subjects.MOVIE_UPDATED;
  data: {
    id: string;
    name: string;
    description: string;
    releaseDate: string;
    genres: string[];
    languages: string[];
    director: string;
    actors: string[];
    version: number;
  };
}
