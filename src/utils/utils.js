export function get_rand_elem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

export let to_percent = Intl.NumberFormat('fr-BE', {style: 'percent', maximumFractionDigits:1}).format;