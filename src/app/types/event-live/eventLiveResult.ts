export interface EventLiveResult {
  elements: Element[];
}

export interface Element {
  id: number;
  stats: PlayerStats;
  explain: ElementStatsExplain[];
}

interface PlayerStats {
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  starts: number;
  expected_goals: string;
  expected_assists: string;
  expected_goal_involvements: string;
  expected_goals_conceded: string;
  total_points: number;
  in_dreamteam: boolean;
}

export interface ElementStatsExplain {
  fixture: number;
  stats: ElementStat[];
}

export interface ElementStat {
  identifier: string;
  points: number;
  value: number;
}
