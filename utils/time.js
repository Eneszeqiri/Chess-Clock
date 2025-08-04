export const INITIAL_TIME = 5 * 60 * 1000;

export function formatTime(t) {
  const totalSeconds = Math.floor(t / 1000);
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  const cs = Math.floor((t % 1000) / 10).toString().padStart(2, '0');
  return `${m}:${s}:${cs}`;
}

export function parseTimeString(str) {
  const parts = str.split(':');
  if (parts.length !== 3) return INITIAL_TIME;
  const m = parseInt(parts[0], 10) || 0;
  const s = parseInt(parts[1], 10) || 0;
  const ms = parseInt(parts[2], 10) || 0;
  return m * 60 * 1000 + s * 1000 + ms;
}
