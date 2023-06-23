/**
 * Represents the explanation of statistics for a player in a specific fixture.
 */
export interface ElementStatsExplain {
  /**
   * The fixture associated with the statistics explanation.
   */
  fixture: number;
  /**
   * The statistics and their corresponding values for the player in the fixture.
   */
  stats: ElementStat[];
}

/**
 * Represents a specific statistic and its value for a player.
 */
export interface ElementStat {
  /**
   * The identifier of the statistic.
   */
  identifier: string;
  /**
   * The number of points earned by the player for the statistic.
   */
  points: number;
  /**
   * The value of the statistic for the player.
   */
  value: number;
}
