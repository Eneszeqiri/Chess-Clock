export const INITIAL_TIME = 5 * 60 * 1000;

export function formatTime(t) {
  const totalSeconds = Math.floor(t / 1000);
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  const cs = Math.floor((t % 1000) / 10).toString().padStart(2, '0');
  return `${m}:${s}:${cs}`;
}

export function timeFromMinutesSeconds(minutes, seconds) {
  const m = Math.max(0, Number(minutes) || 0);
  const s = Math.min(59, Math.max(0, Number(seconds) || 0));
  return (m * 60 + s) * 1000;
}
