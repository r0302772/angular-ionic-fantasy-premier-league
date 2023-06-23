/**
 * Represents the events of the current season in the Fantasy Premier League.
 */
export interface CurrentSeason {
  /**
   * The event id.
   */
  event: number;
  /**
   * The points earned in the event.
   */
  points: number;
  /**
   * The total points earned in the event.
   */
  total_points: number;
  /**
   * The rank in the event.
   */
  rank: number;
  /**
   * The rank used for sorting in the event.
   */
  rank_sort: number;
  /**
   * The overall rank in the event.
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
   * The points earned by players on the bench in the event.
   */
  points_on_bench: number;
}
