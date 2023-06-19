export interface PrizesResult {
  overallPrizes: Prize[];
  monthlyPrizes: Prize[];
  weeklyPrizes: Prize[];
  secondChancePrizes: Prize[];
}

export interface Prize {
  title: string;
  description?: string;
  rewards: string[];
}

