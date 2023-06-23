/**
 * Represents a league in the Fantasy Premier League.
 */
export interface League {
  /**
   * The unique identifier of the league.
   */
  id: number;
  /**
   * The name of the league.
   */
  name: string;
  /**
   * The date and time when the league was created.
   */
  created: string;
  /**
   * Indicates whether the league is closed or not.
   */
  closed: boolean;
  /**
   * The maximum number of entries allowed in the league. Can be null if there is no limit.
   */
  max_entries: null | number;
  /**
   * The type of the league.
   */
  league_type: string;
  /**
   * The scoring system used in the league.
   */
  scoring: string;
  /**
   * The identifier of the league's admin entry.
   */
  admin_entry: number;
  /**
   * The event number when the league starts.
   */
  start_event: number;
  /**
   * The privacy code of the league.
   */
  code_privacy: string;
  /**
   * Indicates whether the league has a cup or not.
   */
  has_cup: boolean;
  /**
   * The identifier of the league's cup.
   */
  cup_league: number;
  /**
   * The rank of the entry in the league. Can be null if not applicable.
   */
  rank: null | number;
}

