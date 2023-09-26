import { Subjects } from "../subjects";

export interface ShowUpdatedEvent {
  subject: Subjects.SHOW_UPDATED;
  data: {
    id: string;
    price: number;
    capacity: number;
    startTime: string;
    endTime: string;
    movie: string;
    franchise: string;
    version: number;
  };
}
