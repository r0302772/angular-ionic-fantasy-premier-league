import {AutomaticSub, EntryHistory, Pick} from './entry-event-picks/entryEventPicksResult';

export interface ChatgptEventPicks {
  active_chip: string | null;
  automatic_subs: AutomaticSub[];
  entry_history: EntryHistory;
  picks: Pick[];
}
