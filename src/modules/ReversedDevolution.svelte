<script>
  import { slide } from 'svelte/transition';
  import HorizontalStackedBar from './HorizontalStackedBar.svelte';
  import { gender_colors } from '../utils/colors';

  const per_parliament = [
    { "group": "Chambre des représentants", "standard": 42.7, "reverse": 45.3 },
    { "group": "Parlement Flamand", "standard": 46.8, "reverse": 48.4 },
    { "group": "Parlement Wallon", "standard": 41.3, "reverse": 57.3 },
    { "group": "Parlement Bruxellois", "standard": 43.8, "reverse": 46 },
    { "group": "Parlement de la Communauté germanophone", "standard": 36, "reverse": 36 },
    { "group": "Parlement européen (député·es Belges)", "standard": 42.9, "reverse": 38.1 },
  ];
  const total = { "group": "Total", "standard": 43.4, "reverse": 47.3 };

  const views = [
    {name: 'Global', data: [total]},
    {name: 'Par Election', data: per_parliament},
  ]

  let current_view = views[0];

  function change_view(v) {
    current_view = v;
  }
</script>

<div class="py-4">

  <div class="button-group">
    {#each views as v}
      <button 
        class:active={current_view === v}
        on:click={() => change_view(v)}
      >{v.name}</button>
    {/each}
  </div>

  <div>
      {#each current_view.data as r, i (i)}
      <table class="w-full mt-1 mb-3" transition:slide>
        <caption class="w-full text-left text-lg font-semibold mb-1">{r.group}</caption>
        <tr class="mb-1">
          <td class="pr-3 w-1/12 whitespace-nowrap">
            Dévolution normale
          </td>
          <td>
            <HorizontalStackedBar
              data={[
                { name: "Femmes", value: r.standard, color: gender_colors.F },
                { name: "Hommes", value: 100 - r.standard, color: gender_colors.M },
              ]}
            />
          </td>
        <tr>
          <td>Dévolution inversée</td>
          <td>
            <HorizontalStackedBar
              data={[
                { name: "Femmes", value: r.reverse, color: gender_colors.F },
                { name: "Hommes", value: 100 - r.reverse, color: gender_colors.M },
              ]}
            />
          </td>
        </tr>
      </table>
      {/each}
  </div>

  <legend>
    <ul>
      <li class="list-none mb-0">
        <span class="inline-block w-3 h-3" style:background-color={gender_colors.F}></span> 
        <span class="text-sm text-gray-600 dark:text-gray-300">Pourcentage de sièges obtenus par des femmes</span></li>
      <li class="list-none">
        <span class="inline-block w-3 h-3" style:background-color={gender_colors.M}></span>
        <span class="text-sm text-gray-600 dark:text-gray-300">Pourcentage de sièges obtenus par des hommes</span></li>
    </ul>
  </legend>
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