---
id: agency-in-the-ai-era
title: Agency Is the Only Dev Skill That Still Compounds
date: 2026-08-03
author: Md Afridi Sk
excerpt: A fleet of agents can already ship code nonstop. What a company still can't buy from an API is a human who owns the outcome — and that's the entire value a developer provides now.
active: true
tags:
  - AI
  - Career
  - Software Engineering
---

## The interview question I can't stop thinking about

I once watched someone interview a backend engineer who could recite Postgres's MVCC internals from memory — vacuum, tuple visibility, transaction wraparound, all of it, unprompted. Genuinely impressive.

Then the interviewer asked: "Prod is throwing connection pool exhaustion errors and nobody knows why. First ten minutes — what do you do?"

"I'd wait for someone to tell me which service to check."

That's basically the whole essay. Here's why it matters more now than it did five years ago.

## Agents can already ship nonstop. That was never the bottleneck.

A company today can spin up a fleet of coding agents that never sleep, never get bored of boilerplate, and never ask for a raise. Point them at a backlog and they will generate pull requests all night — migrations, endpoints, retry logic, the works. Volume of shipped code stopped being scarce a while ago.

But volume was never actually the constraint on a backend team. Correctness under load was. Whether the migration is safe to run on a live table with 40 million rows was. Whether the retry logic quietly turns a downstream outage into a self-inflicted DDoS was. An agent will confidently produce all of that code. It will not lose sleep, get paged at 3am, or get fired if the migration takes the database down — because it doesn't own anything. It has no skin in the game. It just returns an output and waits for the next prompt.

That's the actual gap companies are paying to close. Not "who can write the endpoint." Whoever, or whatever, can write the endpoint. It's "who is accountable when the endpoint is wrong in production, and does that person have the judgment to have caught it first." Research on where backend hiring is actually heading says exactly this: the roles growing are the ones built around review, architecture, and human oversight of systems an agent can generate but not be responsible for ([DigitalApplied, 2026](https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026)).

## Agency and ownership are the same trade, sold to different buyers

Agency is deciding without being told. Ownership is caring about the outcome after the ticket is closed. They're really one behavior seen from two angles, and together they're the actual product a developer sells now.

Low-agency, low-ownership engineers wait for a clearer ticket, hand a migration to an agent, and move on once the PR merges. If the agent's retry logic melts the payments queue two weeks later, it's not really "their" bug anymore in their head — they shipped what was asked.

High-agency engineers make the call on the ambiguous part themselves, and high-ownership engineers keep asking "did this actually hold up" long after the ticket is closed. Addy Osmani, describing this trait on AI-heavy teams, frames it as treating obstacles as puzzles to route around instead of reasons to stop — and it compounds, because acting instead of stalling generates real feedback nobody else has ([Osmani, 2025](https://addyosmani.com/blog/high-agency-matters/)). An agent can't compound that way. It has no memory of the 3am page it caused, no reason to be more careful next time unless a human notices, extracts the lesson, and feeds it back in. That noticing is the job now.

## Why AI exposed this instead of fixing it

Current AI agents reliably nail about 80% of a task and stall on the last 20% — the migration that's fine in isolation but not under concurrent writes, the retry policy that's correct until three services start retrying each other simultaneously. That's not a coding problem, it's a judgment-and-accountability problem, and no model can decide it for you because it has nothing to lose either way. Engineers who can make that call ship faster with these tools; everyone else just merges more code that fails at the same wall, only faster ([Cotten, 2026](https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d)).

Lean on the tool passively long enough and your ability to catch that 20% erodes too. An Anthropic study on how developers actually use AI assistants found several usage patterns that measurably eroded skill — roughly a 17-point drop in demonstrated mastery among people who accepted generated snippets without engaging with them. The spiral: stop practicing the skill, lose the ability to judge whether the output is even correct, trust the AI more by default because you're less equipped to argue with it, practice even less ([byteiota, 2026](https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/)). That's the least useful direction to drift in, because the whole reason a human is in the loop is to be the one who still can argue with it.

## What it looks like day to day

- **Read agent output like a stranger's PR you'll be paged for.** Can't explain a line, don't merge it.
- **Take the ambiguous ticket instead of routing it to an agent and hoping.** Make a reasonable assumption, write it down, ship toward it.
- **Follow up after the merge.** Did the migration actually behave under real load? Ownership doesn't end at "tests passed."
- **Build something with no AI occasionally**, specifically to check your unaided judgment is still sharp enough to catch the agent's mistakes.
- **Form a hypothesis before you ask the assistant.** Bring it in as a second opinion, not the first response — that's the muscle that catches it when the second opinion is confidently wrong.

None of this means distrusting AI tools. Let them write the retry logic, the migration script, the boilerplate. The point is that someone has to be willing to say "I own whether this is right" before it ships, and that willingness doesn't come bundled with the code generation.

## The camouflage is gone

Agency and ownership were always the real product. They were just camouflaged for twenty years, because "hard work" and "deep technical knowledge" looked like the same thing as accountability — since acquiring that knowledge required grinding through ambiguity yourself, on systems you'd have to answer for.

AI stripped the camouflage off. Now anyone can produce fluent, confident, working-looking code without ever being the one who has to answer for it in production. The code got cheap. Being the person who's accountable for it didn't.

So the real question isn't "how do I use AI better." It's the one from that interview: something's broken, nobody's told you what to do — what's your first move, and are you still the one who has to answer for the answer? If the honest reply to the first half is "wait," that's the gap. Not the next framework. Not the next model.

---

**Sources referenced:**
- [High Agency Matters — Addy Osmani](https://addyosmani.com/blog/high-agency-matters/)
- [AI Developer Hiring 2026: Skills That Actually Matter — DigitalApplied](https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026)
- [Agentic Coding and Persistent Returns to Expertise — Earl Cotten](https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d)
- [AI Coding Assistants Cut Developer Skills by 17%: Anthropic Study — byteiota](https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/)
