<script>
  import {fly} from 'svelte/transition'
  import {get_lists} from '../utils/data_handlers'
  import {get_rand_elem} from '../utils/utils'
  import {get_party_color} from '../utils/colors'

  const lists = get_lists();

  let random_list = lists[0];
  let rc = get_rand_elem(random_list.candidates);
  let auto_play = true;

  setInterval(() => {
    if (auto_play) {
      random_list = get_rand_elem(lists);
      rc = get_rand_elem(random_list.candidates);
    }
  }, 5000)

  function show_candidate(list, c) {
    random_list = list;
    rc = c;
  }

</script>

<div 
  class="relative rounded p-1 border bg-slate-50 mb-3" 
  on:mouseover={() => auto_play = false} on:mouseout={() => auto_play = true}
  on:focus={() => auto_play = false} on:blur={() => auto_play = true}
>

  <div class="text-lg px-2">{rc.first_name} {rc.last_name}</div>

  <div class="flex flex-col sm:flex-row sm:gap-3 mb-2 px-2">
    <div>
      n°{rc.position} sur la liste {#if rc.status == 'suppléant'} des suppléant·es{/if} 
      <span class="inline-block px-1 rounded text-white" style:background-color={get_party_color(rc)}>{rc.party}</span> 
    </div>
    <div>
      <span class="text-gray-500">Elections:</span> {rc.election}
    </div>
    <div>
      <span class="text-gray-500">Circonscription:</span> {rc.circonscription}
    </div>
  </div>

  <div class="flex flex-row flex-wrap justify-between gap-[1px] sm:gap-[2px]">

    {#each lists as list, i (i)}
        {#each list.candidates as c, j (j)}
          <div title={c.last_name} class="candidate" 
            class:selected_list={list === random_list} 
            class:selected={c === rc}
            style:background-color={(list === random_list) ? get_party_color(c) : '#e2e8f0'}
            style:border-color={(list === random_list) ? get_party_color(c) : ''}
            on:mouseenter={() => show_candidate(list, c)}
            on:click={() => show_candidate(list, c)}
            >
          </div>
        {/each}
    {/each}
  </div>
</div>



<style>
  .selected_list.selected {
    transform: scale(1.5);
    background-color: white;
  }
  .candidate {
    width: 4px;
    height: 4px;
  }

  @media (min-width: 680px) { 

    .candidate {
      width: 7px;
      height: 7px;
    }
  }

</style>