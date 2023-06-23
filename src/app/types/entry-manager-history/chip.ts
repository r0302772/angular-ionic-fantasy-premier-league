/**
 * Represents a chip in the Fantasy Premier League.
 */
export interface Chip {
  /**
   * The name of the chip.
   */
  name: string;
  /**
   * The time when the chip was used.
   */
  time: string;
  /**
   * The event when the chip was used.
   */
  event: number;
}
