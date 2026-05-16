'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(35);
  const result = employees * hoursPerWeek * hourlyRate * 48 * 0.3; // 30% avg savings

  return (
    <section id="calculator" className="py-24 gradient-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">
          Your AI <span className="gradient-text">Savings Calculator</span>
        </h2>
        <p className="section-subtitle !text-white/60">
          See how much your business saves with AI automation. Based on real results from our clients.
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-3">Employees doing manual work</label>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="text-white text-2xl font-bold mt-1">{employees}</div>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-3">Hours/week on manual tasks</label>
              <input
                type="range"
                min="5"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="text-white text-2xl font-bold mt-1">{hoursPerWeek}h</div>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-3">Avg hourly cost ($)</label>
              <input
                type="range"
                min="15"
                max="150"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="text-white text-2xl font-bold mt-1">${hourlyRate}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
            <div className="text-white/60 text-sm mb-2">Estimated Annual Savings with AI (30% minimum)</div>
            <div className="text-5xl md:text-6xl font-extrabold gradient-text">
              ${result.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <div className="text-white/40 text-xs mt-3">
              Based on 48 working weeks/year. Typical ROI timeline: 45-90 days.
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary text-lg">
              Get Your Custom ROI Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
