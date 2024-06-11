---
title: "Browsing through terms"
weight: 2
---

# Browsing through terms

{{< video src="https://cloud.opentermsarchive.org/index.php/s/DJ4rqJi5M8fAecL/download/how-to-navigate-through-versions-history-in-open-terms-archive.mp4" >}}

Every collection offers a public database of versions they recorded.

For this guide, we will use the example of the Demo collection. The terms of this collection are published on the [`OpenTermsArchive/demo-versions`](https://github.com/OpenTermsArchive/demo-versions) repository.

- From the [repository page](https://github.com/OpenTermsArchive/demo-versions), open the folder of the service of your choice by clicking on it. For example, [GitHub](https://github.com/OpenTermsArchive/demo-versions/tree/main/GitHub):

  ![Demo-versions repository services list](/images/navigate-history/demo-repository.png)

- You will see the set of terms tracked for that service, now click on the terms of your choice. For example, [GitHub's Privacy Policy](https://github.com/OpenTermsArchive/demo-versions/blob/main/GitHub/Privacy%20Policy.md):

  ![GitHub terms list](/images/navigate-history/github-terms.png)

- The most recent version will be displayed. To view the history of changes made to these terms, click on _History_ at the top right:

  ![GitHub Privacy Policy](/images/navigate-history/github-privacy-policy.png)

- The changes are presented in reverse chronological order. For example, [GitHub Privacy Policy history](https://github.com/OpenTermsArchive/demo-versions/commits/main/GitHub/Privacy%20Policy.md). Click on a change title to see its contents:

  ![GitHub Privacy Policy history](/images/navigate-history/privacy-policy-history.png)

- The red colour shows deleted words and the green colour shows added words. For example, in this change of [GitHub Privacy Policy](https://github.com/OpenTermsArchive/demo-versions/commit/e9a781797041a6b593967ba9e7bb2c7404390e76), you can see in red the deletion of information about GitHub data protection officer.

  ![One GitHub Privacy Policy change with source diff view](/images/navigate-history/source-diff.png)

- You can choose from two types of display with the icons in the grey bar above the document. The first one (which is also the default one), named _source diff_ displays the previous version and the next one either [side by side](https://github.com/OpenTermsArchive/demo-versions/commit/e9a781797041a6b593967ba9e7bb2c7404390e76?diff=split) or in a [consolidated way (with one line under the other)](https://github.com/OpenTermsArchive/demo-versions/commit/e9a781797041a6b593967ba9e7bb2c7404390e76?diff=unified). The second one, named _rich diff_ displays all the changes [in a single document](https://github.com/OpenTermsArchive/demo-versions/commit/e9a781797041a6b593967ba9e7bb2c7404390e76?short_path=060f2c2#diff-060f2c2cc43c2415e0d388f0061c37472277e76eafc9c0df269713b150a52909). In this view, beyond green and red, the yellow color shows modified paragraphs. Be careful, this display does not show some changes such as hyperlinks and text style's changes:

  ![One GitHub Privacy Policy change with rich diff view](/images/navigate-history/rich-diff.png)

- - -

## Notes

- For long documents, unchanged paragraphs will not be displayed by default. You can manually make them appear by clicking on the small arrows just above or just below the displayed paragraphs:

  ![Expand unchanged paragraphs on source diff view](/images/navigate-history/expand-source.png)  

  or

  ![Expand unchanged paragraphs on rich diff view](/images/navigate-history/expand-rich.png)
  
- You can use the History button anywhere in the repository to display the history of changes made to all terms in the current folder.
