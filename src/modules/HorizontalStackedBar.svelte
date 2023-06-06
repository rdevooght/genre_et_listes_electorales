<script>
  import { color_is_light } from "../utils/colors";
  import {to_percent} from "../utils/utils";
  export let data;

  // Calculate the total value of all data points
  $: total = data.reduce((acc, item) => acc + item.value, 0);

  // Calculate the percentage width for each data point
  $: bars = data.filter(d => d.value > 0).map(item => ({
    ...item,
    width: (item.value / total) * 100,
    ratio: item.value / total
  }));

  function get_tooltip(bar) {
    if (Math.abs(bar.value - bar.ratio*100) > 0.1) {
      return `${bar.name}: ${bar.value} (${to_percent(bar.ratio)})`;
    }
    return `${bar.name}: ${to_percent(bar.ratio)}`;
  }
</script>

<div class="w-full flex">
  {#each bars as bar}
    <div 
      class="bar text-center" 
      class:text-white={!color_is_light(bar.color)}
      class:text-gray-800={color_is_light(bar.color)}
      style:background-color={bar.color}
      style:width={`${bar.width}%`}
      data-tooltip={get_tooltip(bar)}
    >
      {#if bar.showName === true }<span class="bar-title">{bar.name}: </span>{/if}
      {#if bar.showPercent !== false }<span>{to_percent(bar.ratio)}</span>{/if}
    </div>
  {/each}
</div>

<style>
  .bar {
    height: 30px;
  }

  .bar:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .bar:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
