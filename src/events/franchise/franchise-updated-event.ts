import { Subjects } from "../subjects";

export interface FranchiseUpdatedEvent {
  subject: Subjects.FRANCHISE_UPDATED;
  data: {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    version: number;
  };
}
