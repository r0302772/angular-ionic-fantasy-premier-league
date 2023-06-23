/**
 * Represents the statistics of a player in a live event.
 */
export interface PlayerStats {
  /**
   * The number of minutes played by the player.
   */
  minutes: number;
  /**
   * The number of goals scored by the player.
   */
  goals_scored: number;
  /**
   * The number of assists made by the player.
   */
  assists: number;
  /**
   * The number of clean sheets achieved by the player.
   */
  clean_sheets: number;
  /**
   * The number of goals conceded by the player's team.
   */
  goals_conceded: number;
  /**
   * The number of own goals scored by the player.
   */
  own_goals: number;
  /**
   * The number of penalties saved by the player.
   */
  penalties_saved: number;
  /**
   * The number of penalties missed by the player.
   */
  penalties_missed: number;
  /**
   * The number of yellow cards received by the player.
   */
  yellow_cards: number;
  /**
   * The number of red cards received by the player.
   */
  red_cards: number;
  /**
   * The number of saves made by the player.
   */
  saves: number;
  /**
   * The bonus points earned by the player.
   */
  bonus: number;
  /**
   * The Bonus Points System (BPS) score of the player.
   */
  bps: number;
  /**
   * The influence rating of the player.
   */
  influence: string;
  /**
   * The creativity rating of the player.
   */
  creativity: string;
  /**
   * The threat rating of the player.
   */
  threat: string;
  /**
   * The ICT (Index of Creativity and Threat) index of the player.
   */
  ict_index: string;
  /**
   * The number of starts made by the player.
   */
  starts: number;
  /**
   * The expected goals value for the player.
   */
  expected_goals: string;
  /**
   * The expected assists value for the player.
   */
  expected_assists: string;
  /**
   * The expected goal involvements value for the player.
   */
  expected_goal_involvements: string;
  /**
   * The expected goals conceded value for the player's team.
   */
  expected_goals_conceded: string;
  /**
   * The total number of points earned by the player in the live event.
   */
  total_points: number;
  /**
   * Indicates whether the player is part of the Dream Team for the event.
   */
  in_dreamteam: boolean;
}
