export interface SetPiecesNotesResult {
  last_updated: string;
  teams: Team[];
}

export interface Team {
  notes: Note[];
  id: number;
}

export interface Note {
  external_link: boolean;
  info_message: string;
  source_link: string;
}


