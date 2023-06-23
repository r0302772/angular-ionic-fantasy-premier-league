/**
 * Represents an element (player) in the Fantasy Premier League.
 */
export interface ElementType {
  /**
   * The unique identifier for the element type.
   */
  id: number;
  /**
   * The plural name of the element type.
   */
  plural_name: string;
  /**
   * The short version of the plural name of the element type.
   */
  plural_name_short: string;
  /**
   * The singular name of the element type.
   */
  singular_name: string;
  /**
   * The short version of the singular name of the element type.
   */
  singular_name_short: string;
  /**
   * The maximum number of elements of this type that can be selected in a squad.
   */
  squad_select: number;
  /**
   * The minimum number of elements of this type that must be played in a squad.
   */
  squad_min_play: number;
  /**
   * The maximum number of elements of this type that can be played in a squad.
   */
  squad_max_play: number;
  /**
   * Whether this element type has a specific UI shirt.
   */
  ui_shirt_specific: boolean;
  /**
   * An array of locked sub-positions for this element type.
   */
  sub_positions_locked: number[];
  /**
   * The total number of elements of this type.
   */
  element_count: number;
}
