/**
 * Represents an element (player) in the Fantasy Premier League.
 */
export interface Element {
  /**
   * The chance of the player playing in the next round, as a percentage.
   */
  chance_of_playing_next_round: number | null;
  /**
   * The chance of the player playing in the current round, as a percentage.
   */
  chance_of_playing_this_round: number | null;
  /**
   * The unique code for the player.
   */
  code: number;
  /**
   * The change in cost of the player since the last event.
   */
  cost_change_event: number;
  /**
   * The change in cost of the player since the last event, as a negative number.
   */
  cost_change_event_fall: number;
  /**
   * The change in cost of the player since the start of the season.
   */
  cost_change_start: number;
  /**
   * The change in cost of the player since the start of the season, as a negative number.
   */
  cost_change_start_fall: number;
  /**
   * The number of times the player has been in a dream team.
   */
  dreamteam_count: number;
  /**
   * The element type (position) of the player.
   */
  element_type: number;
  /**
   * The expected points for the player in the next event.
   */
  ep_next: string;
  /**
   * The expected points for the player in the current event.
   */
  ep_this: string;
  /**
   * The points scored by the player in the current event.
   */
  event_points: number;
  /**
   * The first name of the player.
   */
  first_name: string;
  /**
   * The form of the player over their last five matches.
   */
  form: string;
  /**
   * The unique identifier for the player.
   */
  id: number;
  /**
   * Whether the player is currently in a dream team.
   */
  in_dreamteam: boolean;
  /**
   * Any news about the player, such as injuries or suspensions.
   */
  news: string;
  /**
   * The date and time when any news about the player was added.
   */
  news_added: string;
  /**
   * The current cost of the player.
   */
  now_cost: number;
  /**
   * The filename of a photo of the player.
   */
  photo: string;
  /**
   * The average points per game for the player over their last five matches.
   */
  points_per_game: string;
  /**
   * The second (last) name of the player.
   */
  second_name: string;
  /**
   * The percentage of teams that have selected this player.
   */
  selected_by_percent: string;
  /**
   * Whether the player is a special player (e.g. a legend).
   */
  special: boolean;
  /**
   * The squad number of the player.
   */
  squad_number: null | number;
  /**
   * The status of the player (e.g. "a" for available, "i" for injured).
   */
  status: string;
  /**
   * The team ID that the player belongs to.
   */
  team: number;
  /**
   * The unique code for the team that the player belongs to.
   */
  team_code: number;
  /**
   * The total points scored by the player over the season.
   */
  total_points: number;
  /**
   * The total number of transfers in for the player over the season.
   */
  transfers_in: number;
  /**
   * The total number of transfers in for the player during the current event.
   */
  transfers_in_event: number;
  /**
   * The total number of transfers out for the player over the season.
   */
  transfers_out: number;
  /**
   * The total number of transfers out for the player during the current event.
   */
  transfers_out_event: number;
  /**
   * The value form of the player (points per million over their last five matches).
   */
  value_form: string;
  /**
   * The value season of the player (points per million over the season).
   */
  value_season: string;
  /**
   * The web name of the player (usually their last name).
   */
  web_name: string;
  /**
   * The total minutes played by the player over the season.
   */
  minutes: number;
  /**
   * The total goals scored by the player over the season.
   */
  goals_scored: number;
  /**
   * The total assists made by the player over the season.
   */
  assists: number;
  /**
   * The total number of clean sheets kept by the player over the season.
   */
  clean_sheets: number;
  /**
   * The total number of goals conceded by the player over the season.
   */
  goals_conceded: number;
  /**
   * The total number of own goals scored by the player over the season.
   */
  own_goals: number;
  /**
   * The total number of penalties saved by the player over the season.
   */
  penalties_saved: number;
  /**
   * The total number of penalties missed by the player over the season.
   */
  penalties_missed: number;
  /**
   * The total number of yellow cards received by the player over the season.
   */
  yellow_cards: number;
  /**
   * The total number of red cards received by the player over the season.
   */
  red_cards: number;
  /**
   * The total number of saves made by the player over the season.
   */
  saves: number;
  /**
   * The total bonus points awarded to the player over the season.
   */
  bonus: number;
  /**
   * The total bonus points system score for the player over the season.
   */
  bps: number;
  /**
   * The influence score for the player over their last five matches.
   */
  influence: string;
  /**
   * The creativity score for the player over their last five matches.
   */
  creativity: string;
  /**
   * The threat score for the player over their last five matches.
   */
  threat: string;
  /**
   * The ICT (influence, creativity, threat) index score for the player over their last five matches.
   */
  ict_index: string;
  /**
   * The total number of starts made by the player over the season.
   */
  starts: number;
  /**
   * The expected goals for the player over their last five matches.
   */
  expected_goals: string;
  /**
   * The expected assists for the player over their last five matches.
   */
  expected_assists: string;
  /**
   * The expected goal involvements (goals + assists) for the player over their last five matches.
   */
  expected_goal_involvements: string;
  /**
   * The expected goals conceded for the player over their last five matches.
   */
  expected_goals_conceded: string;
  /**
   * The rank of the player's influence score among all players.
   */
  influence_rank: number;
  /**
   * The rank of the player's influence score among all players in the same position.
   */
  influence_rank_type: number;
  /**
   * The rank of the player's creativity score among all players.
   */
  creativity_rank: number;
  /**
   * The rank of the player's creativity score among all players in the same position.
   */
  creativity_rank_type: number;
  /**
   * The rank of the player's threat score among all players.
   */
  threat_rank: number;
  /**
   * The rank of the player's threat score among all players in the same position.
   */
  threat_rank_type: number;
  /**
   * The rank of the player's ICT index score among all players.
   */
  ict_index_rank: number;
  /**
   * The rank of the player's ICT index score among all players in the same position.
   */
  ict_index_rank_type: number;
  /**
   * The order in which the player takes corners and indirect free kicks for their team.
   */
  corners_and_indirect_freekicks_order: null | number;
  /**
   * The text describing which corners and indirect free kicks the player takes for their team.
   */
  corners_and_indirect_freekicks_text: string;
  /**
   * The order in which the player takes direct free kicks for their team.
   */
  direct_freekicks_order: number;
  /**
   * The text describing which direct free kicks the player takes for their team.
   */
  direct_freekicks_text: string;
  /**
   * The order in which the player takes penalties for their team.
   */
  penalties_order: null | number;
  /**
   * The text describing which penalties the player takes for their team.
   */
  penalties_text: string;
  /**
   * The expected goals per 90 minutes played for the player over their last five matches.
   */
  expected_goals_per_90: number;
  /**
   * The saves per 90 minutes played for the player over their last five matches.
   */
  saves_per_90: number;
  /**
   * The expected assists per 90 minutes played for the player over their last five matches.
   */
  expected_assists_per_90: number;
  /**
   * The expected goal involvements (goals + assists) per 90 minutes played for the player over their last five matches.
   */
  expected_goal_involvements_per_90: number;
  /**
   * The expected goals conceded per 90 minutes played for the player over their last five matches.
   */
  expected_goals_conceded_per_90: number;
  /**
   * The goals conceded per 90 minutes played for the player over their last five matches.
   */
  goals_conceded_per_90: number;
  /**
   * The rank of the player's current cost among all players.
   */
  now_cost_rank: number;
  /**
   * The rank of the player's current cost among all players in the same position.
   */
  now_cost_rank_type: number;
  /**
   * The rank of the player's form among all players.
   */
  form_rank: number;
  /**
   * The rank of the player's form among all players in the same position.
   */
  form_rank_type: number;
  /**
   * The rank of the player's points per game among all players in the same position.
   */
  points_per_game_rank: number;
  /**
   * The rank of the player's points per game among all players in the same position.
   */
  points_per_game_rank_type: number;
  /**
   * The rank of the player's selection percentage among all players.
   */
  selected_rank: number;
  /**
   * The rank of the player's selection percentage among all players in the same position.
   */
  selected_rank_type: number;
  /**
   * The starts per 90 minutes played for the player over their last five matches.
   */
  starts_per_90: number;
  /**
   * The clean sheets per 90 minutes played for the player over their last five matches.
   */
  clean_sheets_per_90: number;
}
