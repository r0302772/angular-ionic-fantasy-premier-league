/**
 * Represents the past history record for an element (player) in the Fantasy Premier League.
 */
export interface HistoryPast {
  /**
   * The name of the season.
   */
  season_name: string;
  /**
   * The code of the element.
   */
  element_code: number;
  /**
   * The starting cost of the element.
   */
  start_cost: number;
  /**
   * The ending cost of the element.
   */
  end_cost: number;
  /**
   * The total points earned by the element.
   */
  total_points: number;
  /**
   * The total minutes played by the element.
   */
  minutes: number;
  /**
   * The number of goals scored by the element.
   */
  goals_scored: number;
  /**
   * The number of assists made by the element.
   */
  assists: number;
  /**
   * The number of clean sheets kept by the element.
   */
  clean_sheets: number;
  /**
   * The number of goals conceded by the element.
   */
  goals_conceded: number;
  /**
   * The number of own goals scored by the element.
   */
  own_goals: number;
  /**
   * The number of penalties saved by the element.
   */
  penalties_saved: number;
  /**
   * The number of penalties missed by the element.
   */
  penalties_missed: number;
  /**
   * The number of yellow cards received by the element.
   */
  yellow_cards: number;
  /**
   * The number of red cards received by the element.
   */
  red_cards: number;
  /**
   * The number of saves made by the element.
   */
  saves: number;
  /**
   * The number of bonus points earned by the element.
   */
  bonus: number;
  /**
   * The number of bonus points system (BPS) earned by the element.
   */
  bps: number;
  /**
   * The influence rating of the element.
   */
  influence: string;
  /**
   * The creativity rating of the element.
   */
  creativity: string;
  /**
   * The threat rating of the element.
   */
  threat: string;
  /**
   * The ICT (Index of Creativity and Threat) index of the element.
   */
  ict_index: string;
  /**
   * The number of starts made by the element.
   */
  starts: number;
  /**
   * The expected number of goals for the element.
   */
  expected_goals: string;
  /**
   * The expected number of assists for the element.
   */
  expected_assists: string;
  /**
   * The expected number of goal involvements (goals + assists) for the element.
   */
  expected_goal_involvements: string;
  /**
   * The expected number of goals conceded by the element's team.
   */
  expected_goals_conceded: string;
}
