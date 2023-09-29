import { UserType } from "../../enums";
import { Subjects } from "../subjects";

export interface UserCreatedEvent {
  subject: Subjects.USER_CREATED;
  data: {
    id: string;
    email: string;
    password: string;
    city: string;
    username: string;
    gender: string;
    type: UserType;
    version: number;
  };
}
