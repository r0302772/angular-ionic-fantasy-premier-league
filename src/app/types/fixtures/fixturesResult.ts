/**
 * Represents the result of the `fixtures/` API endpoint.
 */
export interface FixturesResult {
  /**
   * The fixture code.
   */
  code: number;
  /**
   * The event ID associated with the fixture.
   */
  event: number;
  /**
   * Indicates if the fixture has finished.
   */
  finished: boolean;
  /**
   * Indicates if the fixture's status is provisional.
   */
  finished_provisional: boolean;
  /**
   * The ID of the fixture.
   */
  id: number;
  /**
   * The kickoff time of the fixture.
   */
  kickoff_time: string;
  /**
   * The number of minutes played in the fixture.
   */
  minutes: number;
  /**
   * Indicates if the fixture's start time is provisional.
   */
  provisional_start_time: boolean;
  /**
   * Indicates if the fixture has started.
   */
  started: boolean;
  /**
   * The ID of the home team.
   */
  team_h: number;
  /**
   * The score of the home team.
   */
  team_h_score: number;
  /**
   * The ID of the away team.
   */
  team_a: number;
  /**
   * The score of the away team.
   */
  team_a_score: number;
  /**
   * The statistics associated with the fixture.
   */
  stats: Stat[];
  /**
   * The difficulty rating for the home team.
   */
  team_h_difficulty: number;
  /**
   * The difficulty rating for the away team.
   */
  team_a_difficulty: number;
  /**
   * The pulse ID of the fixture.
   */
  pulse_id: number;
}

/**
 * Represents a statistical data item.
 */
export interface Stat {
  /**
   * The identifier of the statistic.
   * This identifier corresponds to the name of the statistic in the ElementStat.
   */
  identifier: string;
  /**
   * The statistical data for the away team.
   */
  a: StatData[];
  /**
   * The statistical data for the home team.
   */
  h: StatData[];
}

/**
 * Represents a statistical data item for a team or player.
 */
export interface StatData {
  /**
   * The value of the statistic.
   */
  value?: number;
  /**
   * The ID of the element (player) associated with the statistic.
   */
  element?: number;
}
