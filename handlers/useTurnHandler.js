export function handleUpperPress(active, upperTime, lowerTime, upperIncrement, setUpperTime, setActive) {
    if (active === 'upper' && upperTime > 0 && lowerTime > 0) {
      const inc = parseInt(upperIncrement, 10) || 0;
      if (inc > 0) setUpperTime(t => t + inc * 1000);
      setActive('lower');
    } else if (active === null && upperTime > 0 && lowerTime > 0) {
      setActive('lower');
    }
  }
  
  export function handleLowerPress(active, upperTime, lowerTime, lowerIncrement, setLowerTime, setActive) {
    if (active === 'lower' && upperTime > 0 && lowerTime > 0) {
      const inc = parseInt(lowerIncrement, 10) || 0;
      if (inc > 0) setLowerTime(t => t + inc * 1000);
      setActive('upper');
    } else if (active === null && upperTime > 0 && lowerTime > 0) {
      setActive('upper');
    }
  }
  