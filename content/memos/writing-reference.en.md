---
title: "Writing reference"
---

# Writing reference

Each memo must be composed of the elements detailed below. You must follow this structure when writing.

## Title

- Write a short declarative sentence to highlight the key change.
- 140 characters maximum.
- Use the name of the service as the subject.
- Write in the present tense.
- Prefer active phrasings over passive (e.g., “Microsoft expands reach” rather than “Reach expanded by Microsoft“).
- Describe the policy change, not the name of the document. This information will be given in the metadata below.
- Use no punctuation.
- Do not put a link in the title because in some reuse contexts the entire title is a link to the memo.

**Example**

- Facebook bans States from denying the use of violence in an invasion
- OpenAI specifies further plugin exports rules

## Service name

- Write the service name (not the company name, e.g., “Facebook” rather than “Meta“)

**Examples**

> LinkedIn

> OpenAI

## Terms types

- You must fill a valid [terms type](https://github.com/OpenTermsArchive/terms-types/blob/main/termsTypes.json) (e.g., “Trackers Policy” not “Cookie Policy“).
- Multiple terms types are allowed.

**Examples**

> Terms of Service

> Community Guidelines, Terms of Service, Privacy Policy

## Date modified

- Use `Month Day, Year` format.
- Multiples dates are allowed.
- Avoid repeating months or years

**Examples**

> March 4, 2024

> November 3, 10 - December 16, 2023

## Body text

- Describe changes in a neutral, objective, non-judgmental manner.
  - Write in the past tense (e.g., “added”, “removed”…).
  - Bolden the most important point.
  - Do not repeat the date, it is already in the metadata.
- Systematically add a link to the diff on this action verb.
  - Title of the link: “See the change”.
  - Avoid verbs like “announce”, because most of the time the changes detected are not announced.
- Do not hesitate to quote the new text.
  - Do not italicise citations, use quotes.
  - Minimise the length of citations because legal text is often very wordy.
  - Only quote the text before modification if it is strictly necessary to understand the change, to reduce the risk of confusion and length.
- If you write in a different language than the detected change, always look for citations in the version of the document that matches the language of writing if it exists instead of translating them yourself.

**Example**

> OpenAI [specified](https://github.com/OpenTermsArchive/GenAI-versions/commit/30f1df7d18676c57a0ae1c43c3ccdfc264535cb3) that, as far as European (EEA and Swiss) developers were concerned, their Agreement is with OpenAI Ireland Ltd. OpenAI stopped acting as a separate controller of personal data, and developers now have to present a privacy notice to their users prior to processing their data.
>
> OpenAI also extended export restrictions to plugins “located” in countries embargoed or sanctioned by the US. This provision previously concerned only plugin owners.
>
> OpenAI Ireland Ltd is a Dublin-based subsidiary of OpenAI [set up](https://openai.com/blog/introducing-openai-dublin) in 2023.

## Full examples

### Memo 1

> **Midjourney strengthens policies on intellectual property infringements**
>
> Midjourney ▪ Terms of Service ▪ December 23, 2023_
>
> Midjourney introduced an explicit [prohibition](https://github.com/OpenTermsArchive/GenAI-versions/commit/2cb30a2b4b338a4dffbeab9add8262cec78a3062) regarding the infringement of others’ intellectual property rights in its conditions for service availability and quality, mentioning the possibility of legal action and permanent ban from the service.
>
> Previously, legal action was only mentioned where the violation of intellectual property rights resulted in financial detriment to Midjourney.

### Memo 2

> **Instagram adds a posting ban to protect copyright**
>
> _Instagram ▪ Community Guidelines ▪ March 28, 2022_
>
> On March 28, Instagram [updated](https://github.com/OpenTermsArchive/france-elections-versions/commit/1be4b836e3012344558b60d8f9f871bc42cfa4ca?short_path=c108c01#diff-c108c013f0b8769389f20259465cb81324e805f4334bcda6931344e16f999441) its intellectual property community rules, prohibiting the posting of content that “facilitates copyright infringement through unauthorized devices or services.” The text presents a list of cases in which users would risk infringing the copyright of a third party or even merely “facilitating” such infringement, even if they did not intend to do so. After the previously listed cases, which include “you purchased or downloaded the content” or “you saw others post the same content,” Instagram adds that users risk infringing copyright if they “use an unauthorized streaming device or service (examples: a ‘jailbroken’ or ‘loaded’ app or service).”

## Contextualisation (optional)

- Body text in a new paragraph: contextualisation with external links to the most authoritative sources available.
- For example, explain which wider problems are tackled by this policy change, or give a historical perspective on the change.

**Example**

> **Meta expands reach against child exploitation**
>
> _Facebook · Community Guidelines · June 13, 2022_
>
> The section on child exploitation for both Facebook and Instagram [expanded](https://github.com/OpenTermsArchive/france-elections-versions/commit/0396436542fa7ef8dd8ae4dd02ff0ed5500e08a2) to cover not only publications that exploit minors, but also “any activity” related to such acts.
>
> This opens up the question of moderation of private discussions, as social platforms show difficulties in managing content related to child abuse —as recently as late March, the New York Times [showed](https://www.nytimes.com/2022/03/31/business/meta-child-sexual-abuse.html) that moderation remains very light in this area, even though platforms are supposed to list this type of content and [report it](https://www.theverge.com/2022/3/31/23005576/facebook-content-moderators-child-sexual-abuse-material-csam-policy) to authorities.

Source: [June 23, 2022 Memo on French Elections](https://sh1.sendinblue.com/aijgxqzlolpfe.html).
