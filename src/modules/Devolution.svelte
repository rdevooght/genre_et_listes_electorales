<script>
    import ReversedDevolution from "./ReversedDevolution.svelte";
    import NoDevolution from "./NoDevolution.svelte";
</script>

<div>
    <h2>Impact des voix de dévolution</h2>
    <p>
    Être positionné en tête de liste est un avantage en termes de visibilité pendant la campagne et dans les bureaux de vote, et joue à priori un rôle dans l’obtention d’un plus grand nombre de voix de préférences. Mais ce n’est pas le seul avantage d’une position en début de liste, en effet, la tête de liste sera la première personne à bénéficier du système de dévolution des voix.
    </p>

    <div class="rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700 border p-2 mb-4 w-fit">
      <p>
        <span class="text-lg font-bold">Comment fonctionne la dévolution ?</span><br/>
        <span class="text-xs text-gray-500 italic">En simplifiant quelques détails</span>
      </p>
      <p> 
      La moitié des voix attribuées à la liste et non à des candidat·es spécifiques forme un pot. 
      Les voix de ce pot sont attribuées à la tête de liste, jusqu’à ce qu’elle ait assez de voix pour être élue. 
      </p>
      <p>
      S’il reste des voix dans le pot après cette opération, les voix restantes sont attribuées à la deuxième personne dans la liste, 
      jusqu’à ce qu’elle atteigne le nombre de voix pour être élue, et ainsi de suite jusqu’à épuisement des voix.
      </p>
      <p class="mb-0">
        C’est ainsi que pour une liste ayant obtenu un seul siège, 
        ce siège sera probablement donné à la tête de liste, 
        même dans le cas où un·e autre candidat·e aurait obtenu plus de voix de préférence.
      </p>
    </div>
    
    <p>
      Voici deux expériences qui permettent de mesurer l’impact du système de dévolution, et la manière dont les hommes, 
      en occupant majoritairement les têtes de liste, en bénéficient.
    </p>
    <h3>Sans la dévolution</h3>
    
    
    <p>
      Que se passerait-il sans le système de dévolution ? 
      Sans dévolution, les sièges seraient attribués uniquement sur base des voix de préférence, 
      et <strong>le pourcentage de femmes élues passerait de 43,4% à 45,9%, avec 12 femmes de plus élues</strong>.
    </p>

    <p>
      En regardant de plus près, on observe que le système de dévolution des voix a avantagé les hommes dans la plupart des élections de 2019, 
      mais pas partout, les parlements wallon et germanophone faisant exception.
    </p>
    
    <NoDevolution />
    
    
    <h3>En inversant les deux premières places</h3>
    
    
    <p>
      On a vu que sans le coup de pouce de la dévolution, les hommes perdraient plusieurs sièges. 
      Mais que se passerait-il si la dévolution bénéficiait plus aux femmes qu’au hommes ? 
    </p>
    <p>
      Pour le voir, inversons les candidat·es des deux premières places avant d’appliquer la dévolution des voix. 
      Au lieu de 31% de femmes parmi les premièr·es bénéficiaires de la dévolution, il y en aurait 69%.
    </p>
    <p>
    Dans cette situation, <strong>les femmes obtiendraient 47,3% des sièges au lieu de 43,4%, avec 19 femmes élues de plus</strong>.
    </p>

    <p>
      L’ampleur du changement varie d’une élection à l’autre, et est inverse pour le parlement européen, où il aurait mené à moins de femmes élues.
    </p>

    <ReversedDevolution />
</div>

