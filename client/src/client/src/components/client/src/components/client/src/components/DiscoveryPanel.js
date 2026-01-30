import React from 'react';

const processors = [
  { name: 'PurePulse Juice Ltd', type: 'Juice Factory', dist: '4.2km', capacity: '20 tons' },
  { name: 'GreenCan Canning', type: 'Preservation', dist: '12.8km', capacity: '5 tons' },
  { name: 'Heritage Kitchens', type: 'Community Kitchen', dist: '2.1km', capacity: '500kg' },
];

const DiscoveryPanel = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Nearby Processors</h2>
      <button className="text-emerald-500 text-sm font-bold">Filters</button>
    </div>
    {processors.map((p, i) => (
      <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-3xl flex justify-between items-center border dark:border-zinc-800">
        <div>
          <h4 className="font-bold">{p.name}</h4>
          <p className="text-xs text-slate-500">{p.type} • {p.dist} away</p>
        </div>
        <button className="bg-slate-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-xs font-bold">Connect</button>
      </div>
    ))}
  </div>
);

export default DiscoveryPanel;
