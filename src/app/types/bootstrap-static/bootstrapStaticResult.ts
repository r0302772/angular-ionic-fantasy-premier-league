import {Event} from './event';
import {GameSettings} from './gameSettings';
import {Phase} from './phase';
import {Team} from './team';
import {Element} from './element';
import {ElementStat} from './elementStat';
import {ElementType} from './elementType';

/**
 * Represents the result of the `bootstrap-static/` API endpoint.
 */
export interface BootstrapStaticResult {
  /**
   * An array of Event objects representing different events (gameweeks) in the fantasy game.
   */
  events: Event[];
  /**
   * Information about the game settings, such as scoring rules and team budget.
   */
  game_settings: GameSettings;
  /**
   * An array of Phase objects representing different phases or stages of the game.
   */
  phases: Phase[];
  /**
   * An array of Team objects representing the teams participating in the Premier League.
   */
  teams: Team[];
  /**
   * The total number of players participating in the fantasy game.
   */
  total_players: number;
  /**
   * An array of Element objects representing the elements (players) available in the game.
   */
  elements: Element[];
  /**
   * An array of ElementStat objects representing various statistics associated with the players.
   */
  element_stats: ElementStat[];
  /**
   * An array of ElementType objects representing the types or positions of players.
   */
  element_types: ElementType[];
}

