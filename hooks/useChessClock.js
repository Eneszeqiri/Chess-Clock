import { useEffect, useRef } from 'react';

export default function useChessClock(active, setUpperTime, setLowerTime) {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (active === 'upper') {
      intervalRef.current = setInterval(() => {
        setUpperTime(t => (t > 0 ? t - 10 : 0));
      }, 10);
    } else if (active === 'lower') {
      intervalRef.current = setInterval(() => {
        setLowerTime(t => (t > 0 ? t - 10 : 0));
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [active]);
}
