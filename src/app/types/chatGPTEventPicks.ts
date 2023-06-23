import {AutomaticSub} from './entry-event-picks/automaticSub';
import {EntryHistory} from './entry-event-picks/entryHistory';
import {Pick} from './entry-event-picks/pick';

export interface ChatGPTEventPicks {
  active_chip: string | null;
  automatic_subs: AutomaticSub[];
  entry_history: EntryHistory;
  picks: Pick[];
}
