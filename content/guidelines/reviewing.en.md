---
title: "Reviewing contributions"
---

# Reviewing contributions

Thank you for showing interest in reviewing contributions made to Open Terms Archive. This document is intended to help you get started and provide some guidelines for reviewing contributions.

## Why is this important?

We want to make sure that the contributions made to the project are of high quality and that they are in line with the vision of the project. We also want to make sure that the contributions are reviewed in a timely manner so that the contributors can get feedback and continue to contribute to the project.
This is where volunteer reviewers come in to help. Reviewers are people who have volunteered to review contributions made to the project. They are not paid for their work, but they are given credit for their work.

## Who can do it?

Anyone can review contributions. As hinted before, most of the contributions made to Open Terms Archive are contractual documents that are to be tracked. Therefore, you don't need to be a programmer or have any technical knowledge. You just need to be able to read and understand the contribution and provide feedback where necessary.

## How long and complex will it be?

It depends on the contribution. Some contributions may be spot on and can be reviewed in a few minutes. Other contributions may require a more detailed review and changes to be made and can take longer.
We estimate it to take 3 to 15 mins for one to review a document. The first reviews might be a bit longer as reviewers get familiar with the process, and will speed up with time.

## Where to start

To get started, we will need to understand a few things. The nature of the contributions you will be reviewing, where to get the contributions to review and the tools that will help you in reviewing the contributions.

### The nature of the contributions

The contributions you will be reviewing are contractual documents of digital services. These are documents that govern the relationship between two or more parties.
They are not the original documents, but rather the terms extracted from these documents. If the terms are represented accurately, it will be easier to follow on with any subsequent changes in the document. Contributors track these documents (sometimes, anonymously) by submitting a pull request either using a tool that helps contributors add documents to the project, the **GUI contributing tool**, or by creating a JSON file and adding it via a pull request. You can find more information about pull requests [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

There are three types of contributions you'll come across:

- adding declarations to a collection;
- updating declarations in a collection;
- removing declarations from a collection.

The method used to review each of these types of contribution varies, and you'll find a detailed explanation below.

### Where to find the contributions

The contributions can be found in the form of pull requests in the repository of the collection you want to work on. For example, for the Contrib collection, they are visible under the [pull requests](https://github.com/OpenTermsArchive/contrib-declarations/pulls) tab of the [`contrib-declarations`](https://github.com/OpenTermsArchive/contrib-declarations) repository..

## How To Review Pull Requests that Add Declarations

Your focus should be on two aspects: accuracy and quality.

- Accuracy is about making sure that the contributed declaration is accurate and tracks **significant** sections of the terms that actually make a legal impact when updated.
- Durability is about making sure that the contributed declaration is durable over time, with CSS selectors that will make sure the document will need little maintenance over time.

### Step-by-step Review Guide

1. Click on the _Inspect the declaration_ link to view the declaration in a graphical user interface.
2. Use the link provided in the URL section of the contribution tool to check out the original document.
3. Verify that the name of the service matches the JSON file and complies with the [guidelines]({{< relref "guidelines/declaring#service-name" >}}).
4. Quickly scan the document to ensure that the correct term type has been selected. To determine the term type, consider who the intended audience is and what the document is discussing. You can also refer to the [terms types list](https://github.com/OpenTermsArchive/terms-types/blob/main/termsTypes.json) to find the best term type for the document.
5. Confirm that the selected area of the document contains only one term type and does not include any other types.
6. Check both the significant and insignificant parts of the document. Ensure that the suggested selectors abide by the [selectors guidelines]({{< relref "guidelines/choosing-selectors" >}}).
    - Ensure that the significant parts do not include navigation items, contact links, or other insignificant details that may cause confusion by triggering a change detection when the legal terms have actually not been updated.
7. Verify the version of the document in the contribution tool by clicking on the _Verify version_ button.
8. Ensure that all checks generated by the OTA-bot are manually checked.
9. When you confirm that the term contribution has been made to the correct collection, proceed to add a review.
10. Merge the contribution.

## How To Review Pull Requests that Update Declarations

When some terms can no longer be tracked by the Open Terms Archive engine, an issue is created in the collection repository. This issue contains the details on why the document cannot be tracked and the date the challenge was encountered.
Contributors are then required to update the declaration in order to bring back the tracking of the terms.
The updates can be made using the contribution tool and it's effects will be similar to the one seen when adding declaration but with a slight change.
The pull request created will consist of fewer checks than those that add declarations, as some aspects have already been previously checked, such as the name of the service and its ID. The checks will guide the reviewer on the key things to look out for during the review process, and a link to inspect the declaration.

For pull requests that update declarations, you should focus should be on two things: history file and declaration.

- **History file:** The history file is a JSON file that keeps track of a service declaration changes. It contains a `validUntil` property that specifies the date a specific version of a service declaration was last effective. You have to confirm that this date is the same as the date in the issue opened for the declaration when the bot couldn't track it for the first time. This issue is usually included in the pull request message. The history file is updated with every `update` pull request. You can find more information about the history file [here]({{< relref "terms/declarations-maintenance" >}}).
- **Declaration:** for `update` pull requests, you only look at the selectors to make sure they are **simple** and also verify the **generated version** is ok.

### Step-by-step Review Guide

1. Click on the inspect the declaration suggestion link to view contribution using the contribution tool.
2. Check both the significant and insignificant parts of the document. Ensure that the suggested selectors abide by the [selectors guidelines]({{< relref "guidelines/choosing-selectors" >}}).
3. Verify the version of the document in the contribution tool by clicking on the `verify version` button.
4. Open the issue linked with the pull request. Confirm the date when the declaration was last tracked from the bot's comment.
5. Compare it with the `validUntil` property in the history file under the `Files changes` section of the pull request. If the dates are the same, proceed to approve the pull request.
6. Merge the contribution.

You can read more about maintaining declarations from the [official documentation]({{< relref "terms/declarations-maintenance" >}}).

## When to Make Changes to a Contribution

When you spot an error in a contribution, instead of asking the author to implement these changes, we usually recommend you fix it, especially for first time contributors, in order to speed up the process. You can make your corrections directly through the graphical user interface and send the document. This will create an update in the already existing pull request and a new comment will be generated by the OTA-bot.

In some special cases, the correction may have to do with the service name. Such changes modify the branch name, hence, creating a new pull request instead of updating the initial pull request as their names are now different. In any case, it's always important to let the contributor know about any changes or corrections you make to their contribution.

### Editing a Service ID

When contributing to the project, reviewers may need to modify the Service ID of a service that is being added for tracking. This is often necessary when the service being tracked is in a language other than English, such as Chinese or French. In these cases, the Service ID usually reflects the transliteration of the service name (written in the native language). The [documentation]({{< relref "terms/reference#service-id" >}}) provides more information on this. It is important to note that the contributor can be very crucial in providing an accurate transliteration of the service name especially if the reviewer does not know the service's native language.

Since the Service ID is used as the file name of the JSON file associated with the service, it is necessary to change the file name to reflect the transliteration. Here are the steps to follow:

1. Open the pull request associated with the contribution and service.
2. Navigate to the "Files changed" tab of the pull request. Here, you will see the files being changed by the contribution, including the JSON file of the service.
3. To edit the file, click on the three dots button on the right side of the file name and select "Edit file". This will open the file in the Github editor.
4. From here, you can change the file name from the current Service ID to the new Service ID, which represents the transliteration of the service name.
5. Once you have made the changes, commit them and review the pull request as usual. If everything checks out, you can merge the pull request.

## Running Tests

Status checks are required to pass before merging can take place. This ensures that automated tests (through “Continuous Integration”, or CI) confirm the contribution will be readable by the Open Terms Archive engine.

These tests should run automatically. However, under some circumstances, the tests might need to be triggered manually. To that end, navigate to the “Actions” tab of the collections repository, and look for the name of the contribution where tests are not run. Once located in the list, click on the entry name, and click on “Re-run all jobs” at the top right.

### Running Tests From a Fork

If the contribution comes from a fork rather than from the bot, the checks will not appear in the Actions tab, as they cannot be run from a different repository. In order to run checks from a fork, you need to create a new branch in the collection repository, with the contents of the branch in the fork. This operation can only be done through the command-line. Assuming you already have cloned the collection repository:

1. Ensure you have the latest version of the code with `git checkout main && git pull`.
2. Create a new branch, preferably with the name of the service to be added: `git checkout -b add_<service_name>_<terms_type>`.
3. Pull the contribution from the fork: `git pull https://github.com/<contributor_name>/<collection_name> <branch_name_in_the_fork>:add_<service_name>_<terms_type>`. The branch name used in the fork can be found in the pull request page, right under the title.
4. Push your branch to the original collection repository: `git push origin add_<service_name>_<terms_type>`.

As you did not push to the source branch but instead created a copy of that branch in the collection repository, the pull request itself will not mention a new push, and GitHub will suggest that you create a new pull request. In order to keep pull request authorship clear for contributors, please keep the original pull request instead: since the checked-in code is now pushed by a trusted author, the CI should run. And since the commit IDs are the same in the fork and in the original branch, the status checks will update in the original pull request when you refresh the page, without the need to create a new pull request.

Once the pull request has been merged, delete the copy you made of the branch with `git push origin -d add_<service_name>_<terms_type>`.

### Debugging Failing Tests

When tests fail, you can follow these steps to diagnose and address the issue:

1. Begin by analyzing any error messages or warnings provided by the test output. These messages can often provide meaningful information to identify the source of the problem. Pay attention to specific issues such as schema validation errors, inaccessible web locations or inaccessible content selection.

2. For a deeper investigation, you can access the snapshots and versions generated during the test run. Navigate to the summary page of the failing workflow. Scroll down to the "Artifacts" section located at the bottom of the page. Click on `snapshots_and_versions` to download them.

3. Inside the downloaded archive you will be able to inspect the snapshot file related to the terms that failed. Ensure the document downloaded by the engine is the correct one and that the terms content is present. Sometimes a login wall or a cookies wall can block access to the content.

4. If the snapshot is the proper one, you can examine the generated version to check the accuracy of content selection.

#### If tests keep on failing

If the tests fail systematically in CI but there is at least one environment in which all tests pass, it is allowed to use admin powers to force the merge.

For example, tests may fail in CI because of a 403 Access Denied error, but succeed when run on a development machine.

> Bypassing protection is allowed because:
>
> - if the engine is updated, the problem could correct itself;
> - if it's an anti-bot protection, it can stop from one day to the next;
> - adding the terms prevents duplicate suggestions for additions;
> - a service can encounter this type of error after being merged, so there is no reason to prevent it from being added with this error.

## Merging the Pull Request

Beyond status checks, additional restriction requires branches to be up to date before merging. This ensures that the contribution has been tested with the latest version of the collection. This appears as a _“This branch is out-of-date with the base branch”_ warning on a pull request.
You can fix this using the Github interface, by clicking on the arrow button next to the “Update Branch” button, and select “Update with Rebase”.

## Contributions FAQ

1. **How can we tell if a section is insignificant in the contractual document?** The best way to judge if a section doesn't not fit into the contractual document is by asking yourself if a change made on that section has any legal impact. If not it can be viewed as insignificant.
2. **How do we give feedback when reviewing a pull request?** Even though there will be contributors who are technically skilled and those who aren't, you are encouraged to provide comments line by line in the pull request for more context and to provide suggestions.
3. **How do we suggest changes to a contributor?** It is encouraged to empower contributors to make required changes themselves, however for first time contributors, you can make the changes and explain why they are necessary as they progressively learn. In due time they get better at it and can make changes on their own.
