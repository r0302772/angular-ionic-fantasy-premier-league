export interface EntryResult {
  id: number;
  joined_time: string;
  started_event: number;
  favourite_team: string | null;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_iso_code_short: string;
  player_region_iso_code_long: string;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank: number;
  current_event: number;
  leagues: {
    classic: ClassicLeague[];
    h2h: any[];
    cup: Cup;
    cup_matches: CupMatch[];
  };
  name: string;
  name_change_blocked: boolean;
  kit: string;
  last_deadline_bank: number;
  last_deadline_value: number;
  last_deadline_total_transfers: number;
}

interface ClassicLeague {
  id: number;
  name: string;
  short_name: string | null;
  created: string;
  closed: boolean;
  rank: number | null;
  max_entries: number | null;
  league_type: string;
  scoring: string;
  admin_entry: number | null;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league: number | null;
  cup_qualified: boolean | null;
  entry_rank: number;
  entry_last_rank: number;
}

interface Cup {
  matches: any[];
  status: {
    qualification_event: number | null;
    qualification_numbers: number[] | null;
    qualification_rank: number | null;
    qualification_state: string | null;
  };
  cup_league: number | null;
}

interface CupMatch {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
  entry_1_player_name: string;
  entry_1_points: number;
  entry_1_win: number;
  entry_1_draw: number;
  entry_1_loss: number;
  entry_1_total: number;
  entry_2_entry: number;
  entry_2_name: string;
  entry_2_player_name: string;
  entry_2_points: number;
  entry_2_win: number;
  entry_2_draw: number;
  entry_2_loss: number;
  entry_2_total: number;
  is_knockout: boolean;
  league: number;
  winner: number;
  seed_value: number | null;
  event: number;
  tiebreak: number | null;
  is_bye: boolean;
  knockout_name: string;
}
