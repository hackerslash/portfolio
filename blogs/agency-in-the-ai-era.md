---
id: agency-in-the-ai-era
title: Agency Is the Only Dev Skill That Still Counts
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

I once watched someone interview a backend engineer who could recite Postgres internals from memory. Genuinely impressive.

Then the interviewer asked: "Prod is throwing connection pool exhaustion errors and nobody knows why. First ten minutes — what do you do?"

"I'd wait for someone to tell me which service to check."

That response basically captures a massive shift in our industry.

## Volume was never the real bottleneck

Today, a company can spin up a fleet of coding agents that never sleep, never get bored of boilerplate, and happily generate pull requests all night. But raw volume of shipped code stopped being scarce a while ago.

Volume was never the true constraint on a backend team—correctness and safety under load were. Will this migration safely run on a live table with 40 million rows? Will this retry logic quietly cause a self-inflicted DDoS? An agent will confidently produce the code, but it won't lose sleep or get fired if the database goes down. It has no skin in the game.

The actual gap companies are paying to close isn't "who can write the endpoint," but "who is accountable when the endpoint fails?" Research indicates backend roles are increasingly focusing on review, architecture, and human oversight of systems that agents can generate but not answer for ([DigitalApplied, 2026](https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026)).

## Agency and ownership are the actual product

Agency is deciding what to do without being told. Ownership is caring about the outcome long after the ticket is closed. Together, they are the real value a developer provides.

Low-agency engineers wait for a clearer ticket, hand it to an AI, and move on once the PR merges. If that code melts the payments queue two weeks later, they don't feel responsible. High-agency engineers, however, tackle ambiguity head-on and stick around to ensure their solutions actually hold up.

This behavior compounds into real expertise—a kind of learning an AI can't replicate because it has no memory of a 3am page. As Addy Osmani frames it, high agency means treating obstacles as puzzles to route around instead of reasons to stop ([Osmani, 2025](https://addyosmani.com/blog/high-agency-matters/)).

## The 80/20 trap

Current AI tools reliably nail about 80% of a task but stall on the final 20%—complex edge cases like concurrent writes or cascading failures. This isn't a coding problem; it's a judgment problem, and no model can decide it for you because it has nothing to lose. Engineers who can make these calls ship faster with AI; everyone else just merges failing code faster ([Cotten, 2026](https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d)).

If you lean too passively on AI for that last 20%, your judgment erodes. A study found a measurable 17-point drop in demonstrated mastery among developers who blindly accepted AI-generated code without engaging with it ([byteiota, 2026](https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/)). The less you practice your judgment, the less equipped you are to spot when the AI is confidently wrong.

## What high agency looks like today

- **Review AI code like a stranger's PR:** If you can't explain a line, don't merge it.
- **Take the ambiguous tickets:** Make a reasonable assumption, write it down, and start building.
- **Follow up after the merge:** Ownership doesn't end at "tests passed." Check how your code performs under real load.
- **Form your own hypothesis first:** Use AI as a second opinion, not your first instinct.
- **Code unassisted occasionally:** Keep your unaided judgment sharp enough to catch the agent's mistakes.

## The camouflage is gone

For twenty years, agency and ownership were camouflaged by deep technical knowledge. Because mastering complex systems required grinding through ambiguity yourself, the two looked like the same thing.

AI stripped that camouflage away. Anyone can produce fluent, working-looking code now without ever being the one who has to answer for it in production. Code got cheap. Accountability didn't.

The real question isn't how to prompt an AI better. It's the one from that interview: when something's broken and nobody tells you what to do, what's your first move? If your answer is "wait," that's the gap no tool can fix.

---

**Sources referenced:**
- <a href="https://addyosmani.com/blog/high-agency-matters/" style="text-decoration: underline; text-decoration-color: green;">High Agency Matters — Addy Osmani</a>
- <a href="https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026" style="text-decoration: underline; text-decoration-color: green;">AI Developer Hiring 2026: Skills That Actually Matter — DigitalApplied</a>
- <a href="https://medium.com/newsarticulated/agentic-coding-and-persistent-returns-to-expertise-why-human-judgment-still-rules-in-the-age-of-ai-f270114ec38d" style="text-decoration: underline; text-decoration-color: green;">Agentic Coding and Persistent Returns to Expertise — Earl Cotten</a>
- <a href="https://byteiota.com/ai-coding-assistants-cut-developer-skills-by-17-anthropic-study/" style="text-decoration: underline; text-decoration-color: green;">AI Coding Assistants Cut Developer Skills by 17%: Anthropic Study — byteiota</a>
