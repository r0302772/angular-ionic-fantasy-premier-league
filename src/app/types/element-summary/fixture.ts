/**
 * Represents an upcoming fixture for an element (player) in the Fantasy Premier League.
 */
export interface Fixture {
  /**
   * The ID of the fixture.
   */
  id: number;
  /**
   * The code of the fixture.
   */
  code: number;
  /**
   * The home team ID.
   */
  team_h: number;
  /**
   * The score of the home team. It can be null if the fixture is not finished.
   */
  team_h_score: number | null;
  /**
   * The away team ID.
   */
  team_a: number;
  /**
   * The score of the away team. It can be null if the fixture is not finished.
   */
  team_a_score: number | null;
  /**
   * The event (gameweek) associated with the fixture.
   */
  event: number;
  /**
   * Indicates if the fixture is finished.
   */
  finished: boolean;
  /**
   * The minutes played in the fixture.
   */
  minutes: number;
  /**
   * Indicates if the start time is provisional.
   */
  provisional_start_time: boolean;
  /**
   * The kickoff time of the fixture.
   */
  kickoff_time: string;
  /**
   * The name of the event (gameweek) associated with the fixture.
   */
  event_name: string;
  /**
   * Indicates if the element (player) is playing at home.
   */
  is_home: boolean;
  /**
   * The difficulty rating of the fixture.
   */
  difficulty: number;
}
