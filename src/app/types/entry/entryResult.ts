import {Leagues} from './leagues';

/**
 * Represents the result of the `entry/{manager_id}/` API endpoint.
 */
export interface EntryResult {
  /**
   * The ID of the entry (manager).
   */
  id: number;
  /**
   * The timestamp when the entry (manager) was joined.
   */
  joined_time: string;
  /**
   * The event number when the entry (manager) started.
   */
  started_event: number;
  /**
   * The favorite team of the player associated with the entry (manager) (can be null).
   */
  favourite_team: string | null;
  /**
   * The first name of the player associated with the entry (manager).
   */
  player_first_name: string;
  /**
   * The last name of the player associated with the entry (manager).
   */
  player_last_name: string;
  /**
   * The ID of the player's region.
   */
  player_region_id: number;
  /**
   * The name of the player's region.
   */
  player_region_name: string;
  /**
   * The ISO code (short) of the player's region.
   */
  player_region_iso_code_short: string;
  /**
   * The ISO code (long) of the player's region.
   */
  player_region_iso_code_long: string;
  /**
   * The overall points earned by the entry (manager) in the entire season.
   */
  summary_overall_points: number;
  /**
   * The overall rank of the entry (manager) in the entire season.
   */
  summary_overall_rank: number;
  /**
   * The points earned by the entry (manager) in the current event.
   */
  summary_event_points: number;
  /**
   * The rank of the entry (manager) in the current event.
   */
  summary_event_rank: number;
  /**
   * The current event number.
   */
  current_event: number;
  /**
   * The leagues associated with the entry (manager).
   */
  leagues: Leagues;
  /**
   * The name of the entry (manager).
   */
  name: string;
  /**
   * Indicates whether changing the entry (manager) name is blocked.
   */
  name_change_blocked: boolean;
  /**
   * The kit (jersey) associated with the entry (manager).
   */
  kit: string;
  /**
   * The amount of money in the bank at the last deadline.
   */
  last_deadline_bank: number;
  /**
   * The total value of the entry (manager)'s team at the last deadline.
   */
  last_deadline_value: number;
  /**
   * The total number of transfers made by the entry (manager) at the last deadline.
   */
  last_deadline_total_transfers: number;
}

