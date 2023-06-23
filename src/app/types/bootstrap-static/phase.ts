/**
 * Represents a phase in the Fantasy Premier League.
 */
export interface Phase {
  /**
   * The ID of the phase.
   */
  id: number;
  /**
   * The name of the phase.
   */
  name: string;
  /**
   * The starting event ID of the phase.
   */
  start_event: number;
  /**
   * The stopping event ID of the phase.
   */
  stop_event: number;
}
