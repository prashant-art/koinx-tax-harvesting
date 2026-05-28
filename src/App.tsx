import { useState, useEffect } from 'react';
import { mockCapitalGains, mockHoldings } from './data/mockData';
import { CapitalGainsCard } from './components/CapitalGainsCard';
import { HoldingsTable } from './components/HoldingsTable';
import { Wallet } from 'lucide-react';

export default function App() {
  const [initialGains] = useState(mockCapitalGains);
  const [holdings] = useState(mockHoldings);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [postGains, setPostGains] = useState(mockCapitalGains);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    let updatedStcgProfits = initialGains.stcg.profits;
    let updatedStcgLosses = initialGains.stcg.losses;
    let updatedLtcgProfits = initialGains.ltcg.profits;
    let updatedLtcgLosses = initialGains.ltcg.losses;

    selectedRowIds.forEach((id) => {
      const asset = holdings.find((h) => h.coin === id);
      if (!asset) return;

      if (asset.stcg.gain > 0) updatedStcgProfits += asset.stcg.gain;
      else updatedStcgLosses += Math.abs(asset.stcg.gain);

      if (asset.ltcg.gain > 0) updatedLtcgProfits += asset.ltcg.gain;
      else updatedLtcgLosses += Math.abs(asset.ltcg.gain);
    });

    setPostGains({
      stcg: { profits: updatedStcgProfits, losses: updatedStcgLosses },
      ltcg: { profits: updatedLtcgProfits, losses: updatedLtcgLosses },
    });

    const initialRealised = (initialGains.stcg.profits - initialGains.stcg.losses) + 
                             (initialGains.ltcg.profits - initialGains.ltcg.losses);
    const postRealised = (updatedStcgProfits - updatedStcgLosses) + 
                           (updatedLtcgProfits - updatedLtcgLosses);

    setSavings(initialRealised > postRealised ? (initialRealised - postRealised) : 0);
  }, [selectedRowIds, initialGains, holdings]);

  const handleToggleRow = (coin: string) => {
    setSelectedRowIds((prev) => prev.includes(coin) ? prev.filter((id) => id !== coin) : [...prev, coin]);
  };

  const handleToggleAll = () => {
    setSelectedRowIds(selectedRowIds.length === holdings.length ? [] : holdings.map((h) => h.coin));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-12">
      {/* Responsive Header */}
      <header className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-xl text-white shrink-0">
            <Wallet size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">KoinX Tax Dashboard</h1>
            <p className="text-[11px] text-slate-500 font-medium">Tax Loss Harvesting Tool</p>
          </div>
        </div>
      </header>

      {/* Responsive Main Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        
        {/* Responsive Grid: 1 column on Mobile, 2 columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <CapitalGainsCard
            title="Pre-Harvesting Status"
            variant="dark"
            stcgProfits={initialGains.stcg.profits}
            stcgLosses={initialGains.stcg.losses}
            ltcgProfits={initialGains.ltcg.profits}
            ltcgLosses={initialGains.ltcg.losses}
          />
          <CapitalGainsCard
            title="After Harvesting Calculation"
            variant="blue"
            stcgProfits={postGains.stcg.profits}
            stcgLosses={postGains.stcg.losses}
            ltcgProfits={postGains.ltcg.profits}
            ltcgLosses={postGains.ltcg.losses}
            savings={savings}
          />
        </div>

        {/* Assets Section */}
        <div className="space-y-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">Tax Loss Harvesting Portfolio Holdings</h2>
            <p className="text-xs text-slate-500">Select rows to optimize calculations dynamically.</p>
          </div>
          
          <HoldingsTable
            holdings={holdings}
            selectedRowIds={selectedRowIds}
            onToggleRow={handleToggleRow}
            onToggleAll={handleToggleAll}
          />
        </div>
      </main>
    </div>
  );
}