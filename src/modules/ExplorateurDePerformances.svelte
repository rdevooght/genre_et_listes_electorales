<script>
  import { slide } from 'svelte/transition';
  import { get_performances } from '../utils/data_handlers'
  import HorizontalStackedBar from './HorizontalStackedBar.svelte';
  import { positive_negative_neutral_colors as colors, gender_colors } from '../utils/colors';
  import {sort} from 'd3-array'

  const views = [
    {name: 'Global', options: {}},
    {name: 'Par Election', options: {group_by: 'election'}},
    {name: 'Par Parti', options: {group_by: 'simplified_party'}},
  ]

  let current_view = views[0];
  $: ratios = sort(get_performances(current_view.options), d => d.women_perc)
  $: console.log(ratios)

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
      {#each ratios as r, i (i)}
      <table class="w-full mt-1 mb-3" transition:slide>
        <caption class="w-full text-left text-lg font-semibold mb-1">{r.group}</caption>
        <tr class="mb-1">
          <td class="pr-3 w-1/12">
            Femmes
          </td>
          <td>
            <HorizontalStackedBar
              data={[
                { name: "Places gagnées", value: r.women.better, color: colors.positive },
                { name: "Places conservées", value: r.women.equal, color: colors.neutral },
                { name: "Places perdues", value: r.women.worse, color: colors.negative },
              ]}
            />
          </td>
        <tr>
          <td style:border-color={gender_colors.M}>Hommes</td>
          <td>
            <HorizontalStackedBar
              data={[
                { name: "Places gagnées", value: r.men.better, color: colors.positive },
                { name: "Places conservées", value: r.men.equal, color: colors.neutral },
                { name: "Places perdues", value: r.men.worse, color: colors.negative },
              ]}
            />
          </td>
        </tr>
      </table>
      {/each}
  </div>

  <div class="lg:flex lg:justify-between lg:w-full lg:gap-6">
    <legend class="lg:shrink-0">
      <ul class="mb-2">
        <li class="list-none mb-0">
          <span class="inline-block w-3 h-3" style:background-color={colors.positive}></span> 
          <span class="text-sm text-gray-600">Meilleur classement en termes de voix que dans la liste</span>
        </li>
        <li class="list-none mb-0">
          <span class="inline-block w-3 h-3" style:background-color={colors.neutral}></span> 
          <span class="text-sm text-gray-600">Même classement en termes de voix que dans la liste</span>
        </li>
        <li class="list-none mb-0">
          <span class="inline-block w-3 h-3" style:background-color={colors.negative}></span> 
          <span class="text-sm text-gray-600">Moins bon classement en termes de voix que dans la liste</span>
        </li>
      </ul>
    </legend>

    <p class="text-xs text-gray-500 italic lg:text-right">
      On ne tient pas compte ici des candidat·es à la dernière position dans les listes, 
      car il est attendu de leur part d’obtenir un meilleur classement que leur position dans la liste.
    </p>
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
