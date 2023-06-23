/**
 * Represents an event (gameweek) in the Fantasy Premier League.
 */
export interface Event {
  /**
   * The unique identifier of the event.
   */
  id: number;
  /**
   * The name or label of the event.
   */
  name: string;
  /**
   * The deadline time for making transfers and changes in the event.
   */
  deadline_time: string;
  /**
   * The average score achieved by each entry (player) in the event.
   */
  average_entry_score: number;
  /**
   * Indicates whether the event has finished or not.
   */
  finished: boolean;
  /**
   * Indicates whether the data for the event has been checked or verified.
   */
  data_checked: boolean;
  /**
   * The identifier of the entry (player) with the highest score in the event.
   */
  highest_scoring_entry: number;
  /**
   * The epoch time (in seconds) of the event's deadline time.
   */
  deadline_time_epoch: number;
  /**
   * The offset in minutes of the event's deadline time with respect to the main game deadline.
   */
  deadline_time_game_offset: number;
  /**
   * The highest score achieved in the event.
   */
  highest_score: number;
  /**
   * Indicates whether the event is a previous event (gameweek).
   */
  is_previous: boolean;
  /**
   * Indicates whether the event is the current event (gameweek).
   */
  is_current: boolean;
  /**
   * Indicates whether the event is the next upcoming event (gameweek).
   */
  is_next: boolean;
  /**
   * Indicates whether cup leagues have been created for the event.
   */
  cup_leagues_created: boolean;
  /**
   * Indicates whether head-to-head knockout (h2h_ko) matches have been created for the event.
   */
  h2h_ko_matches_created: boolean;
  /**
   * An array of ChipPlay objects representing the chips (special power-ups) played in the event.
   */
  chip_plays: ChipPlay[];
  /**
   * The identifier of the most selected player in the event.
   */
  most_selected: number;
  /**
   * The identifier of the player most transferred into teams in the event.
   */
  most_transferred_in: number;
  /**
   * The identifier of the top-performing player in the event.
   */
  top_element: number;
  /**
   * Information about the top-performing player in the event.
   */
  top_element_info: TopElementInfo;
  /**
   * The number of transfers made by all entries (players) in the event.
   */
  transfers_made: number;
  /**
   * The identifier of the most captained player in the event.
   */
  most_captained: number;
  /**
   * The identifier of the most vice-captained player in the event.
   */
  most_vice_captained: number;
}

/**
 * Represents a chip (special power-up) played in an event.
 */
export interface ChipPlay {
  /**
   * The name of the chip.
   */
  chip_name: string;
  /**
   * The number of times the chip has been played in the event.
   */
  num_played: number;
}

/**
 * Information about the top-performing player in an event.
 */
export interface TopElementInfo {
  /**
   * The unique identifier of the top-performing player.
   */
  id: number;
  /**
   * The number of points earned by the top-performing player in the event.
   */
  points: number;
}
