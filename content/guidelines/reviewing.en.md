---
title: "Reviewing contributions"
---

# Reviewing contributions

Thank you for showing interest in reviewing contributions made to Open Terms Archive. This document is intended to help you get started and provide some guidelines for reviewing contributions.

## Why is this important?

Open Terms Archive is a open source project that tracks, analyses and disseminates changes to contractual documents with the aim of shiflting the balance of power from big tech to end users.
As such we get lots of contributions involving various contractual documents.However, we want to make sure that the contributions made to the project are of high quality and that they are in line with the vision of the project. We also want to make sure that the contributions are reviewed in a timely manner so that the contributors can get feedback and continue to contribute to the project.
This is where volunteer reviewers come in to help. Reviewers are people who have volunteered to review contributions made to the project. They are not paid for their work, but they are given credit for their work.

## Who can do it?

Anyone can review contributions. As hinted before, most of the contributions made to Open Terms Archive are contractual documents that are to be tracked. Therefore, you don't need to be a programmer or have any technical knowledge. You just need to be able to read and understand the contribution and provide feedback where necessary.

## How long and complex will it be?

It depends on the contribution. Some contributions may be spot on and can be reviewed in a few minutes. Other contributions may require a more detailed review and changes to be made and can take longer.
However we approximate it to take about 3-15 mins for one to review a document, and getting better with time.

## Where to start

To get started we will need to understand a number things. The nature of the contributions you will be reviewing, where to get the contributions to review and the tools that will help you in review the contributions.

### The nature of the contributions

The contributions you will be reviewing are contractual documents of digital services. These are documents that govern the relationship between two or more parties.
The contributions you will be reviewing are not the original documents, but rather accurate tracking and data about these documents. If the documents are represented accurately, it will be easier to follow on with any subsequent changes in the document.

### Where to get the contributions to review

For these contributions, you will get them in the [`contrib-declarations`](https://github.com/OpenTermsArchive/contrib-declarations) repository under the pull requests tab. You can find the pull requests [here](https://github.com/OpenTermsArchive/contrib-declarations/pulls).

### Tools that will help you in review the contributions

The contributions are in the form of pull requests. Pull requests are a way of submitting contributions to a repository. You can find more information about pull requests [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
The pull requests can be opened in 2 ways:

- By a bot. The bot will open a pull request when contributors add documents using the **contribution tool** which is a tool that helps contributors add documents to the project.
- By the contributor. The contributor can open a pull request manually by following the steps when they track the document by **creating a JSOn file** and adding it via a pull request.

## How to review

When reviewing the contributions, your focus should be on two things: accuracy and quality.

- Accuracy is about making sure that the contribution document is accurate and tracks **significant** sections that actually make a legal impact when changed.
  
- Quality is about making sure that the contribution is of high quality and uses stable CSS selectors that will make sure the document will need less maintainace over time.

### Step-by-step Review Guide Draft

1. Inspect the declaration suggestion
2. Use the link provided in the contribution tool to check out the original document.
3. Verify that the name of the service matches the JSON file.
4. Quickly scan the document to ensure that the correct term type has been selected. To determine the term type, consider who the intended audience is and what the document is discussing.
5. Confirm that the selected area of the document contains only one term type and does not include any other types.
6. Check both the significant and insignificant parts of the document.
    - Ensure that only [simple/basic selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors) are used and avoid complex selectors like [combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) and [pseudo selectors](https://www.w3schools.com/css/css_pseudo_elements.asp). To simplify try to avoid selectors with indexes/numbers e.g `:nth-child(n)` and avoid selectors with long chains e.g. `div > body > .aside > p > span > a )`
    - Ensure that the significant parts do not include a table of contents, contact links, or other insignificant details that may cause confusion by giving a false impression of change.
7. Verify the version of the document in the contribution tool to see how it will appear.
8. If everything is in order, confirm that the term contribution has been made to the correct collection.
9. Merge the contribution.

#### Contributions FAQ

1. **Why is it important to use simple CSS selectors for selecting and removing significant and insignificant parts respectively?** It is important to use simple selectors to have greater stability. The more simple the selectors are the more stable the document will be

2. **How can we tell if a section is insignificant in the contractual document?** The best way to judge if a section doesn't not fit into the contractual document is by asking yourself if a change made on that section has any legal impact. If not it can be viewed insignificant

3. **What should I do if removing a small insignificant part leads to complex CSS selectors?** If you are trying to remove a small insignificant section like a contact part in a document and it brings up complex CSS selectors, we would prefer you leave that minor section. It is better to have more stable documents that accurate ones that are more tideous to maintain.

4. **How do we give feedback when reviewing a pull request?** Even though there will be contributors who are technically skilled and those who aren't you are encouraged to provide comments line by line in the pull request for more context and to provide suggestions

5. **Do we suggest changes and leave it up to them to make changes?** It is encouraged to empower contributors to make required changes themselves, however for first time contributors, you can make the changes and explain why they are neccessary as they progressively learn. In due time they get better at it and can make changes on their own.
