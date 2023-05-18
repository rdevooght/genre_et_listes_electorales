<script lang="ts">
  import {tippy} from 'svelte-tippy';
  import 'tippy.js/dist/tippy.css';

  export let content;
</script>

<span
  class="bg-slate-500 px-2 text-sm rounded-full text-white"
  use:tippy={{
    content: content,
    placement: 'bottom',
    allowHTML: true,
    interactive: true,
  }}
>
  ?
</span>