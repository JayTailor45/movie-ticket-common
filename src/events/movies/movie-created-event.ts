import { Subjects } from "../subjects";

export interface MovieCreatedEvent {
  subject: Subjects.MOVIE_CREATED;
  data: {
    id: string;
    name: string;
    description: string;
    releaseDate: Date;
    genres: string[];
    languages: string[];
    director: string;
    actors: string[];
    version: number;
  };
}
