import { OrderStatus } from "../../enums";
import { Subjects } from "../subjects";

export interface OrderCreatedEvent {
  subject: Subjects.ORDER_CREATED;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    show: {
      id: string;
      price: number;
    };
  };
}
