import React, { useState } from 'react';
import { useApp } from '../context';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const { inventory, setInventory } = useApp();
  const [rescuing, setRescuing] = useState(false);
  const [rescuedBatch, setRescuedBatch] = useState(null);

  const handleLiquidate = (id) => {
    setRescuing(true);
    setTimeout(() => {
      setInventory(prev => prev.filter(item => item.id !== id));
      setRescuing(false);
      setRescuedBatch(inventory.find(i => i.id === id));
    }, 2500);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Live Inventory</h2>
      {inventory.map(item => (
        <motion.div 
          layout
          key={item.id}
          className="bg-white dark:bg-zinc-900 p-5 rounded-3xl shadow-sm border dark:border-zinc-800"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg">{item.crop}</h3>
              <p className="text-slate-500 text-sm">{item.qty} • Cold Chain: {item.coldChain}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${item.status === 'At Risk' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'}`}>
              {item.status}
            </span>
          </div>
          
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Expires In</p>
              <p className="text-2xl font-mono font-bold text-red-500 leading-none">{item.shelfLife}h 00m</p>
            </div>
            <button 
              onClick={() => handleLiquidate(item.id)}
              disabled={rescuing}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 disabled:opacity-50"
            >
              {rescuing ? "Broadcasting..." : "Liquidate Now"}
            </button>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {rescuedBatch && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-emerald-500/90 backdrop-blur-md"
          >
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[40px] text-center max-w-xs shadow-2xl">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-black mb-2 uppercase">Batch Rescued!</h2>
              <p className="text-slate-500 mb-6 text-sm">
                <b>FreshPress Juice Co.</b> accepted your {rescuedBatch.crop}. You just saved 120kg of CO₂!
              </p>
              <div className="bg-emerald-50 p-4 rounded-2xl mb-6">
                <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest">New Badge Unlocked</p>
                <p className="text-emerald-800 font-black">🌱 Emergency Saver</p>
              </div>
              <button 
                onClick={() => setRescuedBatch(null)}
                className="w-full py-4 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-2xl font-bold"
              >
                Continue Saving
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
