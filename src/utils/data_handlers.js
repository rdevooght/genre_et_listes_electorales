import candidates from '../../data/candidates.json';
import {groups, rollups} from 'd3-array'

export {candidates};

export function get_ratio_at_position(position, {data=candidates, group_by=null, only_effectives=true, conf=0.95} = {}) {

  const effective_filter = only_effectives ? c => c.status === 'effectif' : c => true;
  const min_list_size_filter = c => c.list_size >= position;
  
  if (group_by === null) {
    const filtered_data = data.filter(effective_filter).filter(min_list_size_filter);
    const men = filtered_data.filter(c => c.guessed_sex === 'M' && c.position === position && c.error_prob < 1 - conf).length;
    const women = filtered_data.filter(c => c.guessed_sex === 'F' && c.position === position && c.error_prob < 1 - conf).length;
    const unsure = filtered_data.filter(c => c.position === 1 && c.error_prob >= position - conf).length;
    const total = men + women + unsure;
    return [{
      'group': 'Toutes les listes', 
      'men': men, 'men_perc': men * 100 / total, 
      'women': women, 'women_perc': women * 100 / total,
      'unsure': unsure, 'unsure_perc': unsure * 100 / total,
    }];
  } else {
    return rollups(data, v => get_ratio_at_position(position, {data: v, only_effectives, conf})[0], c => c[group_by])
              .map(g => Object.assign(g[1], {group: g[0]}));
  }
}

export function get_tete_liste_ratio(options = {}) {
  return get_ratio_at_position(1, options);
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

/**
 * Helper function for the get_performances function.
 * Compute the number of candidates who overperformed, underperformed or were correctly position in the list passed as argument.
 * @param {Array} candidates : list of candidates
 * @returns Object: {'better': number, 'worse': number, 'equal': number}
 */
function _count_performances(candidates) {
  return {
    'better': candidates.filter(c => c.performance === "better").length,
    'worse': candidates.filter(c => c.performance === "worse").length,
    'equal': candidates.filter(c => c.performance === "equal").length,
  };
}

/**
 * Compute the number of men and women who overperformed, underperformed or were correctly position.
 * It is computed over all the candidates, or grouped by a given variable.
 * The data is returned in the form [{
 *  'group': group_name,
 *  'women': {'better': number, 'worse': number, 'equal': number},
 *  'men': {'better': number, 'worse': number, 'equal': number},
 * }]
 */
export function get_performances({data=candidates, group_by=null, only_effectives=true, conf=0.95} = {}) {
  const effective_filter = only_effectives ? c => c.status === 'effectif' : c => true;

  // Because we ignore the last candidates, we need at least 3 candidates to have the possibility of over or underperforming
  // TODO: We could however consider the last candidate in the special case where there are only 2 candidates, and drop that min size to 2
  const min_list_size_filter = c => c.list_size >= 3; 
  
  if (group_by === null) {
    const filtered_data = data.filter(effective_filter).filter(min_list_size_filter);
    const men = filtered_data.filter(c => c.guessed_sex === 'M' && c.error_prob < 1 - conf);
    const women = filtered_data.filter(c => c.guessed_sex === 'F' && c.error_prob < 1 - conf);

    return [{
      'group': 'Toutes les listes', 
      'men': _count_performances(men), 
      'women': _count_performances(women),
    }];
  } else {
    return rollups(data, v => get_performances({data: v, only_effectives, conf})[0], c => c[group_by])
              .map(g => Object.assign(g[1], {group: g[0]}));
  }
}