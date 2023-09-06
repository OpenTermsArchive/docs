---
title: "Reviewing contributions"
---

# Reviewing contributions

Thank you for showing interest in reviewing contributions made to Open Terms Archive. This document is intended to help you get started and provide some guidelines for reviewing contributions.

## Why is this important?

Open Terms Archive is an open source project that tracks, analyses and disseminates changes to contractual documents with the aim of shiflting the balance of power from big tech to end users.
As such, we get lots of contributions involving various contractual documents. However, we want to make sure that the contributions made to the project are of high quality and that they are in line with the vision of the project. We also want to make sure that the contributions are reviewed in a timely manner so that the contributors can get feedback and continue to contribute to the project.
This is where volunteer reviewers come in to help. Reviewers are people who have volunteered to review contributions made to the project. They are not paid for their work, but they are given credit for their work.

## Who can do it?

Anyone can review contributions. As hinted before, most of the contributions made to Open Terms Archive are contractual documents that are to be tracked. Therefore, you don't need to be a programmer or have any technical knowledge. You just need to be able to read and understand the contribution and provide feedback where necessary.

## How long and complex will it be?

It depends on the contribution. Some contributions may be spot on and can be reviewed in a few minutes. Other contributions may require a more detailed review and changes to be made and can take longer.
However we approximate it to take about 3-15 mins for one to review a document, and getting better with time.

## Where to start

To get started, we will need to understand a number things. The nature of the contributions you will be reviewing, where to get the contributions to review and the tools that will help you in reviewing the contributions.

### The nature of the contributions

The contributions you will be reviewing are contractual documents of digital services. These are documents that govern the relationship between two or more parties.
They are not the original documents, but rather accurate tracking and data about these documents. If the documents are represented accurately, it will be easier to follow on with any subsequent changes in the document. Contributors track these documents (sometimes, anonymously) by submitting a pull request either using the **GUI contributing tool** (A tool that helps contributors add documents to the project), or creating a JSON file and adding it via a pull request. You can find more information about pull requests [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

There are three types of contributions you'll come across:

- Adding contributions to declarations
- Updating contributions to declarations
- Removal contributions to declarations

The method used to review each of these types of contribution varies, and you'll find a detailed explanation of this as you proceed with this document.

### Where to find the contributions

These contributions are housed in the [`contrib-declarations`](https://github.com/OpenTermsArchive/contrib-declarations) repository under the pull requests tab. You can find the pull requests [here](https://github.com/OpenTermsArchive/contrib-declarations/pulls).

## How To Review Pull Requests that Add Declarations

When a contribution is made using the contribution tool, the OTA-bot will create a pull request. This pull request typically consists of several checks, which guides the reviewer on the key things to look out for during the review process, and a link to inspect the delaration.

You should focus should be on two things: accuracy and quality.

- Accuracy is about making sure that the contribution document is accurate and tracks **significant** sections that actually make a legal impact when changed.
- Quality is about making sure that the contribution is of high quality and uses stable CSS selectors that will make sure the document will need less maintainace over time.

### Step-by-step Review Guide

1. Click on the inspect the declaration suggestion link to view contribution using the contribution tool.
2. Use the link provided in the URL section of the contribution tool to check out the original document.
3. Verify that the name of the service matches the JSON file and complies with the [guidelines](https://docs.opentermsarchive.org/guidelines/declaring/#service-name).
4. Quickly scan the document to ensure that the correct term type has been selected. To determine the term type, consider who the intended audience is and what the document is discussing. You can also refer to the [terms type guide](https://github.com/OpenTermsArchive/terms-types/blob/main/termsTypes.json) to find the best term type for the document.
5. Confirm that the selected area of the document contains only one term type and does not include any other types.
6. Check both the significant and insignificant parts of the document.
    - Ensure that only [simple/basic selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors) are used and avoid complex selectors like [combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) and [pseudo selectors](https://www.w3schools.com/css/css_pseudo_elements.asp). To simplify, try to avoid selectors with indexes/numbers e.g `:nth-child(n)` and long chains e.g. `div > body > .aside > p > span > a )`
    - Ensure that the significant parts do not include a table of contents, contact links, or other insignificant details that may cause confusion by giving a false impression of change.
7. Verify the version of the document in the contribution tool by clicking on the `verify version` button.
8. Ensure that all checks generated by the OTA-bot are manually checked.
9. When you confirm that the term contribution has been made to the correct collection, proceed to add a review.
10. Merge the contribution.

## How To Review Pull Requests that Update Declarations

When a declaration can no longer be tracked by the Open Terms Archive engine, an issue is created in the collection. This issue contins the details on why the declaration cannot be tracked and the date the challenge was encountered.  
Contributors are then required to help make this fixes to the declaration in order to maintain the declaration's tracking.
The updates can be made using the contribution tool and it's effects will be similar to the one seen when adding declaration but with a slight change.
The pull request created will consist of fewer checks than those that add declarations. The checks will guide the reviewer on the key things to look out for during the review process, and a link to inspect the declaration.

For PRs that update declarations, you should focus should be on two things: history file and the declaration.

- **History file:** The history file is a JSON file that keeps track of a service declaration changes. It contains a `validUntil` property that the date a specific version of a service declaration was last tracked. You have to confirm that this date is the same as the date in the issue opened for the declaration when the bot couldn't track it. This issue is usually included in the PR message. The history file is updated with every `update` PR. You can find more information about the history file [here](https://docs.opentermsarchive.org/contributing-terms/#maintaining-declarations).
- **Declaration:** for `update` PRs, you only look at the selectors to make sure they are **simple** and also verifiying the **generated declaration** version is relevant and ok.

### Step-by-step Review Guide

1. Click on the inspect the declaration suggestion link to view contribution using the contribution tool.
2. Check both the significant and insignificant parts of the document.
    - Ensure that only [simple/basic selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors) are used and avoid complex selectors like [combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) and [pseudo selectors](https://www.w3schools.com/css/css_pseudo_elements.asp). To simplify, try to avoid selectors with indexes/numbers e.g `:nth-child(n)` and long chains e.g. `div > body > .aside > p > span > a )`
3. Verify the version of the document in the contribution tool by clicking on the `verify version` button.
4. Open the issue linked with the pull request. Confirm the date when the declaration was last tracked from the bot's comment.
5. Compare it with the `validUntil` property in the history file under the `Files changes` section of the PR. If the dates are the same, proceed to add approve.
6. Merge the contribution.

You can read more about maintaining declarations from the [official documentation](https://docs.opentermsarchive.org/contributing-terms/#maintaining-declarations).

## Making Changes to a Contribution

When you spot an error in a contribution, instead of asking them to implement these changes, we usually recommend you fix it, especially for first time contributors,in order to save time. Make your corrections directly through the contribution tool, and send the document. Doing this, will create an update in the already existing pull request and a new comment will be generated by the OTA-bot.

In some special cases, the correction may have to do with the service name. Such changes modify the branch name, hence, creating a new pull request instead of updating the initial pull request as their names are now different. In any case, it's always important to let the contributor know about any changes or corrections you make to their contribution.

## Contributions FAQ

1. **Why is it important to use simple CSS selectors for selecting and removing significant and insignificant parts respectively?** It is important to use simple selectors to have greater stability. The more simple the selectors are the more stable the document will be stable.

2. **How can we tell if a section is insignificant in the contractual document?** The best way to judge if a section doesn't not fit into the contractual document is by asking yourself if a change made on that section has any legal impact. If not it can be viewed insignificant.

3. **What should I do if removing a small insignificant part leads to complex CSS selectors?** If you are trying to remove a small insignificant section like a contact part in a document and it brings up complex CSS selectors, we would prefer you leave that minor section. It is better to have stable documents than accurate ones that are tideous to maintain.

4. **How do we give feedback when reviewing a pull request?** Even though there will be contributors who are technically skilled and those who aren't, you are encouraged to provide comments line by line in the pull request for more context and to provide suggestions.

5. **How do we suggest changes to a contributor?** It is encouraged to empower contributors to make required changes themselves, however for first time contributors, you can make the changes and explain why they are neccessary as they progressively learn. In due time they get better at it and can make changes on their own.
