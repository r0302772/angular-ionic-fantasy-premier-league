/**
 * Represents the game settings for the Fantasy Premier League.
 */
export interface GameSettings {
  /**
   * The maximum number of private leagues a player can join.
   */
  league_join_private_max: number;
  /**
   * The maximum number of public leagues a player can join.
   */
  league_join_public_max: number;
  /**
   * The maximum size of a public classic league.
   */
  league_max_size_public_classic: number;
  /**
   * The maximum size of a public head-to-head (h2h) league.
   */
  league_max_size_public_h2h: number;
  /**
   * The maximum size of a private head-to-head (h2h) league.
   */
  league_max_size_private_h2h: number;
  /**
   * The maximum number of knockout rounds for a private head-to-head (h2h) league.
   */
  league_max_ko_rounds_private_h2h: number;
  /**
   * The prefix for public leagues.
   */
  league_prefix_public: string;
  /**
   * The number of points awarded for winning a head-to-head (h2h) league match.
   */
  league_points_h2h_win: number;
  /**
   * The number of points deducted for losing a head-to-head (h2h) league match.
   */
  league_points_h2h_lose: number;
  /**
   * The number of points awarded for drawing a head-to-head (h2h) league match.
   */
  league_points_h2h_draw: number;
  /**
   * Indicates whether the first round of a private head-to-head (h2h) league should be based on league standings instead of random pairing.
   */
  league_ko_first_instead_of_random: boolean;
  /**
   * The event ID when the cup competition starts, or `null` if not applicable.
   */
  cup_start_event_id: number | null;
  /**
   * The event ID when the cup competition stops, or `null` if not applicable.
   */
  cup_stop_event_id: number | null;
  /**
   * The qualifying method for the cup competition, or `null` if not applicable.
   */
  cup_qualifying_method: string | null;
  /**
   * The type of cup competition, or `null` if not applicable.
   */
  cup_type: string | null;
  /**
   * The number of players eligible for squad play.
   */
  squad_squadplay: number;
  /**
   * The maximum squad size allowed.
   */
  squad_squadsize: number;
  /**
   * The maximum number of players allowed from a single team in the squad.
   */
  squad_team_limit: number;
  /**
   * The total spend allowed for the squad.
   */
  squad_total_spend: number;
  /**
   * The currency multiplier used for displaying currency values in the user interface.
   */
  ui_currency_multiplier: number;
  /**
   * Indicates whether special shirts should be used in the user interface.
   */
  ui_use_special_shirts: boolean;
  /**
   * An array of team codes that are excluded from using special shirts in the user interface.
   */
  ui_special_shirt_exclusions: string[];
  /**
   * The number of days for calculating form statistics.
   */
  stats_form_days: number;
  /**
   * Indicates whether the vice-captain feature is enabled.
   */
  sys_vice_captain_enabled: boolean;
  /**
   * The maximum number of transfers allowed per gameweek.
   */
  transfers_cap: number;
  /**
   * The percentage sell-on fee for transferring players.
   */
  transfers_sell_on_fee: number;
  /**
   * An array of statistics used as tiebreakers for head-to-head (h2h) leagues.
   */
  league_h2h_tiebreak_stats: string[];
  /**
   * The timezone used for date and time calculations.
   */
  timezone: string;
}
