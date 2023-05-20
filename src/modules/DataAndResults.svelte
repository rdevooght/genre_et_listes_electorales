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
  <h2>6927 candidat·es, 484 élu·es</h2>


  <p>
  Le 26 mai 2019, les belges ont voté pour élire leurs député·es aux parlements régionaux, communautaires, fédéral et européen.
  </p>
  <p>
  Ce jour-là, 484 sièges étaient en jeu. 6927 candidat·es réparti·es sur 364 listes.  
  </p>

  <AllCandidates />

  <p>
    Des données d’une telle ampleur permettent d’identifier certaines pratiques récurrentes.
    Voyons d’abord le résultat de ces élections
  </p>

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


  <p>
  Aucun parlement n’a donc atteint la parité. Certains sont proches de la parité, mais il est bon de garder quelques éléments en tête:
  </p>
  <ul class="ml-5">
    <li>
      Nous ne sommes pas dans une situation où il y a tantôt une légère majorité de femme, tantôt une légère majorité d’homme: 
      Il y a eu, systématiquement, dans le passé comme aujourd’hui, une majorité d’homme au parlement.
    </li>
    <li>Les femmes représentent 52% de la population adulte, pas 50%.</li>
    <li>Une différence de quelques sièges peut jouer beaucoup au sein d’un parlement.</li>
  </ul>
  <p>
  Pourquoi y a-t-il plus d’hommes élus ? Une réponse est simplement que les hommes récoltent plus de voix que les femmes. Non seulement cette réponse ne fait que repousser la question un pas plus loin, mais en plus elle n’est pas entièrement exacte, comme nous le montrons en analysant l’impact du système de dévolution.
  </p>
  <p>
  Les causes de cette disparité sont complexes et variées, mais nous argumentons ici que les partis, au moment de la création des listes, ont joué un rôle important dans le maintien de cette inégalité d’accès aux parlements.
  </p>
</div>