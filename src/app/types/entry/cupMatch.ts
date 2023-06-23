/**
 * Represents a cup match in the Fantasy Premier League.
 */
export interface CupMatch {
  /**
   * The unique identifier of the cup match.
   */
  id: number;
  /**
   * The entry ID of the first manager in the cup match.
   */
  entry_1_entry: number;
  /**
   * The name of the first manager in the cup match.
   */
  entry_1_name: string;
  /**
   * The player name of the first manager in the cup match.
   */
  entry_1_player_name: string;
  /**
   * The total points earned by the first manager in the cup match.
   */
  entry_1_points: number;
  /**
   * The number of wins of the first manager in the cup match.
   */
  entry_1_win: number;
  /**
   * The number of draws of the first manager in the cup match.
   */
  entry_1_draw: number;
  /**
   * The number of losses of the first manager in the cup match.
   */
  entry_1_loss: number;
  /**
   * The total number of matches played by the first manager in the cup match.
   */
  entry_1_total: number;
  /**
   * The entry ID of the second manager in the cup match.
   */
  entry_2_entry: number;
  /**
   * The name of the second manager in the cup match.
   */
  entry_2_name: string;
  /**
   * The player name of the second manager in the cup match.
   */
  entry_2_player_name: string;
  /**
   * The total points earned by the second manager in the cup match.
   */
  entry_2_points: number;
  /**
   * The number of wins of the second manager in the cup match.
   */
  entry_2_win: number;
  /**
   * The number of draws of the second manager in the cup match.
   */
  entry_2_draw: number;
  /**
   * The number of losses of the second manager in the cup match.
   */
  entry_2_loss: number;
  /**
   * The total number of matches played by the second manager in the cup match.
   */
  entry_2_total: number;
  /**
   * Indicates if the cup match is a knockout match.
   */
  is_knockout: boolean;
  /**
   * The ID of the league associated with the cup match.
   */
  league: number;
  /**
   * The entry ID of the winner of the cup match.
   */
  winner: number;
  /**
   * The seed value (if applicable) for the cup match.
   */
  seed_value: any;
  /**
   * The event number of the cup match.
   */
  event: number;
  /**
   * The tiebreak information (if applicable) for the cup match.
   */
  tiebreak: any;
  /**
   * Indicates if the cup match is a bye match.
   */
  is_bye: boolean;
  /**
   * The name of the knockout round for the cup match.
   */
  knockout_name: string;
}
