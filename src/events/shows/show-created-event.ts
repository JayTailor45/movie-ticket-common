import { Subjects } from "../subjects";

export interface ShowCreatedEvent {
  subject: Subjects.SHOW_CREATED;
  data: {
    id: string;
    price: number;
    capacity: number;
    startTime: Date;
    endTime: Date;
    movie: string;
    franchise: string;
    version: number;
  };
}
