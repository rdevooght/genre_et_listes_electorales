<script>
  const with_without_dev = [
    {"group":"Chambre des représentants","with_devolution":"42.7%","without_devolution":"46%"},
    {"group":"Parlement Flamand","with_devolution":"46.8%","without_devolution":"50%"},
    {"group":"Parlement Wallon","with_devolution":"41.3%","without_devolution":"38.7%"},
    {"group":"Parlement Bruxellois","with_devolution":"43.8%","without_devolution":"52.8%"},
    {"group":"Parlement de la Communauté germanophone","with_devolution":"36%","without_devolution":"24%"},
    {"group":"Parlement européen (député·es Belges)","with_devolution":"42.9%","without_devolution":"42.9%"},
  ];
  const with_without_dev_total = {"with_devolution":"43.4%","without_devolution":"45.9%"};

  function evolution_symbol(a, b) {
    if (a < b) {
      return '↗';
    } else if (a > b) {
      return '↘';
    } else {
      return '→';
    }
  }

</script>

<table class="w-full rounded overflow-hidden">
  <thead class="bg-slate-200 dark:bg-slate-800">
    <tr>
      <th rowspan="2">Election</th><th colspan="3" class="w-1/2 sm:w-2/3">% de femmes</th>
    </tr>
    <tr>
      <th>Avec Dévolution</th>
      <th>&rightarrow;</th>
      <th>Sans Dévolution</th>
    </tr>
  </thead>
  <tbody>
    {#each with_without_dev as row, i}
    <tr>
      <td>{row.group}</td>
      <td class="text-center">{row.with_devolution}</td>
      <td class="text-center">{evolution_symbol(row.with_devolution, row.without_devolution)}</td>
      <td class="text-center">{row.without_devolution}</td>
    </tr>
    {/each}
  </tbody>
  <tfoot class="bg-slate-200 dark:bg-slate-800">
    <tr class="border-t-2 border-slate-600 font-bold">
      <td>Total</td>
      <td class="text-center">{with_without_dev_total.with_devolution}</td>
      <td class="text-center">{evolution_symbol(with_without_dev_total.with_devolution, with_without_dev_total.without_devolution)}</td>
      <td class="text-center">{with_without_dev_total.without_devolution}</td>
    </tr>
  </tfoot>
</table>

<style>
  td {
    padding: 4px;
  }
  tbody tr:last-child td {
    padding-bottom: 8px;
  }
  tfoot tr:first-child td {
    padding-top: 8px;
  }
  tbody tr:nth-child(even) {
    @apply bg-slate-100;
  }

  @media only screen and (prefers-color-scheme: dark) {
    tbody tr:nth-child(even) {
      background-color: #324054;
    }
  }

</style>