import { useEffect, useRef } from 'react';

export default function useChessClock(active, setUpperTime, setLowerTime) {
  const intervalRef = useRef(null);
  const remainingAtStartRef = useRef(0);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (active !== 'upper' && active !== 'lower') {
      return;
    }

    const setTime = active === 'upper' ? setUpperTime : setLowerTime;
    const startedAt = Date.now();

    setTime((t) => {
      remainingAtStartRef.current = t;
      return t;
    });

    intervalRef.current = setInterval(() => {
      const remaining = remainingAtStartRef.current - (Date.now() - startedAt);
      setTime(remaining > 0 ? remaining : 0);
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [active, setUpperTime, setLowerTime]);
}
