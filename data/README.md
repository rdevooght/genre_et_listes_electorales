# Description

Les fichiers candidates.csv et candidates.json contiennent les mêmes données, qui sont celles utilisées pour faire les analyses présentées ici: https://blog.robindevooght.be/genre_et_listes_electorales/

Les données de listes électorales et de votes proviennent de la [Direction des Elections du SPF Intérieur](https://elections.fgov.be/elections-du-26-mai-2019-tableaux-des-resultats). Ces données ont été compilées et reformatées pour être plus facilement analysables.

Il n’existe pas de données publiques sur le genre ni sur le sexe légal des candidat·es. En l’absence de celles-ci j’ai combiné une récolte manuelle de données, et une estimation automatisée du genre basé sur les prénoms des candidats et sur les données publiques de prénoms donnés à la naissance [en Belgique](https://statbel.fgov.be/fr/themes/population/noms-et-prenoms/prenoms-filles-et-garcons#figures) et [en France](https://www.insee.fr/fr/statistiques/2540004#consulter).

Le genre de près de 300 candidat·es a été vérifié manuellement (via la manière dont ils ou elles sont adressé·es dans les médias), en particulier les candidat·es au places stratégiques ou ayant obtenu beaucoup de voix. Pour les autres, le taux d’erreur est estimé à moins de 1%. Les effets observés sont suffisamment importants pour que les conclusions ne soient pas affectées par ces erreurs.

Si vous observez des erreurs dans les données ci-dessus, merci de me prévenir et je les corrigerai immédiatement. Je tiens à présenter mes excuses à toute personne que j’aurais mégenré dans les données ci-dessus.

Dans les fichier de données, la valeur de "guessed_sex" peut être "F" pour une femme, "M" pout un homme ou "U" quand une vérification manuelle a été tentée mais qu'aucune information fiable n'a été trouvée.
La valeur de "error_prob" est une estimation de la probabilité que le genre estimé sur base du prénom soit faux, étant donné les statistiques de fréquence des prénoms dont je dispose. Quand une vérification manuelle a été effectuée, la valeur de "error_prob" a été mise à 0 pour le distinguer du reste, même si en réalité des erreurs restent possibles.

Je serais ravis d'aider d'autres personnes à utiliser ces données, donc n'hésitez pas à me contacter pour:
- poser des questions sur les données,
- proposer une collaboration sur une analyse,
- ou simplement partager ce que vous avez fait.

-> robin.devooght[at]mailo.com

## License
This database is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. 
Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/

En français, cela veut dire à peu prêt ceci:
Vous êtes libres :
- de partager.
- de créer.
- d'adapter.

Tant que:
- Vous mentionnez la paternité.
- Vous partagez aux conditions identiques.
- Gardez ouvert. 