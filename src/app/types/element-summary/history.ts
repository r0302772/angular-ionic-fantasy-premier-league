/**
 * Represents the history record of an element (player) in the Fantasy Premier League.
 */
export interface History {
  /**
   * The ID of the element.
   */
  element: number;
  /**
   * The ID of the fixture.
   */
  fixture: number;
  /**
   * The ID of the opponent team.
   */
  opponent_team: number;
  /**
   * The total points earned in the fixture.
   */
  total_points: number;
  /**
   * Indicates whether the element was playing at home.
   */
  was_home: boolean;
  /**
   * The kickoff time of the fixture.
   */
  kickoff_time: string;
  /**
   * The score of the home team in the fixture.
   */
  team_h_score: number;
  /**
   * The score of the away team in the fixture.
   */
  team_a_score: number;
  /**
   * The round number of the fixture.
   */
  round: number;
  /**
   * The number of minutes played in the fixture.
   */
  minutes: number;
  /**
   * The number of goals scored in the fixture.
   */
  goals_scored: number;
  /**
   * The number of assists made in the fixture.
   */
  assists: number;
  /**
   * The number of clean sheets kept in the fixture.
   */
  clean_sheets: number;
  /**
   * The number of goals conceded in the fixture.
   */
  goals_conceded: number;
  /**
   * The number of own goals scored in the fixture.
   */
  own_goals: number;
  /**
   * The number of penalties saved in the fixture.
   */
  penalties_saved: number;
  /**
   * The number of penalties missed in the fixture.
   */
  penalties_missed: number;
  /**
   * The number of yellow cards received in the fixture.
   */
  yellow_cards: number;
  /**
   * The number of red cards received in the fixture.
   */
  red_cards: number;
  /**
   * The number of saves made in the fixture.
   */
  saves: number;
  /**
   * The bonus points earned in the fixture.
   */
  bonus: number;
  /**
   * The bonus points system (BPS) earned in the fixture.
   */
  bps: number;
  /**
   * The influence rating of the element in the fixture.
   */
  influence: string;
  /**
   * The creativity rating of the element in the fixture.
   */
  creativity: string;
  /**
   * The threat rating of the element in the fixture.
   */
  threat: string;
  /**
   * The ICT (Influence, Creativity, Threat) index of the element in the fixture.
   */
  ict_index: string;
  /**
   * The number of starts in the fixture.
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
   * The expected number of goals conceded by the element's team in the fixture.
   */
  expected_goals_conceded: string;
  /**
   * The value of the element.
   */
  value: number;
  /**
   * The balance of transfers for the element.
   */
  transfers_balance: number;
  /**
   * The number of times the element has been selected.
   */
  selected: number;
  /**
   * The number of transfers in for the player during the event.
   */
  transfers_in: number;
  /**
   * The number of transfers out for the player during the event.
   */
  transfers_out: number;
}
