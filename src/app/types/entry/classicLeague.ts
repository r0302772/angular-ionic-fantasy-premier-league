/**
 * Represents a classic league in the Fantasy Premier League.
 */
export interface ClassicLeague {
  /**
   * The ID of the classic league.
   */
  id: number;
  /**
   * The name of the classic league.
   */
  name: string;
  /**
   * The short name of the classic league, or `null` if not available.
   */
  short_name: string | null;
  /**
   * The creation date of the classic league as a string.
   */
  created: string;
  /**
   * Indicates whether the classic league is closed or not.
   */
  closed: boolean;
  /**
   * The rank of the player in the classic league, or `null` if not available.
   */
  rank: number | null;
  /**
   * The maximum number of entries allowed in the classic league, or `null` if not limited.
   */
  max_entries: number | null;
  /**
   * The type of the classic league.
   */
  league_type: string;
  /**
   * The scoring system used in the classic league.
   */
  scoring: string;
  /**
   * The ID of the admin entry for the classic league, or `null` if not available.
   */
  admin_entry: number | null;
  /**
   * The event number at which the classic league starts.
   */
  start_event: number;
  /**
   * Indicates whether entry is allowed to leave the classic league or not.
   */
  entry_can_leave: boolean;
  /**
   * Indicates whether entry is allowed to administer the classic league or not.
   */
  entry_can_admin: boolean;
  /**
   * Indicates whether entry is allowed to invite others to the classic league or not.
   */
  entry_can_invite: boolean;
  /**
   * Indicates whether the classic league has a cup or not.
   */
  has_cup: boolean;
  /**
   * The cup league number for the classic league, or `null` if not applicable.
   */
  cup_league: number | null;
  /**
   * Indicates whether the entry is qualified for the cup or not, or `null` if not applicable.
   */
  cup_qualified: boolean | null;
  /**
   * The rank of the entry in the classic league.
   */
  entry_rank: number;
  /**
   * The last rank of the entry in the classic league.
   */
  entry_last_rank: number;
}

