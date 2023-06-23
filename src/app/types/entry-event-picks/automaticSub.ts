/**
 * Represents an automatic substitution made for an entry in an event.
 */
export interface AutomaticSub {
  /**
   * The ID of the entry for which the substitution was made.
   */
  entry: number;
  /**
   * The ID of the player that came into the team.
   */
  element_in: number;
  /**
   * The ID of the player that went out of the team.
   */
  element_out: number;
  /**
   * The event number for which the substitution was made.
   */
  event: number;
}
