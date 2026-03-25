---
title: Memo copywriting
aliases: /memos/copywriting-reference/
---

# Memo copywriting

Memos are short explanations of a specific change in some terms of a service.

- They remove the technical and expertise barriers needed to interpret a textual change.
- They can provide additional context to make sense of that change, such as outlining the regulation, geopolitical tensions or public controversy that likely led to it.
- They can also highlight the potential consequences of that change on the users and partners of the service, as well as potential real-world harms to society.

## Structure

A memo must contain:

- a [title](#title);
- a [service name](#service-name);
- a [terms type](#terms-types);
- a [change date](#date-modified);
- [body text](#body-text).

It may also contain:

- [context](#contextualisation-optional);
- a [topic](#topic-optional).

Each of these components is explained in detail below.

## Title

- Write a short declarative sentence to highlight the key change.
- 140 characters maximum.
- Use the name of the service as the subject.
- Write in the present tense.
- Prefer active phrasings over passive (e.g. “Microsoft expands reach” rather than “Reach expanded by Microsoft”).
- Describe the policy change, not the name of the document. This information will be given in the metadata below.
- Use no punctuation.
- Use international title casings (i.e. only the first letter of the leading word should be in capital).
- Do not put a link in the title because in some reuse contexts the entire title is a link to the memo.

**Examples**

> Facebook bans States from denying the use of violence in an invasion

> OpenAI specifies further plugin exports rules

## Service name

- Write the service name and not the company name (e.g. “Facebook” rather than “Meta”).

**Examples**

> LinkedIn

> OpenAI

## Terms types

- You must fill a valid [terms type](https://github.com/OpenTermsArchive/terms-types).
- Multiple terms types are allowed.

**Examples**

> Terms of Service

> Community Guidelines, Terms of Service, Privacy Policy

## Date modified

- Use `Month Day, Year` format.
- Avoid repeating months or years.
- Multiples dates are allowed.

**Examples**

> June 4, 2020

> June 6, December 5 and 16, 2023

## Body text

- Describe changes in a neutral, objective, non-judgmental manner.
  - Write in the past tense (e.g. “added”, “removed”…).
  - Bolden the most important point.
  - Do not repeat the date, it is already in the metadata.
- Systematically add a link to the diff on this action verb.
  - Title of the link: “See the change”.
  - Avoid verbs like “announce”, because most of the time the changes detected are not announced.
- Do not hesitate to quote the new text.
  - Do not italicise citations, use quotes.
  - Minimise the length of citations because legal text is often very wordy.
  - Only quote the text before modification if it is strictly necessary to understand the change, to reduce the risk of confusion and length.
- If changes have been made in a specific jurisdiction, mention it in the memo. Do not mention jurisdiction when changes have been made globally.
- If you write in a different language than the detected change, always look for citations in the version of the document that matches the language of writing if it exists instead of translating them yourself.
- Use British English (e.g. “organisation” and not “organization”).
  - Don't use full stops in abbreviations (e.g. write “EU” and “USA” instead of “E.U.” and “U.S.A.”).
  - For more details, follow the [Guardian style guide](https://www.theguardian.com/guardian-style-guide-a) and The Oxford Style Guide (New Hart’s Rules, 2014).

**Example**

> OpenAI [specified](https://github.com/OpenTermsArchive/GenAI-versions/commit/30f1df7d18676c57a0ae1c43c3ccdfc264535cb3) that, as far as European (EEA and Swiss) developers were concerned, their Agreement is with OpenAI Ireland Ltd. OpenAI stopped acting as a separate controller of personal data, and developers now have to present a privacy notice to their users prior to processing their data.
>
> OpenAI also extended export restrictions to plugins ‘located’ in countries embargoed or sanctioned by the US. This provision previously concerned only plugin owners.

## Context _(optional)_

The goal of the context is to help the general public make sense of the changes, which can often be applied in reaction to a geopolitical or regulatory tension. To that end, explain which wider problems are tackled by this policy change, or give a historical perspective on the change. Depending on your production goals, you might want to focus on specific angles such as real-world harms, capital concentration, geopolitical evolutions… all are valid, and this section simply describes how to integrate these additional perspectives in a memo so that they don’t take over the change analysis itself.

- Write the contextualisation text in a new paragraph.
- Add external links to the most authoritative sources available.

## Topic _(optional)_

Changes can sometimes address several topics at once, making it difficult to narrow the memos down to a clear issue. In such cases, **write separate memos for each topic**. To support splitting, the taxonomy below can help identify topics that each warrant their own memo.

| Topic | Subtopics |
|----------------------------|----------------------------------------------------------------------------------------------|
| Privacy and Surveillance | Data collection, use, storage, and retention, informed consent, transparency |
| Cybersecurity | Data breaches, security mechanisms, verification and authentication processes |
| Censorship | Content prohibitions and restrictions, reporting mechanisms |
| Access and Accessibility | Access to services, discrimination/exclusion risks |
| Mis/Disinformation | Definitions of false/harmful content, content sharing, verification and reporting mechanisms |
| Hate Speech | Definitions of violent content, content sharing, reporting mechanisms |
| Algorithmic Accountability | Data use in AI training |
| Data Sovereignty | Data governance, cross-border data flows |
| Copyright | Fair use and licensing rules, verification and reporting mechanisms, monetisation |

#### Example

> [...]
>
> This opens up the question of moderation of private discussions, as social platforms show difficulties in managing content related to child abuse —as recently as late March, the New York Times [showed](https://www.nytimes.com/2022/03/31/business/meta-child-sexual-abuse.html) that moderation remains very light in this area, even though platforms are supposed to list this type of content and [report it](https://www.theverge.com/2022/3/31/23005576/facebook-content-moderators-child-sexual-abuse-material-csam-policy) to authorities.

Source: [June 23, 2022 Memo on French Elections](https://sh1.sendinblue.com/aijgxqzlolpfe.html).

## Complete examples

### Memo 1

> **Midjourney strengthens policies on intellectual property infringements**
>
> *Midjourney ▪ Terms of Service ▪ December 23, 2023 ▪ Copyright*
>
> Midjourney introduced an explicit [prohibition](https://github.com/OpenTermsArchive/GenAI-versions/commit/2cb30a2b4b338a4dffbeab9add8262cec78a3062) regarding the infringement of others’ intellectual property rights in its conditions for service availability and quality, mentioning the possibility of legal action and permanent ban from the service.
>
> Previously, legal action was only mentioned where the violation of intellectual property rights resulted in financial detriment to Midjourney.

### Memo 2

> **Instagram adds a posting ban to protect copyright**
>
> *Instagram ▪ Community Guidelines ▪ March 28, 2022 ▪ Copyright*
>
> On March 28, Instagram [updated](https://github.com/OpenTermsArchive/france-elections-versions/commit/1be4b836e3012344558b60d8f9f871bc42cfa4ca?short_path=c108c01#diff-c108c013f0b8769389f20259465cb81324e805f4334bcda6931344e16f999441) its intellectual property community rules, prohibiting the posting of content that ‘facilitates copyright infringement through unauthorized devices or services.’ The text presents a list of cases in which users would risk infringing the copyright of a third party or even merely ‘facilitating’ such infringement, even if they did not intend to do so. After the previously listed cases, which include ‘you purchased or downloaded the content’ or ‘you saw others post the same content,’ Instagram adds that users risk infringing copyright if they ‘use an unauthorized streaming device or service (examples: a “jailbroken” or “loaded” app or service).’
