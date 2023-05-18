export const gender_colors = {
  'F': '#813bb0',
  'M': '#cda318',
  'U': 'gray',
};

const soft_gender_colors = {
  'F': '#A366CC',
  'M': '#E5B824',
  'U': 'gray',
};

const main_party_colors = {
  'PS': '#ff0000',
  'ECOLO': '#99cc33',
  'GROEN': '#99cc33',
  'N-VA': '#f2bd2e',
  'VLAAMS BELANG': '#ffed00',
  'Open Vld': '#0087dc',
  'MR': '#0047ab',
  'CD&V': '#ff8000',
  'sp.a': '#e30613',
  'CDH': '#ff5919',
  'PVDA': '#cc0000',
  'PTB': '#cc0000',
  'PTB*PVDA': '#cc0000',
  'DéFI': '#e11482',
};

const elections_colors = {
  "Parlement européen": '#1f77b4',
  "Chambre": '#ff7f0e',
  "Parlement wallon": '#2ca02c',
  "Parlement de la Région de Bruxelles-Capitale": '#d62728',
  "Parlement flamand": '#9467bd',
  "Parlement de la Communauté germanophone": '#8c564b',
}

function make_get_with_default_func(dict, def) {
  const f = val => {
    if (dict[val] !== undefined) {
      return dict[val]
    } else {
      return def;
    }
  }
  return f;
}

const party_colors = make_get_with_default_func(main_party_colors, '#aaa');

/***

The following functions take a candidate object as argument and return a color

 */

export const get_party_color = c => party_colors(c.party);
export const get_election_color = c => elections_colors[c.election];
export function get_gender_color(candidate) {
  if (candidate.error_prob == 0) {
    return gender_colors[candidate.guessed_sex];
  } else if (candidate.error_prob == 1 || candidate.guessed_sex == 'U') {
    return gender_colors['U'];
  } else {
    return soft_gender_colors[candidate.guessed_sex];
  }
}


// copied from https://gist.github.com/jdarling/06019d16cb5fd6795edf
var random_color = (function(){
  var golden_ratio_conjugate = 0.618033988749895;
  var h = Math.random();

  var hslToRgb = function (h, s, l){
      var r, g, b;

      if(s == 0){
          r = g = b = l; // achromatic
      }else{
          function hue2rgb(p, q, t){
              if(t < 0) t += 1;
              if(t > 1) t -= 1;
              if(t < 1/6) return p + (q - p) * 6 * t;
              if(t < 1/2) return q;
              if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
              return p;
          }

          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
  };
  
  return function(){
    h += golden_ratio_conjugate;
    h %= 1;
    return hslToRgb(h, 0.5, 0.60);
  };
})();

export function color_is_light(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? true : false;
}