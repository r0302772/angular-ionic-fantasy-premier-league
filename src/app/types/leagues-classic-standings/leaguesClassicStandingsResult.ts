export interface LeagueClassicStandingsResult {
  new_entries: NewEntries;
  last_updated_data: string;
  league: League;
  standings: Standings;
}

export interface NewEntries {
  has_next: boolean;
  page: number;
  results: Standing[];
}

export interface League {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries: null | number;
  league_type: string;
  scoring: string;
  admin_entry: number;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league: number;
  rank: null | number;
}

export interface Standings {
  has_next: boolean;
  page: number;
  results: Standing[];
}

export interface Standing {
  id: number;
  event_total: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
}
