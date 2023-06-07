<script>
    import HorizontalStackedBar from "./HorizontalStackedBar.svelte";
    import { gender_colors } from "../utils/colors";
    import AllCandidates from "./AllCandidates.svelte";

    const parliamentData = [
      { name: "Chambre des représentants", F: 42.7, M: 57.3 },
      { name: "Parlement Flamand", F: 46.8, M: 53.2 },
      { name: "Parlement Wallon", F: 41.3, M: 58.7 },
      { name: "Parlement Bruxellois", F: 43.8, M: 56.2 },
      { name: "Parlement de la Communauté germanophone", F: 36, M: 64 },
      { name: "Parlement européen (député·es Belges)", F: 42.9, M: 57.1 },
      { name: "Au Total", F: 43.4, M: 56.6 },
    ];

</script>
<div>
  <h2>6927 candidat·es</h2>


  <p>
  Le 26 mai 2019, les belges ont voté pour élire leurs député·es aux parlements régionaux, communautaires, fédéral et européen.
  </p>
  <p>
  Ce jour-là, 484 sièges étaient en jeu. 6927 candidat·es réparti·es sur 364 listes.  
  </p>

  <AllCandidates />

  <p>
    Des données d’une telle ampleur permettent d’identifier certaines pratiques récurrentes.
  </p>

  <h2>484 élu·es</h2>

  <p>
    Commençons par jeter un coup d'œil aux résultats de ces élections : 
    aucun parlement n’atteint la parité.
  </p>

  <div class="mb-6">
    {#each parliamentData as parliament, i}
    <div class="mt-1 mb-3">
      <caption class="w-full text-left">{parliament.name}</caption>
      <HorizontalStackedBar
        data={[
          { name: "Femmes", value: parliament.F, color: gender_colors.F, showName: i === 0},
          { name: "Hommes", value: parliament.M, color: gender_colors.M, showName: i === 0 },
        ]}
      />
    </div>
    {/each}
  </div>

  <p>
    Certains parlements sont proches de la parité, 
    mais il est bon de garder deux faits à l’esprit :
  </p>
  <ul class="ml-5">
    <li>
      Il n’y a pas tantôt une légère majorité de femmes, tantôt une légère majorité d’hommes: 
      Il y a eu, systématiquement, dans le passé comme aujourd’hui, une majorité d’hommes au parlement.
    </li>
    <li>Les femmes constituent 52% de la population adulte, pas 50%.</li>
  </ul>
  <p>Par ailleurs, une différence de quelques sièges peut jouer beaucoup au sein d’un parlement.</p>
  <p>
    Comment explique-t-on qu'il y ait plus d’hommes élus ? Les causes de cette disparité sont complexes et variées. 
    Pour autant, la façon dont les partis constituent leurs listes électorales semble bien être un des facteurs importants.
  </p>
</div>