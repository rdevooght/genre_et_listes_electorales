<script>
  import {fly} from 'svelte/transition'
  import {get_lists} from '../utils/data_handlers'
  import {get_rand_elem} from '../utils/utils'
  import {get_party_color} from '../utils/colors'

  const lists = get_lists();

  let random_list = lists[0];
  $: rc = get_rand_elem(random_list.candidates);

  setInterval(() => {
    random_list = get_rand_elem(lists);
  }, 5000)

</script>

<div class="relative">

  <div class="flex flex-row flex-wrap justify-between">

    {#each lists as list, i}
        {#each list.candidates as c}
          <div title={c.last_name} class="h-3 w-3 text-[6px] text-center border m-[1px] transition-all" 
            class:selected_list={list === random_list} 
            class:selected={c === rc}
            style:box-shadow={(list === random_list) ? `0 0 3px ${get_party_color(c)}` : ''}
            style:border-color={(list === random_list) ? get_party_color(c) : ''}
            >
            {#if (list === random_list)}
              {c.position}
            {/if}
          </div>
        {/each}
    {/each}
  </div>

  <div
    class="absolute top-1/3 left-1/2 rounded border bg-white bg-opacity-60 p-3 w-[400px] -ml-[200px]"
    >
    <span class="text-lg">{rc.first_name} {rc.last_name}</span><br>
    n°{rc.position} sur la liste {#if rc.status == 'suppléant'} des suppléant·es{/if} 
    <span class="inline-block px-1 rounded text-white" style:background-color={get_party_color(rc)}>{rc.party}</span> 
    <br>
    Elections: {rc.election}<br>
    Circonscription: {rc.circonscription}
  </div>
</div>



<style>
  .selected_list.selected {
    transform: scale(1.5);
    background-color: white;
  }

  .selected_list {
    /* transform: scale(1.1); */
  }
</style>