import {PlayerStats} from './playerStats';
import {ElementStatsExplain} from './elementStatsExplain';

/**
 * Represents the result of the `event/{event_id}/live/` API endpoint.
 */
export interface EventLiveResult {
  /**
   * The list of elements (players) participating in the event with their statistics.
   */
  elements: Element[];
}

/**
 * Represents an element (player) participating in a live event.
 */
export interface Element {
  /**
   * The ID of the element (player).
   */
  id: number;
  /**
   * The statistics of the element (player) in the live event.
   */
  stats: PlayerStats;
  /**
   * The detailed explanation of the element's (player's) statistics in the live event.
   */
  explain: ElementStatsExplain[];
}
