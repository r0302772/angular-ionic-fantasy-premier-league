export interface DreamTeamResult {
  top_player: TopPlayer;
  team: Team[];
}

export interface TopPlayer {
  id: number;
  points: number;
}

export interface Team {
  element: number;
  points: number;
  position: number;
}
