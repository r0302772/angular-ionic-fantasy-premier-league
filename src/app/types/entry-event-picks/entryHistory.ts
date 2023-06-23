/**
 * Represents the history of an entry up to a specific event.
 */
export interface EntryHistory {
  /**
   * The event number.
   */
  event: number;
  /**
   * The points scored in the event.
   */
  points: number;
  /**
   * The total points scored up to the event.
   */
  total_points: number;
  /**
   * The rank in the event.
   */
  rank: number;
  /**
   * The rank with tied positions sorted.
   */
  rank_sort: number;
  /**
   * The overall rank up to the event.
   */
  overall_rank: number;
  /**
   * The amount of money in the bank.
   */
  bank: number;
  /**
   * The total value of the team.
   */
  value: number;
  /**
   * The number of transfers made for the event.
   */
  event_transfers: number;
  /**
   * The total cost of transfers made for the event.
   */
  event_transfers_cost: number;
  /**
   * The points scored by players on the bench.
   */
  points_on_bench: number;
}
