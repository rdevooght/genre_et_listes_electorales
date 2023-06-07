<script>
    import ExplorateurDePerformances from "./ExplorateurDePerformances.svelte";

</script>

<div>

    <h2>Les candidates dépassent les attentes</h2>
    <p>
      Les différents partis pourraient invoquer une variété de raisons afin d'expliquer cette relégation des femmes au second plan. 
      Retenons en-une, souvent entendue : 
      les candidates se trouveraient reléguées à des places moins stratégiques, non pas du fait qu'elles sont des femmes, 
      mais du fait qu'elles sont moins populaires. 
      La raison de cette inégalité serait la conséquence malheureuse d'un calcul électoral raisonné : 
      les places stratégiques doivent revenir aux candidat·es qui rapportent des voix.
    </p>
    <p>
      Laissons de côté la faiblesse de la raison invoquée (Les candidats ne deviennent-ils pas populaires après qu'ils aient été mis à des places stratégiques ?). 
      Et demandons-nous, plus simplement, si les candidates sont aussi impopulaires que ce raisonnement le présuppose. 
      En réalité, il est possible de montrer que les listes sous-estiment généralement la capacité des femmes à obtenir des voix, 
      et sur-estiment les voix que vont obtenir les hommes.
    </p>
    <p>
      Pour le voir, comparons le classement des candidat·es sur leurs listes électorales avec leur classement en termes de voix de préférence. 
    </p>
    <img src="img/performance.png" alt="Exemple d'une comparaison des positions des canditat·es sur une liste fictive, et en termes de voix de préférence"/>
    <p>
      Certain·es candidat·es dépassent les attentes et ont une meilleure place en termes de voix de préférence que dans la liste électorale. 
      On peut l'interpréter comme une sous-estimation, de la part du parti, de la capacité du ou de la candidat·e à obtenir des voix.
    </p>
    <p>
      A l’inverse, certain·es candidat·es ont perdu des places, leur position dans la liste était plus élevée que leur capacité à obtenir des voix.
    </p>
    
    
    <p>
      On peut maintenant poser la question: les femmes sont-elles plus souvent sous-estimées que les hommes ? 
      Pour les élections de 2019, la conclusion est très claire: 
      les femmes ont eu tendance à gagner des places, tandis que que les hommes ont eu tendance à perdre des places.
    </p>

    <ExplorateurDePerformances />
</div>