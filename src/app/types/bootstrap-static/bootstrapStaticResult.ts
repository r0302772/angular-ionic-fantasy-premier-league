import {Event} from './event';
import {GameSettings} from './gameSettings';
import {Phase} from './phase';
import {Team} from './team';
import {Element} from './element';
import {ElementStat} from './elementStat';
import {ElementType} from './elementType';

export interface BootstrapStaticResult {
  events: Event[];
  game_settings: GameSettings;
  phases: Phase[];
  teams: Team[];
  total_players: number;
  elements: Element[];
  element_stats: ElementStat[];
  element_types: ElementType[];
}
