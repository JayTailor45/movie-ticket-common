export enum OrderStatus {
  // when the order has been created, but the ticket it has been trying to create is not reserved
  CREATED = "CREATED",

  // when creating the order to ticket which has been reserved, or user cancel the order, or order expires before the payment
  CANCELLED = "CANCELLED",

  // when user reservers the order
  AWAITING_PAYMENT = "AWAITING_PAYMENT",

  // when user completes the order
  COMPLETED = "COMPLETED",
}
