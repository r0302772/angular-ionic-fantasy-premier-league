export interface EvenStatusResult {
  status: EventStatus[];
  leagues: string;
}
export interface EventStatus {
  bonus_added: boolean;
  date: string;
  event: number;
  points: string;
}
