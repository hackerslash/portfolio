---
id: agency-in-the-ai-era
title: Agency Is the Only Dev Skill That Still Counts
date: 2026-08-03
author: Md Afridi Sk
excerpt: A fleet of agents can already ship code nonstop. What a company still can't buy from an API is a human who owns the outcome, and that is most of what a developer is paid for now.
active: true
tags:
  - AI
  - Career
  - Software Engineering
---

## The interview question I can't stop thinking about

I once watched someone interview a backend engineer who could recite Postgres internals from memory. Genuinely impressive.

Then the interviewer asked: "Prod is throwing connection pool exhaustion errors and nobody knows why. First ten minutes: what do you do?"

"I'd wait for someone to tell me which service to check."

That answer said more about the job than the Postgres trivia did.

## Volume was never the real bottleneck

A company can now run a fleet of coding agents that generate pull requests all night without complaining about boilerplate. Volume of shipped code stopped being scarce a while ago.

Volume was never the constraint on a backend team. Correctness and safety under load were. Will this migration safely run on a live table with 40 million rows? Will this retry logic quietly cause a self-inflicted DDoS? An agent will confidently produce the code, but it won't lose sleep or get fired if the database goes down. It has no skin in the game.

The gap companies are paying to close isn't "who can write the endpoint." It is "who is accountable when the endpoint fails?" DigitalApplied's 2026 hiring write-up reads the same way: backend roles now lean on review, architecture and human oversight of systems that agents can generate but cannot answer for ([DigitalApplied, 2026](https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026)).

## Agency and ownership are the actual product

Agency is deciding what to do without being told. Ownership is caring about the outcome long after the ticket is closed. That pair is what a company is actually buying.

Low-agency engineers wait for a clearer ticket, hand it to an AI, and move on once the PR merges. If that code melts the payments queue two weeks later, they don't feel responsible. High-agency engineers take the ambiguous work and stay with it long enough to find out whether it held up.

That habit compounds into expertise, the kind a model cannot copy because it has never been paged at 3am. As Addy Osmani frames it, high agency means treating obstacles as puzzles to route around instead of reasons to stop ([Osmani, 2025](https://addyosmani.com/blog/high-agency-matters/)).

## The 80/20 trap

Current AI tools handle about 80% of a task and stall on the last 20%: concurrent writes, cascading failures, the edge cases that only show up under real traffic. Those are judgment calls, and a model has nothing to lose by getting one wrong. Engineers who can make the call ship faster with AI. Everyone else merges failing code faster ([Cotten, 2026](https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d)).

Lean on AI for that last 20% and your judgment erodes. One study reported a 17-point drop in demonstrated mastery among developers who accepted AI-generated code without reading it ([byteiota, 2026](https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/)). The less you practise the call, the worse you get at spotting when the model is confidently wrong.

## What high agency looks like today

- Review AI code the way you'd review a stranger's PR. If you can't explain a line, don't merge it.
- Take the ambiguous tickets. Make a reasonable assumption, write it down, and start building.
- Follow up after the merge. Ownership doesn't end at "tests passed"; go look at how the code behaves under real load.
- Form your own hypothesis before you ask. Use AI as a second opinion, not a first instinct.
- Write something unassisted now and then, so your own judgment stays sharp enough to catch the agent's mistakes.

## The camouflage is gone

For twenty years, agency and ownership were camouflaged by deep technical knowledge. Because mastering complex systems required grinding through ambiguity yourself, the two looked like the same thing.

AI stripped that camouflage away. Anyone can produce fluent, working-looking code now without ever being the one who has to answer for it in production. Code got cheap. Accountability didn't.

The question isn't how to prompt an AI better. It's the one from that interview: when something's broken and nobody tells you what to do, what's your first move? If the answer is "wait," no tool fixes that.

---

**Sources referenced:**
- <a href="https://addyosmani.com/blog/high-agency-matters/" style="text-decoration: underline; text-decoration-color: green;">High Agency Matters, by Addy Osmani</a>
- <a href="https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026" style="text-decoration: underline; text-decoration-color: green;">AI Developer Hiring 2026: Skills That Actually Matter, DigitalApplied</a>
- <a href="https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d" style="text-decoration: underline; text-decoration-color: green;">Agentic Coding and Persistent Returns to Expertise, by Earl Cotten</a>
- <a href="https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/" style="text-decoration: underline; text-decoration-color: green;">AI Coding Assistants Cut Developer Skills by 17%: Anthropic Study, byteiota</a>
