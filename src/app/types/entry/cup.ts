/**
 * Represents a cup in the Fantasy Premier League.
 */
export interface Cup {
  /**
   * An array of cup matches.
   */
  matches: any[];
  /**
   * The status of the cup.
   */
  status: Status;
  /**
   * The cup league number, or `null` if not applicable.
   */
  cup_league: number | null;
}

/**
 * Represents a status in a cup in the Fantasy Premier League.
 */
export interface Status{
  /**
   * The qualification event number for the cup, or `null` if not applicable.
   */
  qualification_event: number | null;
  /**
   * An array of qualification numbers for the cup, or `null` if not applicable.
   */
  qualification_numbers: number[] | null;
  /**
   * The qualification rank for the cup, or `null` if not applicable.
   */
  qualification_rank: number | null;
  /**
   * The qualification state for the cup, or `null` if not applicable.
   */
  qualification_state: string | null;
}
