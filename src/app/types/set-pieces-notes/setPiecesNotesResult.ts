/**
 * Represents the result of the `team/set-piece-notes/` API endpoint.
 */
export interface SetPiecesNotesResult {
  /**
   * The last updated timestamp of the set pieces notes.
   */
  last_updated: string;
  /**
   * The list of teams with set pieces notes.
   */
  teams: Team[];
}

/**
 * Represents a team with set pieces notes.
 */
export interface Team {
  /**
   * The notes related to set pieces for the team.
   */
  notes: Note[];
  /**
   * The ID of the team.
   */
  id: number;
}

/**
 * Represents a set pieces note.
 */
export interface Note {
  /**
   * Indicates whether the note has an external link.
   */
  external_link: boolean;
  /**
   * The information message of the set pieces note.
   */
  info_message: string;
  /**
   * The source link of the set pieces note.
   */
  source_link: string;
}



