import {Fixture} from './fixture';
import {History} from './history';
import {HistoryPast} from './historyPast';

/**
 * Represents the result of the `element-summary/{element_id}/` API endpoint.
 */
export interface ElementSummaryResult {
  /**
   * The upcoming fixtures related to the element.
   */
  fixtures: Fixture[];
  /**
   * The past fixtures performance of the element.
   */
  history: History[];
  /**
   * The past history of the element in previous seasons.
   */
  history_past: HistoryPast[];
}
