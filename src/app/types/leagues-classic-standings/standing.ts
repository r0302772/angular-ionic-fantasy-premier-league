/**
 * Represents a standing in the Fantasy Premier League.
 */
export interface Standing {
  /**
   * The unique identifier of the standing.
   */
  id: number;
  /**
   * The total points earned by the player in the event.
   */
  event_total: number;
  /**
   * The name of the player.
   */
  player_name: string;
  /**
   * The current rank of the player.
   */
  rank: number;
  /**
   * The rank of the player in the previous event.
   */
  last_rank: number;
  /**
   * A value used for sorting ranks.
   */
  rank_sort: number;
  /**
   * The total points earned by the player overall.
   */
  total: number;
  /**
   * The unique identifier of the entry.
   */
  entry: number;
  /**
   * The name of the entry.
   */
  entry_name: string;
}

