/**
 * Represents the result of the `dream-team/{event_id}/` API endpoint.
 */
export interface DreamTeamResult {
  /**
   * The top player in the Dream Team.
   */
  top_player: TopPlayer;
  /**
   * The list of players in the Dream Team.
   */
  team: Team[];
}

/**
 * Represents the top player in the Dream Team.
 */
export interface TopPlayer {
  /**
   * The ID of the top player.
   */
  id: number;
  /**
   * The points earned by the top player.
   */
  points: number;
}

/**
 * Represents a player in the Dream Team.
 */
export interface Team {
  /**
   * The element ID of the player.
   */
  element: number;
  /**
   * The points earned by the player.
   */
  points: number;
  /**
   * The position of the player in the Dream Team.
   */
  position: number;
}

