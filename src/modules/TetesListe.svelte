<script>
  import { slide } from 'svelte/transition';
  import {get_tete_liste_ratio, get_fin_de_liste_ratio, get_ratio_at_position} from '../utils/data_handlers'
  import HorizontalStackedBar from './HorizontalStackedBar.svelte';
  import { gender_colors } from '../utils/colors';
  import {sort} from 'd3-array'

  const views = [
    {name: 'Global', options: {}},
    {name: 'Par Election', options: {group_by: 'election'}},
    {name: 'Par Parti', options: {group_by: 'simplified_party'}},
  ]

  const positions = [
    {name: 'Tetes de liste', getter: get_tete_liste_ratio},
    {name: '3ème place', getter: x => get_ratio_at_position(3, x)},
    {name: 'Fins de liste', getter: get_fin_de_liste_ratio}
  ]

  let current_view = views[1];
  let current_position = positions[0];
  $: ratios = sort(current_position.getter(current_view.options), d => d.women_perc)
  $: console.log(ratios)

  function change_view(v) {
    current_view = v;
  }

  function change_position(p) {
    current_position = p;
  }

</script>

<div class="py-4">

  <div class="flex flex-col sm:flex-row gap-5 w-full justify-between">
    <div class="button-group">
      {#each views as v}
        <button 
          class:active={current_view === v}
          on:click={() => change_view(v)}
        >{v.name}</button>
      {/each}
    </div>

    <div class="button-group">
      {#each positions as p}
        <button 
          class:active={current_position === p}
          on:click={() => change_position(p)}
        >{p.name}</button>
      {/each}
    </div>
  </div>

  <div id="tetes_liste">
      {#each ratios as r, i (i)}
      <div class="mt-1 mb-3" transition:slide>
        <caption class="w-full text-left">{r.group}</caption>
        <HorizontalStackedBar
          data={[
            { name: "Femmes", value: r.women, color: gender_colors.F },
            { name: "Inconnu", value: r.unsure, color: gender_colors.U, showPercent: false },
            { name: "Hommes", value: r.men, color: gender_colors.M, showName: i === 0 },
          ]}
        />
      </div>
      {/each}
  </div>
</div>

<style>
  .button-group {
    display: flex;
    gap: 0;
  }
  .button-group button {
    flex: auto;
    border-radius: 0;
    padding: 10px 15px;
    color: #415462;
    @apply bg-amber-100;
  }
  .button-group button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .button-group button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .button-group button.active {
    @apply bg-amber-300;
  }
</style>
