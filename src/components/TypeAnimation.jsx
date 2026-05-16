'use client';

import { useState, useEffect, useCallback } from 'react';

export function TypeAnimation({ strings, speed = 60, deleteSpeed = 40, pause = 2000 }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  const tick = useCallback(() => {
    const current = strings[idx];
    if (phase === 'typing') {
      if (displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else {
        setPhase('typing');
        setIdx((i) => (i + 1) % strings.length);
      }
    }
  }, [displayed, phase, idx, strings]);

  useEffect(() => {
    const delay = phase === 'typing' ? speed : phase === 'pausing' ? pause : deleteSpeed;
    const t = setTimeout(tick, delay);
    return () => clearTimeout(t);
  }, [tick, phase, speed, pause, deleteSpeed]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-5 bg-primary-light ml-0.5 animate-pulse" />
    </span>
  );
}
