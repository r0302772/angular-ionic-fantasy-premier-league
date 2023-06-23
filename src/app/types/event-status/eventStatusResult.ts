/**
 * Represents the result of the `event-status/` API endpoint.
 */
export interface EventStatusResult {
  /**
   * The status's of the current event.
   */
  status: EventStatus[];
  /**
   * Indicates whether the event is updated or not.
   */
  leagues: string;
}

/**
 * Represents the status of an event.
 */
export interface EventStatus {
  /**
   * Indicates whether bonus points have been added for the event.
   */
  bonus_added: boolean;
  /**
   * The date of the event.
   */
  date: string;
  /**
   * The event id.
   */
  event: number;
  /**
   * The points earned for the event.
   */
  points: string;
}
