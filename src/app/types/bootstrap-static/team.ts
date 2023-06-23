/**
 * Represents a team in the Fantasy Premier League.
 */
export interface Team {
  /**
   * The code of the team.
   */
  code: number;
  /**
   * The number of draws by the team.
   */
  draw: number;
  /**
   * The recent form of the team.
   */
  form: null | string;
  /**
   * The ID of the team.
   */
  id: number;
  /**
   * The number of losses by the team.
   */
  loss: number;
  /**
   * The name of the team.
   */
  name: string;
  /**
   * The number of matches played by the team.
   */
  played: number;
  /**
   * The total points earned by the team.
   */
  points: number;
  /**
   * The position of the team.
   */
  position: number;
  /**
   * The short name of the team.
   */
  short_name: string;
  /**
   * The strength of the team.
   */
  strength: number;
  /**
   * The division of the team.
   */
  team_division: null | string;
  /**
   * Indicates if the team is unavailable.
   */
  unavailable: boolean;
  /**
   * The number of wins by the team.
   */
  win: number;
  /**
   * The overall strength of the team at home.
   */
  strength_overall_home: number;
  /**
   * The overall strength of the team away.
   */
  strength_overall_away: number;
  /**
   * The attacking strength of the team at home.
   */
  strength_attack_home: number;
  /**
   * The attacking strength of the team away.
   */
  strength_attack_away: number;
  /**
   * The defensive strength of the team at home.
   */
  strength_defence_home: number;
  /**
   * The defensive strength of the team away.
   */
  strength_defence_away: number;
  /**
   * The pulse ID of the team.
   */
  pulse_id: number;

  //region Extra properties

  /**
   * The number of goals scored by the team.
   */
  goals_scored: number;
  /**
   * The number of goals conceded by the team.
   */
  goals_conceded: number;
  /**
   * The goal difference of the team.
   */
  goal_difference: number;

  //endregion
}
