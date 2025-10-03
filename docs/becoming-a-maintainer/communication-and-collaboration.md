---
id: communication-and-collaboration
title: "How to Communicate and Collaborate Effectively"
sidebar_label: "Effective Communication and Collaboration"
keywords: ["communication and collaboration", "effective communication and collaboration in open source", "open source community communication strategies", "managing communication in open source", "fostering collaboration in open source", "best practices for communication in open source communities", "using Discord/Slack/Github Discussions for open source communication", "how to handle conflicts in open source community", "open source maintainers", "Open Source", "Open Source Community"]
---

Effective communication and collaboration with contributors are the keys to a thriving open source community. As maintainers, you want to smoothly onboard new contributors to your projects and build a welcoming community with open lines of communication between contributors and maintainers.

This chapter will discuss how to onboard new contributors, utilize different communication channels for your open source project's community, and maintain healthy communication.

## Project Onboarding

Onboarding new contributors to your project is essential to maintaining its health and growth. And that will become possible through establishing effective communication, starting from your project's documentation.

Providing clear information and directions about the project's goals, processes, and codebase is the key to helping new contributors collaborate. Effective communication allows you to attract contributors to return, learn more about your projects, and continue contributing. That way, you can create a sustainable ecosystem where knowledge is shared, responsibilities are distributed, and the project can continue to evolve and grow.

There are ways to establish effective communication on your project to achieve good collaboration.

### Clear Documentation

Easy-to-understand and well-organized documentation will ensure a good onboarding experience for new contributors. Clear documentation can save time, prevent errors, and promote transparency and accountability, which can be vital for effective communication. It is best to invest time and effort in creating clear documentation for your project.

Consider these when you write or update your documentation:

- **Simple language and universal examples**

  You want to ensure that your documentation is easy to understand by most contributors — if not everyone — including non-native English speakers.

- **Clear guide**

  Whether it's the setup guide on the README, instructions to run and use the project, or contributing guidelines, you always want to provide a clear direction for contributors to follow for better collaboration.

- **Dedicated place for documentation**

  If your README is growing longer, consider creating a new file or repository dedicated to your project's documentation. This will ensure a good documentation flow, allowing you to communicate your project better.

### Issue Labels

Labeling issues is an excellent way to categorize and communicate the status of issues in your project. It can also be a way to create contributors' paths. The "[How to Handle Open Issues and Pull Requests](issues-and-pull-requests.md)" chapter covers this topic in more deeply.

The `good first issue` label is perfect to be added to beginner-friendly issues. Think of contributors who are beginners in the tech stack or open source in general. It can be a good starting point for them to contribute to your project. Consider pointing to the code blocks and providing step-by-step instructions to work on the solutions for this type of issue.

If an issue is complicated and has to be fixed promptly, you can add `core team work`, `critical`, or any other label based on your project's convention to prevent frustrations and confusion.

### Issues and Pull Request Templates

Having issues and pull request templates in your project makes it easier for you to triage and review them, and they help contributors understand how to approach the project and what you expect them to look closer at when creating one.

## Regular Communication

It is recommended that you provide spaces outside your project for contributors to ask questions, request guidance, and share ideas. That way, they can communicate and collaborate actively with other collaborators and maintainers.

Here are some channels for you to consider to create regular communication:

### Chat Service App

It would be best to provide a chat service app to accommodate asynchronous and synchronous communication for your community. With this app, contributors can ask questions, connect, and collaborate openly in nearly real-time. It's also a great way to support communication in different time zones. A chat service app can also benefit you as a maintainer by quickly announcing project and community updates, asking for help, holding synchronous office hours, etc.

Tech communities widely use the apps mentioned below. You can choose which one to use based on your preference and your community's needs.

#### Discord Community

> [Discord](https://discord.com/) is a voice, video and text communication service used by over a hundred million people to hang out and talk with their friends and communities.

Discord is a good choice if your community heavily uses group voice and video calls. Creating a channel for voice calls makes it easy for community members to join the channel and talk to anyone instantly. Discord is also suitable for building a larger community because if your server is public, anyone with a Discord account can search and join your group.

#### Slack Group

> [Slack](https://slack.com/) is the productivity platform that empowers everyone with no-code automation and AI, makes search and knowledge sharing seamless, and keeps teams connected and engaged.

Slack primarily targets businesses and professional teams. That said, if your community prioritizes using chat more than voice or video calls, Slack can accommodate this through its simple and intuitive interface and ability to organize conversations. Slack can automate workflow and be integrated with thousands of business applications, including Zoom and GitHub.

### GitHub Discussions

[Discussions](https://github.com/features/discussions) is a collaborative communication forum for the community around an open source project. It's a feature on GitHub that allows users to ask questions, share ideas, and build connections around the project.

You can easily enable discussions in your project by following the [complete instructions](https://docs.github.com/en/discussions/quickstart#enabling-github-discussions-on-your-repository).

### Community Forum

Another place to create a communication space is a forum. A community forum is an online space where community members connect, engage, and discuss topics with each other.

One of the benefits of having a community forum is that it provides a place for members to discuss and ask specific questions about your project. Whenever someone encounters the same problem that has been fixed before, they can fix it faster by searching for solutions on the forum. This can increase your productivity because you don't have to answer the same questions repeatedly. A forum is also available publicly, so it's searchable on search engines and can increase the number of users and contributors.

You can make a subdomain on your website or create a website to host the forum. The [freeCodeCamp forum](https://forum.freecodecamp.org/) is an excellent example of this.

## Effective Communication

Effective communication is key to project success. It plays a vital role in resolving issues, building trust and transparency, and encouraging collaboration. By enabling open and healthy communication, you can ensure everyone is on the same page and working towards a common goal.

### Engaging with Contributors

One of the maintainers' goals is to have contributors return and continue contributing to the project. To nurture this relationship, you should have time to engage with your contributors between tasks.

Start by acknowledging and thanking them for the issue or pull request they created. Ask them questions if something needs to be clarified, and don't assume.

One of the golden rules in an international remote environment is never to make an assumption. Asynchronous communication, more often than not, can lead to misunderstanding because writing is different from speaking. People with different cultural and language backgrounds might need help explaining their intentions or understanding specific cultural sayings. Consider using words with explicit meanings when you communicate, and keep your message clear and short so they can understand your purpose. When you deliver a few topics, using bullet points in a comment or splitting your message into several comments is recommended.

Another way to engage with your contributors is through live streams. At OpenSauced, we do monthly live streams to thank our contributors for their pull requests and other support and give shoutouts as a token of our appreciation. You can also do live streams to work on issues publicly and ask your community to attend.

Maintainers are human. Sometimes, a discussion with a contributor can upset you when you're tired or having a bad day. But always remember that you want to foster healthy communication and a welcoming environment. It's okay to cool down and take time to answer them. You can take a couple of hours or even a day before you return to them to avoid a bitter tone.

### Managing Expectations

The earlier you let contributors know what they can expect from you and what you expect from them, the better. Setting and managing expectations is the key to smooth contributions and project management. So, how can you manage and communicate your expectations?

#### Small Issues

Just like maintainers, most open source contributors are volunteers. They are not required to, but they help you fix and enhance your project in their spare time. So you can't expect them to work on their issues promptly like a regular employee. With this expectation, you can, for example, break your issues into several small ones to prevent them from taking a long time to work on an issue.

#### Style Guide

You might prefer contributors to add a prefix in brackets to issue and pull request titles. For example, "[Bug]: Documentation link goes to 404 Page Not Found." Or you want them to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to their commit messages, such as `feat: add user authentication`. In another case, you might select particular Markdown rules for your project, like one underscore for italics, two asterisks for bolds, etc.

Every project has its own convention to maintain consistency. So, don't expect your contributors to know what to do when contributing to your project. Consider communicating this in a clear style guide they must follow. You can take an example from GitHub's [Style Guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide).

#### Support

What kind of support can you provide your contributors? You can think of these amongst other supports:

- **Space**: Where can contributors ask questions and throw ideas?
- **Pair programming**: Some contributors, especially beginners, might need extra guidance and hand-holding. Can you provide this support when necessary? How can they ask for it?
- **Office hours**: Regular office hours are a great way to engage directly with your contributors. It allows you to listen to their ideas and challenges, identify areas that need to be improved, communicate with them about the direction of your project, and build a better relationship with them.

When you support your contributors, you can gain their trust and motivation and create a more collaborative and productive environment. By providing them with the help they need, you can establish a culture where everyone feels respected and supported, which leads to even greater achievements.

You can add a section in your README or contributing guidelines to inform about the support you can give and how to get one.

#### Timeline

Let your contributors know how long they can expect you to review a pull request or answer their questions. Inform them, for example, if you won't be available on weekends or after working hours. If you prefer, you can automate this message with an action. Read our "[Maintainer Power Ups](maintainer-powerups.md)" chapter for more information about GitHub Actions.

#### Boundaries

As your project grows and gains popularity, it will attract more contributors. Creating and setting clear boundaries becomes essential to prevent you from getting burned out quickly and balancing your life.

Here are some ways to create boundaries:

- **Take a break**

  You need to know that it's okay to take time off, step away from your project, and take care of yourself. You can inform your contributors that you will review their pull requests after you return. Here is an example of what you can say:

  > "Hey \{username}, thank you for your PR. I will take two weeks off starting tomorrow and review this upon my return. You may ask about the status of your PR if I haven't responded to it in the next three weeks."

  When pull requests come during your days off, after you return, you can thank and let the contributors know you will review the pull requests. Consider saying something like this:

  > "Hey \{username}, I just returned from my days off. Thank you for taking this on! I need time to review it and will get back to you soon. I appreciate your patience."

- **No private or direct message**

  Another boundary you can set is for contributors not to send you private or direct messages on chat service apps like Discord or social media.

  The culture of open source is open communication and transparency. It is best to keep all contributors in the loop by communicating anything related to the project in the open so everyone knows what's happening and what to expect. It will also give you the necessary privacy, separating your project from your personal life.

### Handling Difficult Situations

One day, you might need to handle difficult situations or resolve conflicts around your project's community. There is no easy way to handle situations like this, but you need to prepare yourself sooner or later.

Here are essential things to do when handling difficult situations:

#### Active Listening

Active listening plays a vital role in handling a difficult situation. You can only resolve a problem if you understand it clearly.

Active listening is a communication skill that involves hearing a speaker's words, trying to understand their intentions completely, and acknowledging their feelings.

Here are some techniques that you can train for active listening:

- **Being fully present**

  Avoid listening to someone talking while preparing your answer. Doing so will distract you and make you miss something they've said, which can cause you to fail to understand the exact intention.

- **Showing interest**

  If it's a synchronous conversation, use eye contact to show your interest in what the speaker is saying. In an asynchronous chat, you can repeat what they are saying in your own words based on your understanding. It will show them that you are interested in their conversation. And they can correct you if you need help understanding it clearly.

- **Acknowledging emotions**

  You want to be able to recognize and acknowledge the speaker's feelings in synchronous or asynchronous conversations. For example, you can say, "I see that it upsets you," or, "I'm excited for you!" when the speaker uses many exclamation marks in their writing.

- **Asking and clarifying**

  When someone feels many emotions, they usually want to talk and let their feelings out fast. That can result in a lack of information or the inability to think of more suitable words to describe the situation. You always want to gain more information and clarify what is said. For example, "You said they contacted you on Monday [_clarifying_]. Did they file the complaint on the same day? [_asking for more information_]"

#### Having Empathy and Compassion

When handling a problem, such as a dispute between contributors or community members, it is best to be empathetic and compassionate.

You must look at and listen to the problem from both sides to be non-judgemental. Then, put yourself in their shoes to see the case from their perspective so you can better understand it. Empathy and compassion will help you resolve a conflict and create a positive environment.

#### Being Tactful and Diplomatic

A critical factor in successfully addressing a problem is approaching it in a way that values and respects the feelings and perspectives of others. This can prevent harm to the relationship and lead to positive outcomes when resolving conflicts.

The key is to think before you speak and choose your words wisely. You want to be able to tell the truth, but at the same time, also consider others' feelings and make them feel safe. Use positive yet direct language to prevent misunderstandings; consider balancing being straightforward and sensitive, and avoid pointing fingers.

**Here is an example of a scenario**:

You have a contributor who contributes multiple times and has been working fast to deliver their code. But when you review their pull request and test their branch locally, it works differently than you intended. You know they often don't understand the issue, but they assume they do. And you also notice that they rarely run the code locally to test it. You keep giving them support and positive feedback until, one day, you can't take it anymore.

Instead of saying:

> "Hey, why do you always deliver the code that doesn't align with what we want? I notice you've done this so many times. Do you even understand the issues? I'm also curious if you ever run your code locally because it often doesn't work the way it should and, worst, breaks the app."

You can say something like:

> "Thank you for your prompt work on the PRs, \{username}. I really appreciate it! However, let's focus more on quality than quantity. I noticed a few things that I believe could further improve the quality of your work:
>
> - It might be a good idea to take time to fully understand the issue before starting work on a PR, as this solution is different from what we asked in the issue. If you need help or clarification, don't hesitate to reach out.
> - Another thing that could be helpful is running and testing the code locally before submitting a PR. This way, you'll be able to ensure that the code runs as it should. It can save you time from going back and forth on revisions.
>
> I hope you find this feedback helpful. If there's anything I can do to support you, please let me know."

In the [next chapter](maintaining-code-quality.md), we will talk about maintaining code quality and documentation.
