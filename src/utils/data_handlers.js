import candidates from '../../data/candidates.json';
import {groups, rollups} from 'd3-array'

export {candidates};

export function get_tete_liste_ratio({data=candidates, group_by=null, only_effectives=true, conf=0.95} = {}) {

  const effective_filter = only_effectives ? c => c.status === 'effectif' : c => true;
  
  if (group_by === null) {
    const men = data.filter(c => c.guessed_sex === 'M' && c.position === 1 && c.error_prob < 1 - conf)
                          .filter(effective_filter)
                          .length;
    const women = data.filter(c => c.guessed_sex === 'F' && c.position === 1 && c.error_prob < 1 - conf)
                          .filter(effective_filter)
                          .length;
    const unsure = data.filter(c => c.position === 1 && c.error_prob >= 1 - conf)
                          .filter(effective_filter)
                          .length;
    const total = men + women + unsure;
    return [{
      'group': 'Toutes les listes', 
      'men': men, 'men_perc': men * 100 / total, 
      'women': women, 'women_perc': women * 100 / total,
      'unsure': unsure, 'unsure_perc': unsure * 100 / total,
    }];
  } else {
    return rollups(data, v => get_tete_liste_ratio({data: v, only_effectives, conf})[0], c => c[group_by])
              .map(g => Object.assign(g[1], {group: g[0]}));
  }
}

export function get_fin_de_liste_ratio({data=candidates, group_by=null, only_effectives=true, min_list_size=3, conf=0.95} = {}) {
  const effective_filter = only_effectives ? c => c.status === 'effectif' : c => true;
  const min_list_size_filter = c => c.list_size >= min_list_size;
  
  if (group_by === null) {
    const filtered_data = data.filter(effective_filter).filter(min_list_size_filter);
    const men = filtered_data.filter(c => c.guessed_sex === 'M' && c.position === c.list_size && c.error_prob < 1 - conf)
                          .length;
    const women = filtered_data.filter(c => c.guessed_sex === 'F' && c.position === c.list_size && c.error_prob < 1 - conf)
                          .length;
    const unsure = filtered_data.filter(c => c.position === c.list_size && c.error_prob >= 1 - conf)
                          .length;
    const total = men + women + unsure;
    return [{
      'group': 'Toutes les listes', 
      'men': men, 'men_perc': men * 100 / total, 
      'women': women, 'women_perc': women * 100 / total,
      'unsure': unsure, 'unsure_perc': unsure * 100 / total,
    }];
  } else {
    return rollups(data, v => get_fin_de_liste_ratio({data: v, only_effectives, conf})[0], c => c[group_by])
              .map(g => Object.assign(g[1], {group: g[0]}));
  }
}

export function get_lists() {
  return rollups(candidates, v => ({
    party: v[0].party, election: v[0].election, circonscription: v[0].circonscription, status: v[0].status, candidates: v
  }), d => `${d.party}-${d.election}-${d.circonscription}-${d.status}`).map(d => d[1]);
}