# Contributing to the Open Terms Archive documentation

First of all, thanks for taking the time to contribute! 🎉👍

## Code of Conduct

Before you begin coding and collaborating, please read our [Code of Conduct](./CODE_OF_CONDUCT.md) to understand the standards for interacting in this community. As a participant and contributor to this project, you agree to abide by our Code of Conduct.

## Architecture

This documentation follows the [Diátaxis](https://diataxis.fr) approach and structures content in different categories:

- **Tutorials:** step-by-step learning guides that help beginners get started with Open Terms Archive, providing foundational knowledge and hands-on experience.
- **How-to guides:** task-focused instructions that help experienced users accomplish specific goals efficiently and effectively.
- **References:** comprehensive technical documentation detailing configuration options and specifications for advanced users.
- **Explanations:** background knowledge that enables understanding the constraints and how choices that are made.



## Modifying content

Start by identifying the page you would like to add the content to by [navigating the documentation](https://docs.opentermsarchive.org). Once you have found the best location, find the [associated source document](https://github.com/OpenTermsArchive/docs/tree/main/content) and edit it. If there is no existing best location, think of the page where you would like to find it and create that page by clicking “Add file” in the [source folder](https://github.com/OpenTermsArchive/docs/tree/main/content).

## Workflow

### Pull requests

We follow the [GitHub Flow](https://guides.github.com/introduction/flow/): all contributions are submitted via a pull request towards the `main` branch.

Opening a pull request means you want that code to be merged. If you want to only discuss it, send a link to your branch along with your questions through whichever communication channel you prefer.

#### Peer reviews

All pull requests must be reviewed by at least one person who is not their original author.

To help reviewers, make sure to describe your pull request with a **clear text explanation** of your changes.

For pull requests of new contributors, if errors or areas for improvement are identified in their contributions, the Open Terms Archive team can initially handle them. This is intended to speed up the delivery process and help the contributor acclimatise to the project. As they become more involved and learn more, they will be encouraged to take on more responsibility by implementing the changes themselves. The aim is to support growth and confidence in the contribution to the project while promoting quick delivery.

### Continuous delivery

GitHub Actions is used to publish the documentation on every merge to the main branch.

Branch protection is active, meaning that a merge to the main branch can only take place once all tests pass in CI, and that the peer review policy has been fulfilled.

### Commit messages

We strive to follow this [recommendation](https://chris.beams.io/posts/git-commit) to write our commit messages, which contains the following rules:

- [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate).
- [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50).
- [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize).
- [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end).
- [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative).
- [Use the body to explain what and why vs. how](https://chris.beams.io/posts/git-commit/#why-not-how).

Except this one:

- ~~[Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)~~: As URLs might be used for references in commit messages, the body text is not wrapped to 72 characters to ensure links are clickable in Git user interfaces.

We add these additional rules:

- Do not rely on GitHub issue reference numbers in commit messages, as we have no guarantee the host system and its autolinking will be stable in time. Make sure the context is self-explanatory. If an external reference is given, use its full URL.

## List contributors in the Open Terms Archive website

We acknowledge the efforts of our contributors by listing them on our [website](https://opentermsarchive.org) through [All Contributors](https://allcontributors.org/docs/en/bot/overview).

All Contributors enables adding a contributor with a comment on an issue or pull request, without writing code. To do this, please use the [dedicated issue](https://github.com/OpenTermsArchive/docs/issues/134) on this repository.
