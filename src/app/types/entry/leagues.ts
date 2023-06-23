import {CupMatch} from './cupMatch';
import {ClassicLeague} from './classicLeague';
import {Cup} from './cup';

/**
 * Represents a Leagues object in the Fantasy Premier League.
 */
export interface Leagues {
  /**
   * An array of classic leagues.
   */
  classic: ClassicLeague[];
  /**
   * An array of head-to-head leagues.
   */
  h2h: any[];
  /**
   * The cup league.
   */
  cup: Cup;
  /**
   * An array of cup matches.
   */
  cup_matches: CupMatch[];
}

