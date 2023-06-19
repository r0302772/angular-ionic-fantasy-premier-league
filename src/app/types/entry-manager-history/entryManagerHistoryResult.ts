export interface EntryManagerHistoryResult {
  current: CurrentSeason[];
  past: PastSeason[];
  chips: Chip[];
}

export interface CurrentSeason {
  event: number;
  points: number;
  total_points: number;
  rank: number;
  rank_sort: number;
  overall_rank: number;
  bank: number;
  value: number;
  event_transfers: number;
  event_transfers_cost: number;
  points_on_bench: number;
}

export interface PastSeason {
  season_name: string;
  total_points: number;
  rank: number;
}

export interface Chip {
  name: string;
  time: string;
  event: number;
}
