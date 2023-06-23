import {AutomaticSub} from './automaticSub';
import {EntryHistory} from './entryHistory';
import {Pick} from './pick';

/**
 * Represents the result of the `entry/{manager_id}/event/{event_id}/picks/` API endpoint.
 */
export interface EntryEventPicksResult {
  /**
   * The active chip used for the event, if any.
   */
  active_chip: string | null;
  /**
   * The automatic substitutions made for the event.
   */
  automatic_subs: AutomaticSub[];
  /**
   * The history of the entry up to the event.
   */
  entry_history: EntryHistory;
  /**
   * The list of player picks for the event.
   */
  picks: Pick[];
}
