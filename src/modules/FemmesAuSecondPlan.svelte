<script>
  import { gender_colors } from "../utils/colors";
  import HorizontalStackedBar from "./HorizontalStackedBar.svelte";
    import TetesListe from "./TetesListe.svelte";
  import Tooltip from "./Tooltip.svelte";



</script>
<div>
  <h2>Les femmes au second plan</h2>
  <p>
  La loi sur la parité de 2002 impose aux listes électorales d’avoir un homme et une femme dans les deux premières positions, 
  et que la différence entre le nombre de femmes et d’hommes sur la liste soit au maximum de 1. 
  Cela laisse à priori peu de marge de manœuvre pour favoriser un genre plutôt qu’un autre au moment de la constitution des listes. 
  Et pourtant, on observe que chaque fois que la loi en laisse la possibilité, les partis ont tendance à mettre les hommes en avant.
  </p>

  <img src="img/lists.png" alt="69% des tetes de listes sont des hommes, 56% des fins de listes sont des hommes, et 66% des listes de longueur impaire ont plus d'hommes que de femmes">

  <p>
    Les places stratégiques (tête de liste, fin de liste, 3<sup>ème</sup> place
    <Tooltip content="Les deux premières places doivent être occupées par une femme et un homme, mais il n’y a pas de contrainte sur la 3ème place. Dans 69% des cas, il s’agit d’un homme.">?</Tooltip>
    ) sont majoritairement occupées par des hommes. 
    Dans les cas où la liste n’est pas paritaire, c’est le plus souvent en faveur des hommes
    <Tooltip content="Parmi les 364 listes effectives, 183 ont un nombre impair de candidat·es. Les 181 listes de longueur paire doivent, légalement, être paritaires">?</Tooltip>.
  </p>

  <p>Voyons comment ces observations changent en fonction des élections et des partis:</p>

  <TetesListe />
</div>