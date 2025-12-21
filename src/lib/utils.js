export function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function clamp(n, min, max){
  return Math.max(min, Math.min(max, n));
}

export function calcDps(damage, cooldown){
  if (!cooldown || cooldown <= 0) return 0;
  return damage / cooldown;
}

export function fmt(n, digits=2){
  if (Number.isNaN(n) || n === null || n === undefined) return '';
  const d = Math.pow(10, digits);
  return (Math.round(n * d) / d).toString();
}

export function calcLevelStat(base, perLevel, level){
  return base + (perLevel || 0) * (level - 1);
}
