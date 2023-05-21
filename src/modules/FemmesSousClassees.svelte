<script>
    import ExplorateurDePerformances from "./ExplorateurDePerformances.svelte";

</script>

<div>

    <h2>Les candidates dépassent les attentes</h2>
    <p>
      On pourrait argumenter que si les femmes n’occupent pas les places stratégiques, c’est parce que les listes reflètent la popularité des candidat·es. 
      En réalité, les listes sous-estiment généralement la capacité des femmes à obtenir des voix, et sur-estiment les voix que vont obtenir les hommes.
    </p>
    <p>
      Pour le voir, comparons la position des candidat·es dans les listes avec leur classement en termes de voix de préférence. 
    </p>
    <img src="img/performance.png" alt="Exemple d'une comparaison des positions des canditat·es sur une liste fictive, et en termes de voix de préférence"/>
    <p>
      Certain·es candidat·es dépassent les attentes et ont une meilleure place en termes de voix de préférence que dans la liste électorale. 
      On peut l'interpréter comme une sous-estimation, de la part du parti, de la capacité du ou de la candidat·e à obtenir des voix.
    </p>
    <p>
      A l’inverse, certain·es candidates ont perdu des places, leur position dans la liste était plus élevée que leur capacité à obtenir des voix.
    </p>
    
    
    <p>
      Sur l’ensemble des élections, on observe que les femmes ont eu tendance à gagner des places, et que les hommes ont eu tendance à perdre des places.
    </p>

    <ExplorateurDePerformances />
</div>