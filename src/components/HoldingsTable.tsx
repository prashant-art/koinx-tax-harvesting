import React from 'react';
import { type Holding } from '../types';

interface HoldingsTableProps {
  holdings: Holding[];
  selectedRowIds: string[];
  onToggleRow: (coin: string) => void;
  onToggleAll: () => void;
}

export const HoldingsTable: React.FC<HoldingsTableProps> = ({
  holdings,
  selectedRowIds,
  onToggleRow,
  onToggleAll,
}) => {
  const isAllSelected = holdings.length > 0 && selectedRowIds.length === holdings.length;

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      {/* overflow-x-auto acts as a mobile savior to prevent broken UI grids */}
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] sm:text-[11px] font-bold uppercase text-slate-500 tracking-wider">
              <th className="p-3 sm:p-4 w-12 text-center">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={onToggleAll}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </th>
              <th className="p-3 sm:p-4">Asset</th>
              <th className="p-3 sm:p-4">Avg Buy Price / Balance</th>
              <th className="p-3 sm:p-4">Current Price</th>
              <th className="p-3 sm:p-4">Short-Term Gain</th>
              <th className="p-4 sm:p-4">Long-Term Gain</th>
              <th className="p-3 sm:p-4 text-right">Amount to Sell</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-600">
            {holdings.map((row) => {
              const isSelected = selectedRowIds.includes(row.coin);
              return (
                <tr 
                  key={row.coin} 
                  className={`hover:bg-slate-50/50 transition-colors ${isSelected ? 'bg-blue-50/30' : ''}`}
                >
                  <td className="p-3 sm:p-4 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggleRow(row.coin)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </td>
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <img src={row.logo} alt={row.coin} className="w-6 h-6 sm:w-7 h-7 rounded-full object-contain bg-slate-50 p-0.5" />
                      <div>
                        <span className="block">{row.coinName}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{row.coin}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4">
                    <span className="font-medium text-slate-900 block">₹{row.averageBuyPrice.toLocaleString('en-IN')}</span>
                    <span className="text-[11px] text-slate-400 block font-normal">Qty: {row.totalHoldings}</span>
                  </td>
                  <td className="p-3 sm:p-4 font-medium text-slate-900">₹{row.currentPrice.toLocaleString('en-IN')}</td>
                  <td className="p-3 sm:p-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                      row.stcg.gain >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {row.stcg.gain >= 0 ? '+' : ''}₹{row.stcg.gain.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5 font-normal">Bal: {row.stcg.balance}</span>
                  </td>
                  <td className="p-3 sm:p-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                      row.ltcg.gain >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {row.ltcg.gain >= 0 ? '+' : ''}₹{row.ltcg.gain.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5 font-normal">Bal: {row.ltcg.balance}</span>
                  </td>
                  <td className="p-3 sm:p-4 text-right">
                    {isSelected ? (
                      <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-[11px] px-2.5 py-1 rounded-lg font-bold whitespace-nowrap">
                        Sell {row.totalHoldings} {row.coin}
                      </span>
                    ) : (
                      <span className="text-slate-300 text-[11px] italic whitespace-nowrap">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};