---
title: Référence de rédaction de mémo
linkTitle: Rédaction de mémo
slug: /reference/redaction
---

# Référence de rédaction de mémo

Les mémos sont de courtes explications sur un changement observé dans les conditions d’un service.

- Ils suppriment les barrières techniques et l’expertise nécessaires pour interpréter une modification textuelle.
- Ils peuvent fournir un contexte supplémentaire pour comprendre ce changement, par exemple en présentant la réglementation, les tensions géopolitiques ou les controverses publiques qui ont probablement conduit à celui-ci.
- Ils peuvent également mettre en évidence les conséquences potentielles de ce changement pour les utilisateurs et les partenaires du service, ainsi que les éventuels préjudices réels pour la société.

## Structure

Un mémo se compose :
- d’un [titre](#titre) ;

suivi des éléments de métadonnées suivants :
- un [nom de service](#nom-du-service) ;
- un [type de termes](#type-de-termes) ;
- une [date de modification](#date-de-modification) ;
- un [thème](#thème-facultatif) facultatif ;

et contient :
- un [corps de texte](#corps-de-texte) ;
- un [contexte](#contexte-facultatif) facultatif.

Chacun de ces éléments est expliqué en détail ci-dessous.

## Titre

- Rédiger une courte phrase déclarative pour mettre en avant le changement clé.
- 140 caractères maximum.
- Utiliser le nom du service comme sujet.
- Écrire au présent.
- Préférer les formulations actives aux formulations passives (« Meta étend la portée de… » plutôt que « La portée de… est étendue par Meta »).
- Décrire le changement de conditions et non le nom du document. Cette information sera fournie dans les métadonnées.
- Ne pas mettre de ponctuation.
- Ne pas mettre de lien dans le titre parce que dans certains contextes de réutilisation le titre en entier est un lien vers le mémo.

**Exemples**

> Facebook interdit aux États de nier l’usage de la force lors d’une invasion

> Mistral traite des données à caractère personnel aux USA et cesse d’informer de tels changements

## Nom du service

- Écrivez le nom du service et non le nom de l'entreprise, par exemple « Facebook » plutôt que « Meta ».

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

- Utilisez le format `jour mois année`.
- Plusieurs dates sont autorisées.
- Évitez les répétitions de mois ou d'années.

**Exemples**

> 4 juin 2020

> 6 juin, 5 et 16 décembre 2023

## Thème _(facultatif)_

Les changements peuvent parfois concerner plusieurs thèmes à la fois, ce qui rend difficile de les résumer en un seul enjeu clair. Dans ce cas, **rédigez des mémos distincts pour chaque thème**. Pour vous aider à les distinguer, la taxonomie ci-dessous permet d’identifier les thèmes qui méritent chacun leur propre mémo.

| Thème | Sous-thèmes |
|----------------------------|----------------------------------------------------------------------------------------------|
| Vie privée et surveillance | Collecte, utilisation, stockage et conservation des données, consentement éclairé, transparence |
| Cybersécurité | Fuites de données, mécanismes de sécurité, processus de vérification et d’authentification |
| Censure | Interdictions et restrictions de contenu, mécanismes de signalement |
| Accès et accessibilité | Accès aux services, risques de discrimination/exclusion |
| Mésinformation / Désinformation | Définitions des contenus faux/nocifs, partage de contenu, mécanismes de vérification et de signalement |
| Discours de haine | Définitions des contenus violents, partage de contenu, mécanismes de signalement |
| Responsabilité algorithmique | Utilisation des données dans l’entraînement de l’IA |
| Souveraineté des données | Gouvernance des données, flux de données transfrontaliers |
| Droit d’auteur | Règles d’usage équitable et de licence, mécanismes de vérification et de signalement, monétisation |

**Exemples**

> Discours de haine

> Responsabilité algorithmique

## Corps de texte

- Décrire les changements de manière neutre et objective, sans jugement.
  - Écrire au passé composé (par exemple : « a ajouté », « a retiré »…).
  - Mettre en gras le point le plus important.
  - Ne pas rappeler la date, elle est déjà dans les métadonnées.
- Ajouter systématiquement un lien vers le diff sur ce verbe d’action.
  - Titre du lien : « Voir le changement ».
  - Éviter les verbes « annoncer » et équivalents, car la plupart du temps les changements détectés ne sont justement pas annoncés.
- Ne pas hésiter à citer le nouveau texte.
  - Ne pas mettre les citations en italique, utiliser des guillemets. Les guillemets sont « » (avec espace insécable) en français, les guillemets sont “” (sans espace) en anglais uniquement.
  - Minimiser la longueur des citations car le texte juridique est souvent très verbeux.
  - Ne citer le texte avant modification que s'il est strictement nécessaire à la compréhension du changement, pour réduire les risques de confusion et la longueur.
- Si vous écrivez dans une langue différente de celle de la modification détectée, recherchez toujours les citations dans la version du document qui correspond à la langue d'écriture (si elle existe) au lieu de les traduire vous-même.
anization »).
  - Ne pas utiliser de points dans les abréviations (ex. : écrire « EU » et « USA » plutôt que « E.U. » et « U.S.A. »).
  - Pour plus de détails, suivre le guide de style du Guardian et le Oxford Style Guide (New Hart’s Rules, 2014).

**Exemple**

> Mistral a [ajouté](https://github.com/OpenTermsArchive/GenAI-versions/commit/225931387dda66a4f182e78acf72feecf729136e) les États-Unis aux lieux où sont traitées les données personnelles sur son infrastructure Google Cloud Platform, alors qu'elles n’étaient auparavant traitées que dans l’UE (en Irlande).
>
> Dans ce même changement, Mistral a modifié son engagement à informer ses clients en cas de « toute modification » de la liste de ses sous-traitants, pour ne les informer qu'en cas « d'ajout ou de remplacement d’un sous-traitant ». Cela signifie ne pas informer ses clients d’un changement tel que celui qui vient d’être appliqué. En effet, Google Cloud Platform n'est ni ajouté ni retiré de la liste des sous-traitants, seulement _modifié_ pour étendre sa portée territoriale.
>
> Le fait que les données personnelles puissent désormais être traitées aux États-Unis et non plus seulement dans l'UE a de fortes implications en matière de protection de la vie privée.

## Contexte _(facultatif)_

L’objectif du contexte est d’aider le grand public à comprendre les changements, qui peuvent souvent être appliqués en réaction à des tensions géopolitiques ou réglementaires. À cette fin, expliquez quels problèmes plus larges sont abordés par ce changement de politique, ou apportez une perspective historique. Selon vos objectifs de production, vous pouvez vous concentrer sur des angles spécifiques tels que les préjudices réels, la concentration du capital, les évolutions géopolitiques… tous sont valables. Cette section décrit simplement comment intégrer ces perspectives supplémentaires dans un mémo sans qu’elles ne prennent le dessus sur l’analyse du changement lui-même.

- Rédiger le texte de contextualisation dans un nouveau paragraphe.
- Ajouter des liens externes vers les sources les plus fiables disponibles.

**Exemple**

> [...]
>
> Cela ouvre la question de la modération des discussions privées, alors que les plateformes sociales ont des difficultés récurrentes dans la gestion des contenus relatifs aux violences sur enfants — fin mars encore, le New-York Times [montrait](https://www.nytimes.com/2022/03/31/business/meta-child-sexual-abuse.html) que la modération reste très légère dans ce domaine, quand bien même les plateformes sont censées répertorier ce type de contenu et le [signaler aux autorités](https://www.theverge.com/2022/3/31/23005576/facebook-content-moderators-child-sexual-abuse-material-csam-policy).

Source : [Mémo du 23 juin 2022, Édition France Élections](https://sh1.sendinblue.com/aif98ezlolpfe.html).

## Exemples complets

### Memo 1

> **Midjourney renforce ses politiques sur les atteintes à la propriété intellectuelle**
>
> *Midjourney ▪ Terms of Service ▪ 23 décembre 2023 ▪ Droit d’auteur*
>
> Midjourney a introduit une [interdiction](https://github.com/OpenTermsArchive/GenAI-versions/commit/2cb30a2b4b338a4dffbeab9add8262cec78a3062) explicite concernant la violation des droits de propriété intellectuelle d’autrui dans ses conditions de disponibilité et de qualité du service, en mentionnant la possibilité d’actions en justice et d’une exclusion définitive du service.
>
> Auparavant, une action en justice n’était mentionnée que lorsque la violation des droits de propriété intellectuelle entraînait un préjudice financier pour Midjourney.

### Memo 2

> **Instagram interdit le contenu qui « facilite l’infraction des droits d’auteur »**
>
> _Instagram ▪ Community Guidelines ▪ 28 mars 2022_
>
> La partie « propriété intellectuelle » des règles de communauté d’Instagram a été [modifiée](https://github.com/OpenTermsArchive/france-elections-versions/commit/1be4b836e3012344558b60d8f9f871bc42cfa4ca?short_path=c108c01#diff-c108c013f0b8769389f20259465cb81324e805f4334bcda6931344e16f999441) le 28 mars pour interdire la publication de contenu qui « facilite l’infraction des droits d’auteur par le biais d’appareils ou services non autorisés ». Le texte présente une liste de cas dans lesquels l’internaute risquerait d’enfreindre les droits d’auteurs d’un tiers ou, ajout du jour, « de faciliter cette infraction », même s’il n’en avait pas l’intention. Derrière les cas précédemment listés, parmi lesquels « vous avez acheté ou téléchargé le contenu » ou « vous avez vu d’autres personnes publier le même contenu », Instagram ajoute que l’utilisateur risque d’enfreindre les droits d’auteurs s’il ou elle « utilise un appareil ou service de streaming non autorisé (exemples : une application ou un service “débridés” ou “chargés”) ».
