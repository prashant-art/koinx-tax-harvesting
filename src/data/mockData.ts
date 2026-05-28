import { type CapitalGainsData, type Holding } from '../types';

export const mockCapitalGains: CapitalGainsData = {
  stcg: { profits: 85000, losses: 25000 },
  ltcg: { profits: 145000, losses: 35000 }
};

export const mockHoldings: Holding[] = [
  {
    coin: 'BTC',
    coinName: 'Bitcoin',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    totalHoldings: 0.65,
    averageBuyPrice: 4850000,
    currentPrice: 5420000,
    stcg: { gain: 45000, balance: 0.25 },
    ltcg: { gain: -18000, balance: 0.40 }
  },
  {
    coin: 'ETH',
    coinName: 'Ethereum',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    totalHoldings: 4.2,
    averageBuyPrice: 240000,
    currentPrice: 285000,
    stcg: { gain: 15000, balance: 1.2 },
    ltcg: { gain: -22000, balance: 3.0 }
  },
  {
    coin: 'SOL',
    coinName: 'Solana',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    totalHoldings: 45,
    averageBuyPrice: 9500,
    currentPrice: 13200,
    stcg: { gain: -8500, balance: 15 },
    ltcg: { gain: 24000, balance: 30 }
  },
  {
    coin: 'MATIC',
    coinName: 'Polygon',
    logo: 'https://assets.coingecko.com/coins/images/4713/large/polygon.png',
    totalHoldings: 1200,
    averageBuyPrice: 82,
    currentPrice: 68,
    stcg: { gain: -12000, balance: 500 },
    ltcg: { gain: -4800, balance: 700 }
  }
];