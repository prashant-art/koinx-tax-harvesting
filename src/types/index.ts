export interface GainLossDetails {
  profits: number;
  losses: number;
}

export interface CapitalGainsData {
  stcg: GainLossDetails;
  ltcg: GainLossDetails;
}

export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  totalHoldings: number;
  averageBuyPrice: number;
  currentPrice: number;
  stcg: {
    gain: number;
    balance: number;
  };
  ltcg: {
    gain: number;
    balance: number;
  };
}