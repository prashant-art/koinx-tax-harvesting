import React from 'react';

interface CapitalGainsCardProps {
  title: string;
  variant: 'dark' | 'blue';
  stcgProfits: number;
  stcgLosses: number;
  ltcgProfits: number;
  ltcgLosses: number;
  savings?: number;
}

export const CapitalGainsCard: React.FC<CapitalGainsCardProps> = ({
  title,
  variant,
  stcgProfits,
  stcgLosses,
  ltcgProfits,
  ltcgLosses,
  savings = 0,
}) => {
  const isDark = variant === 'dark';
  
  const netStcg = stcgProfits - stcgLosses;
  const netLtcg = ltcgProfits - ltcgLosses;
  const totalRealised = netStcg + netLtcg;

  return (
    <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-between ${
      isDark ? 'bg-slate-900 text-white border border-slate-800' : 'bg-blue-600 text-white'
    }`}>
      <div>
        <h3 className={`text-sm font-semibold tracking-wider uppercase opacity-75 mb-4`}>
          {title}
        </h3>
        
        {/* Realised Capital Gains */}
        <div className="mb-6">
          <span className="text-xs opacity-80 block">Realised Capital Gains</span>
          <span className="text-3xl font-bold">₹{totalRealised.toLocaleString('en-IN')}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          {/* STCG Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide opacity-90 mb-2">Short-Term (STCG)</h4>
            <div className="space-y-1 text-xs opacity-80">
              <p>Profits: <span className="font-medium text-emerald-400">₹{stcgProfits.toLocaleString('en-IN')}</span></p>
              <p>Losses: <span className="font-medium text-rose-400">₹{stcgLosses.toLocaleString('en-IN')}</span></p>
              <p className="font-semibold border-t border-white/5 pt-1 mt-1 text-white">
                Net: ₹{netStcg.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* LTCG Section */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide opacity-90 mb-2">Long-Term (LTCG)</h4>
            <div className="space-y-1 text-xs opacity-80">
              <p>Profits: <span className="font-medium text-emerald-400">₹{ltcgProfits.toLocaleString('en-IN')}</span></p>
              <p>Losses: <span className="font-medium text-rose-400">₹{ltcgLosses.toLocaleString('en-IN')}</span></p>
              <p className="font-semibold border-t border-white/5 pt-1 mt-1 text-white">
                Net: ₹{netLtcg.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Tax Savings Notification */}
      {!isDark && savings > 0 && (
        <div className="mt-6 p-3 bg-emerald-500/30 border border-emerald-400/40 rounded-xl text-center animate-pulse">
          <p className="text-xs font-semibold text-emerald-200">
            🎉 You are going to save ₹{savings.toLocaleString('en-IN')} in taxes!
          </p>
        </div>
      )}
    </div>
  );
};