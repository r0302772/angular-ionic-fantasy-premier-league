import {CurrentSeason} from './currentSeason';
import {PastSeason} from './pastSeason';
import {Chip} from './chip';

/**
 * Represents the result of the `entry/{manager_id}/history/` API endpoint.
 */
export interface EntryManagerHistoryResult {
  /**
   * The current season data for the entry (manager).
   */
  current: CurrentSeason[];
  /**
   * The past season data for the entry (manager).
   */
  past: PastSeason[];
  /**
   * The list of chips used by the entry (manager).
   */
  chips: Chip[];
}

