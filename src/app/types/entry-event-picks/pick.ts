/**
 * Represents a player pick for an event.
 */
export interface Pick {
  /**
   * The ID of the player.
   */
  element: number;
  /**
   * The position of the player in the team.
   */
  position: number;
  /**
   * The multiplier applied to the player's points.
   */
  multiplier: number;
  /**
   * Indicates whether the player is the captain.
   */
  is_captain: boolean;
  /**
   * Indicates whether the player is the vice-captain.
   */
  is_vice_captain: boolean;
}
