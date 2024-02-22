<script>
  import { gender_colors } from "../utils/colors";
  import HorizontalStackedBar from "./HorizontalStackedBar.svelte";
    import TetesListe from "./TetesListe.svelte";
  import Tooltip from "./Tooltip.svelte";

  const tooltip_text = `La deuxième place est aussi une place stratégique, mais elle est contrainte par l’obligation d’avoir un homme et une femme parmi les deux premières places. On y trouve donc logiquement 69% de femmes.<br><br>
Il n’y a par contre pas de contrainte sur la troisième place, et on y trouve, à nouveau, 69% d’hommes.<br><br>
La dernière place est aussi considérée comme une place stratégique. Plus visible, elle a tendance à attirer plus de voix que les places de milieu de liste.
  `

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

  <p class="mb-2">L’inégalité emprunte deux principaux chemins :</p>
  <ol class="ml-5 list-decimal">
    <li>
      Les listes impaires auront tendance à contenir plus d’hommes que de femmes
      <Tooltip content="Parmi les 364 listes effectives, 183 ont un nombre impair de candidat·es. Les 181 listes de longueur paire doivent, légalement, être paritaires">?</Tooltip>.
    </li>
    <li>
      Les  places stratégiques (première, troisième et dernière places
      <Tooltip content={tooltip_text}>?</Tooltip>
      ) ont tendance à compter plus d’hommes que de femmes.
    </li>
  </ol>

  <p>Voyons comment ces observations changent en fonction des élections et des partis:</p>

  <TetesListe id="tetes-listes"/>

  <p>
    Une lecture rapide permet de noter que les listes Vlaams-Belang, le PS et la NVA ont moins de 20% de femmes dans les premières places 
    tandis que les listes SPA, Groen, Open-VLD, Ecolo ont plus de 40% de femmes aux 1e et 3e places.
  </p>
</div>
