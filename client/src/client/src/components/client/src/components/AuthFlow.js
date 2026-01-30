import React, { useState } from 'react';
import { useApp } from '../context';
import { motion } from 'framer-motion';

const AuthFlow = () => {
  const { setUser } = useApp();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col p-8 justify-center">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h1 className="text-4xl font-black mb-2">RESCUE<br/><span className="text-emerald-500">PROTOCOL</span></h1>
        <p className="text-slate-400 mb-12">Zero-waste supply chain pivot.</p>

        {step === 1 ? (
          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-2xl border dark:border-zinc-800">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Mobile Number</label>
              <input type="tel" placeholder="+1 234 567 890" className="w-full bg-transparent text-xl font-bold outline-none" />
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full py-5 bg-emerald-500 text-white rounded-[24px] font-bold shadow-lg shadow-emerald-500/30"
            >
              Get OTP
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-slate-50 dark:bg-zinc-900 border dark:border-zinc-800 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {i === 1 ? "9" : ""}
                </div>
              ))}
            </div>
            <button 
              onClick={() => setUser({ name: 'Farmer John' })}
              className="w-full py-5 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-[24px] font-bold"
            >
              Verify & Enter
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthFlow;
