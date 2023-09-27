import { Subjects } from "../subjects";

export interface FranchiseCreatedEvent {
  subject: Subjects.FRANCHISE_CREATED;
  data: {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    version: number;
    user: string;
  };
}
