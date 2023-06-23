import {Standing} from './standing';
import {League} from './league';

/**
 * Represents the result of the `leagues-classic/{league_id}/standings` API endpoint.
 */
export interface LeagueClassicStandingsResult {
  /**
   * Information about new entries in the league.
   */
  new_entries: NewEntries;
  /**
   * The last updated date for the standings data.
   */
  last_updated_data: string;
  /**
   * The details of the league.
   */
  league: League;
  /**
   * The standings of the league.
   */
  standings: Standings;
}

/**
 * Represents information about new entries in a league.
 */
export interface NewEntries {
  /**
   * Indicates whether there are more new entries available.
   */
  has_next: boolean;
  /**
   * The page number of the new entries.
   */
  page: number;
  /**
   * The list of new entries.
   */
  results: Standing[];
}

/**
 * Represents the standings of a league.
 */
export interface Standings {
  /**
   * Indicates whether there are more standings available.
   */
  has_next: boolean;
  /**
   * The page number of the standings.
   */
  page: number;
  /**
   * The list of standings.
   */
  results: Standing[];
}

