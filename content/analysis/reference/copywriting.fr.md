---
title: Référence de rédaction
linkTitle: Rédaction de mémo
slug: /reference/redaction-de-memo
---

# Référence de rédaction de mémo

Chaque mémo doit être composée des éléments détaillés ci-dessous. Vous devez suivre cette structure lors de la rédaction.

## Titre

- Rédiger une courte phrase déclarative pour mettre en avant le changement clé.
- 140 caractères maximum.
- Utiliser le nom du service comme sujet.
- Écrire au présent.
- Préférer les formulations actives aux formulations passives (« Meta étend la portée de… » plutôt que « La portée de… est étendue par Meta »).
- Décrire le changement de conditions et non le nom du document. Cette information sera donnée dans les métadonnées.
- Ne pas mettre de ponctuation.
- Ne pas mettre de lien dans le titre parceque dans certains contextes de réutilisation le titre en entier est un lien vers le mémo.


**Exemples**

- Facebook interdit aux États de nier l’usage de la force lors d’une invasion
- Mistral traite des données à caractère personnel aux USA et cesse d’informer de tels changements

## Nom du service

- Inscrivez le nom du service (et non le nom de l'entreprise, par exemple « Facebook » au lieu de « Meta »).

**Exemples**

> LinkedIn

> OpenAI

## Type de termes

- Vous devez renseigner un [type de termes](https://github.com/OpenTermsArchive/terms-types) valide.
- Plusieurs types de termes sont autorisés.

**Exemples**

> Terms of Service

> Community Guidelines, Terms of Service, Privacy Policy

## Date de modification

- Utilisez le format `Mois Jour Année`.
- Plusieurs dates sont autorisées.
- Évitez les répétitions de mois ou d'années.

**Exemples**

> 4 mars 2024

> 3 novembre 2023 - 23 décembre 2023

## Corps de texte

- Décrire les changements de manière neutre et objective, sans jugement.
  - Écrire au passé composé (par exemple : « a ajouté », « a retiré »…).
  - Mettre en gras le point le plus important.
  - Ne pas rappeler la date, elle est déjà dans les métadonnées.
- Ajouter systématiquement un lien vers le diff sur ce verbe d’action.
  - Titre du lien : « Voir le changement ».
  - Éviter les verbes « annoncer » et équivalents, car la plupart du temps les changements détectés ne sont justement pas annoncés.
- Ne pas hésiter à citer le nouveau texte.
  - Ne pas mettre les citations en italique, utiliser des guillemets. En anglais, les guillemets sont “” (sans espace) en anglais et « » en français (avec espace insécable).
  - Minimiser la longueur des citations car le texte juridique est souvent très verbeux.
  - Ne citer le texte avant modification que s'il est strictement nécessaire à la compréhension du changement, pour réduire les risques de confusion et la longueur.
- Si vous écrivez dans une langue différente de celle de la modification détectée, recherchez toujours les citations dans la version du document qui correspond à la langue d'écriture (si elle existe) au lieu de les traduire vous-même.

**Exemple**

> Mistral a [ajouté](https://github.com/OpenTermsArchive/GenAI-versions/commit/225931387dda66a4f182e78acf72feecf729136e) les États-Unis aux lieux où sont traitées les données personnelles sur son infrastructure Google Cloud Platform, alors qu'elles n’étaient auparavant traitées que dans l’UE (en Irlande).
>
> Dans ce même changement, Mistral a modifié son engagement à informer ses clients en cas de « toute modification » de la liste de ses sous-traitants, pour ne les informer qu'en cas « d'ajout ou de remplacement d’un sous-traitant ». Cela signifie ne pas informer ses clients d’un changement tel que celui qui vient d’être appliqué. En effet, Google Cloud Platform n'est ni ajouté ni retiré de la liste des sous-traitants, seulement _modifié_ pour étendre sa portée territoriale.
>
> Le fait que les données personnelles puissent désormais être traitées aux États-Unis et non plus seulement dans l'UE a de fortes implications en matière de protection de la vie privée.


## Exemples complet

### Memo 1

> **Nouveau traceur Microsoft chez TikTok**
>
> _TikTok ▪ Trackers Policy ▪ 9 mars 2022_
>
> Évolution discrète dans la politique de TikTok relative aux cookies : le média social ajoute [Bing Pixel](https://github.com/OpenTermsArchive/france-versions/commit/b5f7e56ccfe38a03d9fcdeae9ce80e897c8f7333?short_path=d187ffa?short_path=d187ffa#diff-d187ffa99dddfb4f2bda567ea1fa79e37ab477ff82ddedc5dad3f18394d2f981) à ses prestataires d’analyse de données analytiques et marketing. Le service de Microsoft rejoint Linkedin Insight Tag (LinkedIn est aussi propriété de Microsoft), Google Analytics et Google Ads, Apps Flyer et Facebook Pixel.


### Memo 2

> **Instagram interdit le contenu qui « facilite l’infraction des droits d’auteur »**
>
> _Instagram ▪ Community Guidelines ▪ 28 mars 2022_
>
> La partie « propriété intellectuelle » des règles de communauté d’Instagram a été [modifiée](https://github.com/OpenTermsArchive/france-elections-versions/commit/1be4b836e3012344558b60d8f9f871bc42cfa4ca?short_path=c108c01#diff-c108c013f0b8769389f20259465cb81324e805f4334bcda6931344e16f999441) le 28 mars pour interdire la publication de contenu qui « facilite l’infraction des droits d’auteur par le biais d’appareils ou services non autorisés ». Le texte présente une liste de cas dans lesquels l’internaute risquerait d’enfreindre les droits d’auteurs d’un tiers ou, ajout du jour, « de faciliter cette infraction », même s’il n’en avait pas l’intention. Derrière les cas précédemment listés, parmi lesquels « vous avez acheté ou téléchargé le contenu » ou « vous avez vu d’autres personnes publier le même contenu », Instagram ajoute que l’utilisateur risque d’enfreindre les droits d’auteurs s’il ou elle « utilise un appareil ou service de streaming non autorisé (exemples : une application ou un service “débridés” ou “chargés”) ».

## Contextualisation (optionnel)

- Corps du texte dans un nouveau paragraphe : contextualisation avec liens externes vers les sources les plus autoritatives possible.
- Par exemple, expliquer quels problèmes plus larges sont traités par ce changement de politique, ou donner une perspective historique.

**Exemple**

> **Meta élargit ses zones d’action face à l’exploitation d’enfants**
>
> _Facebook ▪ Community Guidelines ▪ June 13, 2022_
>
> La partie relative à l’exploitation d’enfants [s’élargit](https://github.com/OpenTermsArchive/france-elections-versions/commit/0396436542fa7ef8dd8ae4dd02ff0ed5500e08a2) pour couvrir non seulement les publications d’exploitation de mineurs, mais aussi « toute activité » relative à ce type d’actes. Meta a modifié les mêmes éléments dans les règles de communauté de Facebook et d’Instagram.
>
> Cela ouvre la question de la modération des discussions privées, alors que les plateformes sociales ont des difficultés récurrentes dans la gestion des contenus relatifs aux violences sur enfants — fin mars encore, le New-York Times [montrait](https://www.nytimes.com/2022/03/31/business/meta-child-sexual-abuse.html) que la modération reste très légère dans ce domaine, quand bien même les plateformes sont censées répertorier ce type de contenu et le [signaler aux autorités](https://www.theverge.com/2022/3/31/23005576/facebook-content-moderators-child-sexual-abuse-material-csam-policy).


Source: [Mémo du 23 juin 2022, Édition France Élections.](https://sh1.sendinblue.com/aif98ezlolpfe.html).
