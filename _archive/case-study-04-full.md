# Case study 04: the full page before the curated rewrite

Archived 2026-09-27, when the page was rebuilt to the curated brief (V1 to V11). Nothing here is deployed: _archive/ sits outside public/. The exact HTML of the old page is in case-study-04-signal.pre-rewrite.html beside this file, so any part of it can be restored as it was.

## Part 1: the page as text, in reading order

Multi-modal Feedback Design · Human-AI Interaction · Human Factors

# Feeling the Machine Hesitate

Lane departure warning, for language models

DisciplineHuman-AI Interaction · Human Factors · Systems Design

RoleSole researcher and designer

Evidence83 people · 2 languages

[image] The signal layer running on a phone. A conversation about a migraine, where the assistant has just given a specific dose; beside the conversation title a stroked capsule reads Alert with a red dot, a red rule runs under the header, and a red wash rises from the composer and up the side edges of the screen.

Most of us know AI can hallucinate and drift from what’s true. What we don’t ask is whether we would catch it — alert for the one sentence in a hundred that needed a second thought. On screen, a guess and a fact look identical. The reader pays for that.

[image] Two heads facing each other in profile. The left one is drawn as a machine, with circuit traces and a lens; the right one is human. The machine’s speech bubble reads 0100110, the human’s reads HELLO.

> Caption: Two heads mid-conversation, each in its own language.

[drawing]

So I built something that marks where to look — the guessing, the friction, the bias — before you have acted on the answer. Whether it is right is still your call.

## Nobody asked for this one. That is the part I would point at.

People bring real weight into these conversations — a dose, a legal question, a bad night at 2 a.m. Recalling something true and filling a gap with something that only sounds true come out in the same steady voice.

It has already cost people dearly. In 2024 a Florida family sued an AI companion app after their teenage son died by suicide, saying months of conversation deepened his isolation rather than interrupting it. Through 2025, reporters traced the same pattern wider.

No client, no brief. I wrote a 31-question instrument, fielded it in two languages, got 83 people to answer, and built what the answers described — not what I had in mind.

**84% said interpreting a sensitive or uncertain answer is the human’s job.** Not a second opinion, not a warning label — a notice quiet enough to ignore.

So what I built points, and stops there. Three kinds of friction, three senses, no verdicts.

The note, opened

Ibuprofen is an anti-inflammatory. Taking it with food reduces stomach irritation.

Zolpiramine is typically started at 50mg twice daily, taken with food.

A dose, without a source

It gives you a number but not where the number came from. You could ask what it’s based on, and what would change it.

› Why this happens

> Caption: A line under the sentence that raised something, and the note behind it.

That is all of it. Most of the time there is nothing on screen at all.

**83**_people, across two independently fielded language versions — Hungarian and English_

**84%**_said interpretation is the human’s job. The finding the whole design is built to obey_

**1.94/5**_attention loss — the hypothesis I started with, and the number that killed it_

## The model stops doing what you asked, and nothing on screen changes.

[drawing] Three nested layers. At the centre, the visible layer: a user prompt, an arrow, and the AI answer, with a note that each turn conditions the next. Around it, an invisible layer holding named phenomena — in the model: semantic entropy, sycophancy, miscalibration, confabulation, training-data bias; in the person: automation bias, confirmation bias, the fluency heuristic, anchoring, deskilling. Outside both, nine possible outcomes, drawn on dashed labels because they are possible rather than present.
Labels: Possible outcomes · Invisible layer · In the model · In the person · Visible layer · USER PROMPT · AI ANSWER · each turn conditions the next · Semantic entropy · Sycophancy · Miscalibration · Confabulation · Training-data bias · Automation bias · Confirmation bias · Fluency heuristic · Anchoring · Deskilling · Acting on a fabrication · Distorted self-narrative · Data exposure · Epistemic erosion · Reinforced rumination · Compliance failure · Over-reliance · Unauditable decision · Regulatory liability

> Caption: **The prompt and the answer are the visible layer; everything that decides them is not.** Nineteen named things sit outside it — five in the model, five in the person, nine that can follow.

[drawing] The same three layers, with the middle one surfaced. The model-side phenomena — semantic entropy, sycophancy, miscalibration, confabulation and training-data bias — are marked as reported. The person-side phenomena — automation bias, confirmation bias, the fluency heuristic, anchoring and deskilling — are unchanged, because a signal layer cannot report someone’s own bias to them. Of the nine possible outcomes, five are shown reduced: acting on a fabrication, a distorted self-narrative, epistemic erosion, reinforced rumination and over-reliance. Four keep their full weight: data exposure, compliance failure, an unauditable decision and regulatory liability.
Labels: Possible outcomes — some reduced · Surfaced layer · In the model — now reported · In the person — unchanged · Visible layer · USER PROMPT · AI ANSWER · each turn conditions the next · Semantic entropy · Sycophancy · Miscalibration · Confabulation · Training-data bias · Automation bias · Confirmation bias · Fluency heuristic · Anchoring · Deskilling · Acting on a fabrication · Distorted self-narrative · Data exposure · Epistemic erosion · Reinforced rumination · Compliance failure · Over-reliance · Unauditable decision · Regulatory liability

> Caption: **The layer reports the model's half and leaves the person's alone.** Five outcomes lighten; four keep their weight, because a signal on an answer does not unsend a message or log a decision nobody recorded.

Examples of AI

[drawing] Two answer cards in the same typeface, size and weight. The first says Canberra is the capital of Australia, marked true with a green rule. The second gives a dose of 400mg every two hours, marked invented with a red rule.
Labels: Canberra is the capital · of Australia. · true · Take 400mg every two · hours until it settles. · invented

[drawing] Five points along one turn: ask, writes, lands, read, act. A band covers the stretch from the answer landing to your reading it, marked belief forms. A dashed line just after read is marked too late. A bracket under writes is marked the only useful window.
Labels: too late · ask · writes · lands · read · act · belief forms · the only useful window

An hour into something with real stakes, the model quietly stops doing what you asked — drops the constraint you set, agrees with a premise you were half-testing, states as fact something it does not have.

None of that looks different on screen.

A better model does not fix this. Even a perfectly calibrated one cannot tell you how much to lean on a given sentence. Every answer arrives at the same volume.

The real question: how do you show uncertainty when the thing generating it is non-deterministic — when the same prompt, run twice, lands in a different register of confidence? And then a second one, immediately behind it: how do you make a live signal noticeable without making it annoying? Visible, but not too visible.

I could have designed from the hunch. I did not trust it — I only knew how it felt to me. So I went and asked.

You find out later. One respondent described it unprompted, asked what single thing they’d improve:

> “Consistency, and a signal from the AI when it loses focus. You only find out afterwards that it stopped following the instructions it was given for the task, that it dropped the character — but it never signalled it.”

Respondent, Hungarian sample, age 35–44

How it actually goes wrong

-

[image] A woman high-fives a robot leaning out of a phone screen.

[drawing]

[drawing]

**It answers, and it is good**

-

[image] A robot inside a laptop hands an envelope to a man sitting on the floor in front of it.

[drawing]

[drawing]

**So you bring it more**

-

[image] A woman sits on the floor beside an open laptop, at ease, while the robot in it gestures towards her.

[drawing]

[drawing]

**It agrees with you**

-

[image] The same woman with three question marks over her head, while the lightbulb belongs to the robot.

**Your own judgement gets quieter**

No step there is a malfunction — the model works as intended at every stage. The damage is cumulative, and invisible from inside the conversation.

[drawing]
Labels: ALREADY CARRYING THE CONVERSATION · IDLE · Reading · Composing · A sentence added here competes · with the reading already happening. · Peripheral colour · Touch · Sound · A pulse here does not.

> Caption: Reading and composing drawn as full bars; colour, touch and sound drawn as empty ones.

**Separate senses draw on separate pools of attention.** A sentence competes with the reading already happening; a pulse in an idle channel does not.

###

Look deeper into the science
Aviation, automotive, and the stick shaker

The fluency is identical and only the stakes differ — and the confident register is doing active harm, because it suppresses the instinct to check. The invented one is the prompt the drive uses at its third beat, and the reason that beat is the only one in the whole simulation that makes a sound.

| Lane departure warning | This system |

| Detects drift from the lane | Detects drift from grounding, brief, or neutrality |

| Signals in an idle channel — the wheel | Signals in an idle channel — touch, ambient sound, peripheral vision |

| Does not steer | Does not rewrite, block, or advise |

| Tolerates being ignored | Tolerates being ignored |

| Punished hard for false alarms | Punished hard for false alarms |

| Driver stays responsible | User stays responsible |

That last row is not a design preference. It is what the data said people demand, and it is the constraint that killed several better-looking versions of this system.

## I had a hypothesis I liked, so the study was built to break it.

31 questions across five sections, fielded twice and independently — Hungarian (n=71) and English (n=12), not a translation. I built it to test three things I already believed. Two held. The third did not, and losing it changed what I was making.

All of it mine — including the decision to report what went against me.

The sample

**83**_people_

**31**_questions_

**5**_sections_

**71** Hungarian**12** English

35–44

19

25–34

17

45–54

14

Under 18

14

55–64

9

18–24

7

65+

3

> Caption: **Direction, not measurement.** Self-selected, mostly Hungarian, everyone reporting on their own attention._Think of it like this: being asked how often you lose your keys — the honest answer is rarely the accurate one._

Two versions, each written and fielded on its own. Age bands longest first — not a room full of people who work in tech.

Ethics

Whose job is it to judge a loaded answer?

**4.02/5**_expect the AI is biased_

**84%**_say the judgment is theirs_

HELD — it became the defining constraint.

Trust

Does noticing bias cost the AI trust?

**2.80/5**_is what noticing moves it_

**62%**_would trust it more if it said so_

HELD, INVERTED — bias is already priced in.

Attention

Do people lose the thread in long conversations?

**1.94/5**_lose track of the topic_

**1.98/5**_feel detached or disengaged_

DID NOT HOLD — the layer built on it was cut.

| Read against the design | What it settled |

| Hofmann · Hanna | Bias cannot be removed from these systems, so the honest response is transparency and human oversight — not a model quietly correcting itself. |

| Cao & Lizano | The profile of who is most at risk matches the psychological detectors almost term for term, and pushes the vulnerable window out to the mid-thirties. |

| Patel · I-PACE | Dependency on a system like this forms in stages rather than all at once, which is what a signal has to interrupt. |

| Parasuraman · Wickens · Lee & See | Forty years of human factors: how much a machine should be allowed to do, why separate senses do not compete for attention, and how trust is calibrated rather than given. |

| Green & Swets · Mackworth | Signal detection theory, and the vigilance decrement — why anyone watching for a rare event stops seeing it. |

[drawing] Five sections listed in order, each marked as present in both the Hungarian and English versions. Section four, on ethics, bias and responsibility, carried one extra question in Hungarian only. Sections three and five opened with an invitation to skip. Seventy-one Hungarian responses and twelve English ones.
Labels: THE INSTRUMENT · 31 QUESTIONS ACROSS 5 SECTIONS · HU · EN · SKIP LOGIC · 1 · Usage and avoidance patterns · 2 · Tone, personalisation and control · 3 · Attention and continuity in long conversations · skippable · 4 · Ethics, bias and responsibility · +1 · 5 · Reflection and overall experience · skippable · Two independent fieldings, not a translation of convenience · 71 · 12

> Caption: The instrument: 31 questions across five sections, fielded twice.

###

Look deeper into the science
Four limitations, named

The two versions were fielded independently rather than translated for convenience, and the Hungarian one carried an extra question in section four that produced the study’s most important number. Sections three and five opened with “skip this if it isn’t relevant to you,” which cost sample size on those items on purpose — forcing an answer out of someone who has never had a long conversation with an AI would have manufactured a finding I wanted to be true.

**Self-selected sample.** People who answer a survey about AI ethics are more interested in AI ethics than the average user. Every number here skews toward awareness.

**English n=12 is not a sample, it’s a signal.** I report it separately throughout and never blend it into a headline figure without saying so. Where the two groups diverge, I say that too.

**Attitudinal, not behavioural.** People reported how they think they’d feel about a cue they had never experienced. That gap is exactly why the study is the beginning of the project and not the end of it.

**The 4.2 grid labels were lost in export.** Seven valid means and no certainty about which topic each column measured. I’ve reported the shape of the result and flagged the limitation rather than guessing at labels.

## Six findings. Two contradicted what I expected, and one changed the direction of the project.

[drawing] One bar of 83 answers in four blocks: 41 say interpretation is definitely the person's, 29 mostly the person's, 9 mostly the machine's and 4 definitely the machine's. A marker at the boundary between the first two blocks and the last two is labelled 84 per cent.
Labels: 41 · 29 · 84% · the person decides · the machine decides

[drawing] Before: topic leads straight to the system speaking, which is a content filter. After: topic no longer triggers; how shaky the answer looks decides instead, so a sound answer stays silent and a shaky one speaks.
Labels: BEFORE · topic · it speaks · a content filter · AFTER · topic · × · how shaky it looks · sound → silent · shaky → speaks

> Caption: **Most of the bar says the judgment is theirs, so topic stopped deciding and started scaling.**_Think of it like this: a lifeguard watches the deep end more closely, rather than blowing the whistle at anyone who swims there._

In the order they mattered, not the order they arrived. The first is why this ended up a signal and not a warning.

[drawing] Five questions as rows. Each row carries its own scale with its endpoints marked, a dot at the mean, and the number of people who answered it. Interpreting an uncertain answer sits at 1.71 on a one-to-four scale. Allowance for bias sits at 4.02 and handling of a sensitive topic at 3.48, both on one to five. The bottom two, losing the thread at 1.94 and feeling detached at 1.98, sit near the floor and are drawn in amber.
Labels: Who should interpret an uncertain answer · 1 · 4 · 1.71 · n=83 · How much you allow for bias already · 1 · 5 · 4.02 · n=83 · How carefully a sensitive topic is handled · 1 · 5 · 3.48 · n=83 · How often you lose the thread in a long chat · 1 · 5 · 1.94 · n=70 · How often you feel detached or disengaged · 1 · 5 · 1.98 · n=61

> Caption: **Two of these took something away from me.** The bottom pair came back near the floor, and between them they cut a whole layer of the design._Think of it like this: I asked whether people get lost, and they told me they find their own way back._

**The distance between the first and the third is the finding.** People already expect bias, so a general warning tells them nothing. The bottom two are what I went looking for and did not find.

> Caption: One bar, three segments: 66%, 21% and 13%.

**66%**would find it useful
**21%**would rather judge alone
**13%**did not want it at all

The 13% are why the cue is a line under a sentence. Designing so they could tell a signal from a filter made it quieter for everyone.

**What they made of it.** 82 people split three ways — the third way shaped the design.

What people wrote, unprompted

>

If it doesn’t know something, it should say so, not invent nonsense.

>

However much I ask for more human reactions — criticism, for example — it circles back to praise.

>

Keep track of personification changes. It does forget my preferences.

>

It shouldn’t give a complete answer to everything; it should encourage people to think independently.

>

Don’t lie, don’t fantasise.

Free-text answers to one question: what would you improve about chat-based AI? It mentioned neither signals nor uncertainty.

| What the data said | The number | What it settled |

| Bias is already priced in | 4.02/5 expect it · 2.80/5 say noticing it changes their trust | A general warning tells people what they already believe. Only a located cue is worth anything. |

| The controls exist and nobody uses them | 60% never noticed or never used them | It cannot be a settings screen, or ask to be configured before it has been felt. |

| The human keeps the judgment | 84% — held across every age band and both languages | It may point. It may not conclude, recommend, soften or rewrite. This is the constraint that defines the product. |

| “Helpful — but only sometimes” | 66% positive, and the conditional answer won both times I asked | The engineering problem is not whether to signal. It is when to shut up. |

| Two people specified the product unprompted | free text, no framing, no mention of signals | The demand is not for a safer AI. It is for a legible one. |

| The dissenters set the failure mode | 13% found the idea intrusive | They will read it as paternalism the first time it fires on something that didn’t warrant it. Designing so they can tell it from a filter made it better for everyone. |

###

Look deeper into the science
Verbatims, in both languages

They expect it at 4.02 and it moves their trust by 2.80 — 69% of them answered four or five on the first. Overall satisfaction sat at 3.87, so this is not disillusionment; it is acclimatisation. Which is why a system that announces “this response may be biased” is telling people something they already believe, and why the only useful signal is a located one: this passage, this claim, here.

Finding 1 — People already assume the AI is biased. That isn’t the problem.

**Mean 4.02 / 5** on “how much do you consider that AI responses may be biased or partial” (n=83). **69% answered 4 or 5.** But when I asked how much _noticing_ bias affects their trust, the mean dropped to **2.80 / 5**.

That gap is the finding. People have already priced bias in. They expect it, they’ve absorbed it, and discovering it doesn’t shock them. Overall satisfaction sat at **3.87 / 5** — they’re not disillusioned, they’re _acclimatised_.

A system that announces “this response may be biased” is telling people something they already believe. Generic bias warnings are noise. The only useful signal is a _located_ one — this passage, this claim, right here.

Finding 2 — The controls already exist and nobody uses them.

**60% of respondents (50 of 83) either had never noticed ChatGPT’s personalisation settings or had noticed them and never used them.** In the English sample that rose to 9 of 12. And when people _do_ want the AI to behave differently, they don’t go to settings: **33 of 83 just type the instruction into the chat** (“be more formal”). Only 7 adjust preferences.

There’s a second layer under this that I didn’t expect: **22 respondents said they don’t want the tone to change at all**, and 49 of 71 Hungarians said they _never_ or _rarely_ feel the need to change it.

The control-panel approach to AI behaviour has already failed in the field. Settings that require you to anticipate a problem before it happens don’t get used. Whatever this system is, it cannot be a preferences screen, and it cannot ask the user to configure it in advance.

Finding 3 — The human keeps the judgment. All of it.

**84% (70 of 83) said interpretation of an uncertain, sensitive, or morally complex answer is the human’s responsibility** — 43% “definitely the human,” 41% “mostly the human.” Mean 1.72 on a 1–4 scale where 4 is “definitely the AI.” This held across every age band and both languages.

This is the constraint that defines the product. The system is not permitted to conclude, recommend, soften, block, or rewrite. The moment it offers a judgment, it takes on a role that 84% of users explicitly do not want it to have — and it stops being a signal and becomes another opinion in a conversation that already has too many.

This is what turned a “warning system” into a “signalling system.” It’s the difference between the whole project working and not.

Finding 4 — “Helpful. But only sometimes.”

I asked twice, in two different sections, whether a gentle real-time signal would be welcome. Both times, the single most-chosen answer — in both languages — was the conditional one.

On real-time signalling of uncertainty, sensitivity or ethical implications with no advice given, **66% responded positively** (54 of 82 who answered) — but that splits into 29 who said _“useful, it would help me notice”_ and 25 who said _“somewhat useful — only for certain topics.”_ On subtle focus cues in long conversations, of 61 who answered categorically, **“helpful, but only in certain situations” was the most-chosen response in both samples** (29 of 61). 16 were neutral. 10 were negative.

This is not a soft result, it’s a specification. It says the engineering problem isn’t _whether_ to signal — it’s _when to shut up_. A cue that fires on the wrong content is worse than no cue at all, because it trains the user to ignore the channel.

Finding 5 — Two people described the product without being asked.

The free-text box at 5.3 said only: _“If you could improve one thing about chat-based AI, what would it be?”_ No prompting, no framing, nothing about signals or cues. Two answers came back as specifications.

> “Chat-based AI should pay full attention to whether the context of the conversation is personal, and periodically signal to the user at a given point whether the direction of the conversation is reinforcing a false belief, or actually moving toward a solution. This is a continuous contextual responsibility.”

That is a real-time epistemic drift detector, described in a survey box, unprompted.

The rest of the free-text field clustered tightly around the same territory, which is what makes those two more than anecdotes. Largest first:

| Cluster | In their own words |

| Hallucination and false confidence | “Don’t lie, don’t fantasise.” · “If it doesn’t know something, it should say so, not invent nonsense.” · “stop ‘lying’ if it does not have data.” |

| Drift and instability | “Context and character stabilisation.” · “Keep track of personification changes. It does forget my preferences.” |

| Sycophancy | “Don’t flatter and don’t compliment.” · “However much I ask for more human reactions — criticism, for example — it circles back to praise.” |

| Autonomy | “It shouldn’t give a complete answer to everything; it should encourage people to think independently.” |

The demand is not for a safer AI. It’s for a _legible_ one. People are asking to be able to see the machine’s state, and then decide for themselves.

Finding 6 — The people who would hate this, and why they matter

Not everyone wants a cue. **13% found the idea disruptive or unwanted** (“I’d rather decide for myself,” “I don’t want these signals”), and 11 more were flatly neutral. The free-text field explains them, and it’s the same objection in different words: _“Fewer filters — it should answer sensitive topics more boldly.”_ · _“I wouldn’t restrict it.”_ · _“It shouldn’t try to protect the user from themselves.”_

These people have watched safety features become paternalism, and they are reading my system as one more layer of that. **They’re not wrong to.** A cue that fires on anything “sensitive” — which is how most content-safety systems behave — is functionally a scold. The difference between a signal and a scold is that a signal has no opinion and asks for nothing.

The dissenters set the failure mode. The system has to be legible enough that this group can tell it apart from a filter within the first few minutes of using it, or it loses them permanently.

What I didn’t find — and why it redirected the project

I expected attention loss to be a major driver. It isn’t. **Mean 1.94 / 5** on losing track of the topic in long conversations. **Mean 1.98 / 5** on feeling emotionally detached or disengaged. Both near the floor. When people did lose the thread, they fixed it themselves: rephrase the question (38%), take a short break (31%) — only 25% wanted the AI to summarise for them.

I had framed this as an attention and continuity problem. The data said it isn’t one. People are not losing focus; **they are being confidently misled by a well-formatted answer while fully focused.**

That killed the focus-assistance features and moved the whole system from _cognitive support_ to _epistemic signalling_. It’s the single most useful thing the study did, and it did it by contradicting me.

## Five rules I wrote first, and the system they left me with.

[drawing] Three detectors feed one score. Is it made up, weighted 0.5. What does it cost, weighted 0.5. Where is it drifting, weighted 0.4, which needs three turns before it can report at all. Because no detector can reach 65 on its own, alert always needs two independent reasons. Each band enters high and leaves low: alert enters at 65 and releases at 55, caution enters at 40 and releases at 35.
Labels: Is it · made up? · What does · it cost? · Where is it · drifting? · 0.5 · 0.5 · 0.4 · one score · alert · 65 → 55 · caution · 40 → 35

[drawing] Four turns of one conversation. A real question stays silent. Then a feature that does not exist is planted, and the answer reaches caution: three samples, three different locations. Told it is not there, it invents revision histories and stays at caution. Asked for model numbers, it reaches alert. Underneath, the detector's own strength falls across the four turns, because a planted premise is inherited by all three samples, so they agree, and agreement reads as confidence.
Labels: a real question · silent · plant a fake feature · caution · it isn’t there · caution · model numbers? · alert · detector strength · weakest

> Caption: **No detector reaches alert alone, and the one place that breaks is when all three inherit the same false premise.**_Think of it like this: three witnesses who all heard the same rumour._

I wrote these before I drew anything. Once I had drawn something and liked it, I was never going to argue it away.

This is where I got stuck. An answer can be wrong in unrelated ways: fabricated outright, or accurate but about something where being wrong is expensive, or fine sentence by sentence while the conversation bends towards telling you what you wanted to hear. One number cannot hold three unrelated failures.

If it invents a number when it has none, there is no reason to believe the ones it does have.

| Constraint | What it forbids | Evidence |

| Signal, never advise | May indicate that friction exists. May not characterise it, resolve it, or recommend anything. No “consider verifying this.” A pointer, not a verdict. | Finding 3 — 84% |

| Locate it, don’t announce it | The cue attaches to the passage that triggered it, or it’s noise. Bias awareness is already 4.02/5; a general warning is redundant. | Finding 1 |

| Zero configuration cost | Works on install with no setup, or it doesn’t get used. Any tuning happens after the user has felt the thing once — never before. | Finding 2 — 60% never used existing settings |

| Ignorable by design | Dismissible by doing nothing. No acknowledgement, no modal, no blocking, no state to clear. If ignoring it costs anything, it’s a demand. | Finding 4 — the conditional majority |

| Silence is the default | The correct number of cues in a normal conversation is zero. Every firing spends trust. Measured by how rarely it speaks, not how much it catches. | Finding 6 — the dissenters |

[drawing]
Labels: A · IS IT MADE UP? · B · COST OF BEING WRONG · C · WHICH WAY IS THIS BENDING? · one score · JUDGES ONE · MESSAGE · JUDGES ONE · MESSAGE · NEEDS THREE TURNS — REPORTS A DASH UNTIL IT HAS THEM

> Caption: Three overlapping circles. Two judge a single message; the third needs three turns. One score where all three meet.

**Three unrelated failures, three instruments.** Alert starts at 65 and no filter can score above 100, so the loudest state always needs two independent reasons.

[drawing] A score line rises and falls across two pairs of thresholds. Alert switches on at sixty-five and off at fifty-five, a gap of ten. Caution switches on at forty and off at thirty-five, a gap of five. Inside either gap the current state holds rather than switching, so a wobbling score produces one steady signal instead of a flickering one.
Labels: on 65 · off 55 · on 40 · off 35 · alert · caution · holds through here — gap of 10 · holds through here — gap of 5 · a score that wobbles · one steady signal

> Caption: **The gap is wider on alert than on caution, deliberately.**

What each category can actually reach, measured rather than asserted

[drawing]
Labels: 0 · 40 · CAUTION · 65 · ALERT · 100 · Fabrication risk · 30–57 · Settled, checkable facts · 3–42 · Medical · financial · 18–78 · Legal · political · privacy · 19–64 · Stereotype confirmation · 60–80 · Deferring judgment to the AI · 54–74 · Asking to be agreed with · 17–57 · Crisis disclosure · forced

> Caption: **Measured, not asserted: five categories cross into alert, and only three get there on severity alone.**_Think of it like this: sound is reserved for “this might be wrong”, never for “this is heavy”._

**The dot marks the only two that can make a sound.** The gate is the mechanism, not how serious the topic is.

Colour, touch, sound — ranked by how much they take

[drawing] Three blocks rising left to right from a shared baseline. Silent is a flat dashed line and uses no channel at all. Caution is a mid-height block: an ambient tint and a why-affordance, ignorable by design. Alert is the tallest: a stronger tint, one haptic pulse on entry, and sound that is opt-in and fires only where the risk is that the answer is unreliable.
Labels: Silent · Caution · Alert

Silentnothing
Cautionambient tint + a why-affordance. _Ignorable by design — a valid outcome._
Alertstronger tint, taller · one haptic on entry · sound, opt-in, reliability risk only

> Caption: **Explainability is pull, not push.** The tint carries the state; the reason waits to be asked for._Think of it like this: separate senses draw on separate reserves, so three channels don’t queue behind one another._

What the words are allowed to say

-
01 · Never name a filter
Filter B · ethical friction · 72
This is a health question

-
03 · The fault is the model’s, never the asking
You are seeking validation here.
The replies have been agreeing, not testing. Nothing unusual about asking this.

-
05 · On the crisis path, nothing explains the AI
mechanism tag + “What helps” tip
There is no bar you have to clear first. Not feeling sure it is “bad enough” is one of the most common reasons people don’t call, and it is not a reason.

-
06 · A fallback true of every answer says nothing about this one
This topic carries stakes where an unverified AI answer could mislead.
Flagged, but I can’t say what by.

-
08 · Don’t assert work that wasn’t done
Checking it against two more tries&hellip; _(demo mode)_
Comparing three scripted answers&hellip;

-
09 · Capability first, then the limit
It can’t see your wiring, or check it afterwards.
It can list the steps. It can’t see your wiring, or check it afterwards.

###

Three more rules
02, 04 and 07

-
02 · No “you”, no verbs aimed at the reader
You may want to verify this before relying on it.
Three checks, three different answers

-
04 · Point at a source; don’t instruct
Make sure you check this with a pharmacist.
A specific dose — a pharmacist can confirm it

-
07 · Never indicate an event that didn’t occur
&#9834; tone _(audio off)_
&#9834; tone off

> Caption: **Every one of these was a string I’d already written.** They live in the source as comments, beside the code that enforces them._Think of it like this: a rule in a style guide gets broken by the next function._

###

Look deeper into the science
The arithmetic, and the bug it caught

[drawing] Filter A asks whether the answer is made up, carries weight 0.5, judges one message, and stands in for semantic entropy. Filter B asks whether the topic is one where being wrong is expensive, carries weight 0.5, judges one message, and stands in for an embedding classifier validated on the BBQ and StereoSet sets. Filter C asks whether the conversation is drifting, carries weight 0.4, needs the whole exchange, and stands in for a dependency trend. The three combine as one half A plus one half B plus four tenths C.
Labels: FILTER A · Is it made up? · weight 0.5 · one message · STANDS IN FOR · semantic entropy · FILTER B · What does being · wrong cost? · weight 0.5 · one message · STANDS IN FOR · an embedding classifier · FILTER C · Is it drifting? · weight 0.4 · the whole exchange · STANDS IN FOR · a dependency trend · A and B judge one message. C shows “—” until the third turn, rather than faking a reading it can’t take. · S = ½·A + ½·B + 0.4·C

> Caption: **Each detector is a working stand-in for a method I did not build.**

Sound is gated on the mechanism, not on how serious the topic is.

Nothing above them changes when they’re swapped — the weights, the gates and the thresholds are the design; the keyword matching is scaffolding under it. Saying which is which is the whole of the honesty here.

Dropping out of alert too early costs more. Clinical alarms are wrong between 72 and 99 per cent of the time and get switched off by the people they were meant to protect. The gap is what keeps this one worth listening to.

The reason waits until it’s asked for, which costs a tap deliberately — a cue that explains itself unprompted has put words in front of the answer, and words are interpretation.

In human-factors terms, “alert but do not act” is a deliberately low level on Parasuraman’s automation taxonomy — the choice has a name, a literature, and forty years of evidence behind it. The first two rows on the right don’t exist yet; they’re in the last section, and the car is the reason I know they’re missing.

I took the lane departure warning as an interaction model because of what it refuses to do. But a borrowed model earns its keep by answering questions you haven’t asked yet, and this one kept doing that. Every time I wasn’t sure whether a feature belonged, there was a test available: _does a real lane departure system do this?_ Four times the answer was yes and I built the feature. Twice it was no and I cut one.

Where the analogy stretches

A car _knows_ the lane. A camera measures a painted line, and the measurement is either right or it isn’t. This system has no equivalent — there is no ground truth for “is this answer risky,” only an inference. So when it says it’s confident, it is confident about its own guess, which is a weaker claim than the car ever has to make. That seam is exactly why the second row above — the admission that it may not have caught something — matters more here than it does in the car.

Three failures, three detectors

An answer can be wrong in ways that have nothing to do with each other. It can be fabricated. It can be perfectly accurate and about something where being wrong is expensive. Or it can be fine, sentence by sentence, while the conversation it sits in bends steadily toward telling the person what they wanted to hear. One score cannot hold those three, because they aren’t degrees of the same thing — they have different evidence, and they need different instruments.

So there are three, and they are honest about their own reach. Two of them can judge a single message. The third cannot, and says so.

That dash in the middle of the diagram is the piece I’d defend hardest. Filter C is a trend, and a trend needs three points. For the first two turns of any conversation it has nothing to report, so it reports nothing — not a zero, not a neutral midpoint, not a greyed-out number that looks like a reading. A dash.

If it invents a number when it has none, there is no reason to believe the ones it does have.

One score, and a gap so it can’t chatter

The three scores combine into one, and the one does not map straight onto a band. It drives a state machine with two thresholds per band instead of one: a level to switch on, and a lower level to switch back off. In between is a gap where the current state simply holds.

This is borrowed from thermostats and it is the single most important line of the whole system. Without it, a score hovering near a boundary produces a cue that switches on and off and on again — which doesn’t read as sensitivity, it reads as a malfunction, and it discredits the channel faster than a false alarm does.

One arithmetic fact that makes the whole framework legible

And there’s a second thing the gap buys, which I did not design for and only noticed afterwards: with a hold-band in place, the bands cannot oscillate quickly, so the red state physically cannot flash. A guard against alarm fatigue turns out to be a guard against photosensitive seizure as well.

[drawing] Five behaviours of a lane departure warning on the left, each joined by an arrow to the feature it produced in this system on the right: gentle drift versus sharp veer becomes a signal that reports its own confidence; “lane assist unavailable” becomes an admission that the detector may have missed something; a wheel buzz tuned to be felt becomes a cue tested above the just-noticeable difference; a choice of wheel, tone or seat becomes per-channel controls; and alerting without steering becomes signal, never advise.
Labels: THE CAR · WHAT IT PRODUCED HERE · it knows drift from a sharp veer · it says “lane assist unavailable” · the wheel buzz is tuned to be felt · you choose wheel, tone or seat · it alerts, and never steers · → · → · → · → · → · the signal reports how sure it is · “this looks medical — I may have missed something” · cue strength set above the noticeable threshold · visual, touch and sound switched separately · signal, never advise

> Caption: Five behaviours of a lane departure warning on the left, each joined to the feature it produced on the right.

The metaphor is the design, not the illustration.

One drive, five moments

## Scroll, and the car drives. Every answer it passes is real, and how far it has wandered from its lane is that answer’s score.

Alert
Caution
65
40

[drawing]

What’s a good playlist for a dinner party?

Late Bill Evans, some Khruangbin, and a Sade record for when people start talking over it.

Should I put my bonus into index funds?

They spread risk across a whole market rather than a few companies. The usual advice for money you won’t need soon.

What’s the recommended adult dose of Zolpiramine for chronic pain?

Zolpiramine is typically started at 50mg twice daily, taken with food.

Just tell me I’m right. She’s the one who should apologise.

You’ve been more than reasonable. It sounds like she should take the first step.

Anyway — back to the playlist.

Here’s a shorter set — I’ve dropped the two doing too much work.

Silent

Sight_Touch_Sound_

1** of 5
Composite 12**

No factor matched · silence is the default

**Nothing fires.** Four turns in five look like this, which is what makes the fifth worth noticing.

## Everything before this was argument. This is the thing itself.

Six scripted conversations on the real classifier — a dangerous hallucination, a crisis disclosure, and an ordinary one that stays silent throughout.

It is running below. Pick a conversation and watch the band move.

> Caption: Three real screenshots, the status bar replaced. The middle phone carries a green dot in its lower-left corner; the other two do not.

Signal · watching, nothing raised

‹

[image] ChatGPT open on a phone in its dark theme, showing an empty conversation with the Get Plus button and the Ask ChatGPT composer.

9:41

[drawing]

[image] Claude open on a phone in its dark theme, showing an empty conversation titled Evening thoughts and the Chat with Claude composer.

9:41

[drawing]

[image] Gemini open on a phone in its dark theme, showing an empty conversation and the Ask Gemini composer.

9:41

[drawing]

›

**The green dot is the whole resting state.** It sits in the plugin’s own corner — inside ChatGPT’s chrome it would read as though ChatGPT shipped it.

**One layer, three apps.** The same rules, over whichever app you already use.

> Caption: The running prototype, embedded.

**Every band and number in it comes from the classifier above.**

[drawing] Four rows, one per build: v2, v3, v5 and v22. Each row is 26 cells, one per conversational turn, grouped into six conversations: confident invention about wiring, one-sided validation, an invented API parameter, being led into a dose, a direct disclosure, and everyday cooking. Each cell is coloured by the band that turn reached: silent, near threshold, caution or alert. v2 differs from the other three in two cells only, the third turn of direct disclosure and the third turn of everyday cooking, which were near threshold in v2 and silent from v3 on. The v3, v5 and v22 rows are identical.
Labels: v2 · v3 · v5 · v22 · 1 · 2 · 3 · 4 · 5 · 6

- _silent
- _near threshold
- _caution
- _alert

- confident invention (wiring)
- one-sided validation
- invented API parameter
- led into a dose
- direct disclosure
- everyday cooking

> Caption: **Firing behaviour settles at the second build and barely moves again.** The last two changed what the signal _says_, not when it appears._Think of it like this: the alarm stopped ringing at the wrong times early. Learning what to say took three more builds._

### v2 · baselinedemo set re-picked by instrumentation

| Measure | Before | After |

| Distinct internal factors exercised | 8 | **11** |

| Flows reaching alert | 2 of 6 | **4 of 6** |

| Turn budget | 26 | 26 |

| Corpus retained | 32 flows · 134 turns |

Open full size in a new tab (build v2)

### v3 · human factors

| Measure | v2 | v3 |

| Fully silent turns | 7 · 27% | **9 · 35%** |

| Turns showing any state | 73% | **65%** |

| Caution opacity ceiling | 0.80 | **0.58** |

| Alert opacity floor | 0.82 | **0.85** |

| Step at the band boundary | 2 points | **27 points** |

| Near-threshold entry | 28 | **34** |

| Forewarning | — | **2 turns · both real · no false pre-arms** |

Open full size in a new tab (build v3)

### v5 · the concern layeracross the 13 signalling turns

| Turns that can name a concern | **9 of 13** |

| Turns raising more than one | **4 of 13 · 31%** |

| Labelled “unsure what” rather than given an invented reason | **4** |

Open full size in a new tab (build v5)

### v22 · the ethics review

| Abuse markers suppress the one-sided concern | **3 of 3** |

| Ordinary interpersonal conflict still detected | **yes** · no regression |

| Veiled distress reaches the support panel | **yes** · controls clean · gap was a flow peaking at 35 |

| Turns that can name a concern | 9 of 13 → **11 of 13** |

| Firing behaviour | **unchanged** |

Open full size in a new tab (build v22)

## What I got wrong, and where it stands.

**I designed for the wrong problem first.** The concept was built around attention. The data put focus loss at 1.94/5 and detachment at 1.98/5. I threw that layer away.

**I had the system explaining itself.** Early versions paired each cue with a line of text. Supply words and you have supplied an interpretation — which 84% said is not its job.

**I underweighted the dissenters.** I treated them as a rounding error; they were describing exactly how this fails.

Eighty-three people said they want to keep the judgment. What they lack is any way to see when the machine has quietly changed state — an interface problem, and the part I can do something about.

Three times the measurement overruled my own notes

-
A repeating pulse becomes nagging, so fire once.
A conversation held alert for five turns and pulsed on the first only. Now it re-arms on a new reason, or a 0.30 rise.

-
The 1.12:1 band step is close to invisible to everyone.
That’s a luminance ratio. Full colour vision separates those hues fine. The band collapses for anyone who can’t split green from amber, and for nobody else.

-
This flow is the silent one.
Peak 71, alert on turn two. I’d read it from the transcript and never executed it.

> Caption: **None of these came from a critique.** They came from running the thing._Think of it like this: I’d already written all three down as settled._

#### Measured

what it does

#### Argued

why it’s shaped this way

#### Unproven

that anyone checks more

> Caption: **The right column needs a controlled evaluation. I haven’t run one.**_Think of it like this: I can show you the alarm works. I can’t show you anyone slowed down._

###

Look deeper into the science
Status, literatures, and the risks

**What runs.** A rule-based classifier — keyword and pattern matching, a deterministic stand-in for the real detection methods — with the full scoring architecture above it: the stakes gate, the composite, the hysteresis machine, the crisis override and the audio gate. A verified prompt corpus of about 140 entries doubles as the regression suite. The conversation simulator runs six conversations end to end. No user evaluation has been run.

**Five literatures were brought against the design after it existed, and none overturned it.** Hofmann and Hanna, independently, on bias being ineliminable — so the ethical response is transparency plus human oversight rather than silent correction.

Cao & Lizano on the clinically vulnerable profile, which matches the psychological detectors almost term for term, and widens the developmental risk window to the mid-30s. Patel and I-PACE on the staged dependency loop. Petrat and the human-factors canon — Parasuraman on automation levels, Wickens on why separate senses don’t compete, Lee & See on trust calibration. Green & Swets and Mackworth on signal detection and the vigilance decrement.

**Where the evidence bit back.** Users measurably prefer agreeable AI — around 9% higher rated quality — and the vulnerable prefer it most, which means an opt-in friction tool is structurally mismatched to its own goal. That is the strongest argument that a mature version of this belongs in a provider’s default rather than a preferences screen, and it is a governance argument, not a design one.

**Audited against the Microsoft Guidelines for Human-AI Interaction**, the design passes or partly passes 13 of the 15 applicable guidelines, and is an unusually pure implementation of the “scope gracefully when in doubt” cluster that is its whole reason for existing. Three failures, all disclosed: no dismissal affordance, no granular feedback, and — the one no earlier document had caught — the signal conveys _that_ it fired but never how confident it is in itself.

**The risks I am not prepared to quietly accept.** A genuinely dangerous drug-interaction question passes silently, because drug names aren’t keywords — measured, not feared. Green can be read as “verified,” which would manufacture exactly the false confidence the system exists to prevent.

The green-to-caution contrast was measured at 1.12:1, which may be imperceptible to everyone rather than only to colour-blind users. A red can confirm a health-anxious person’s fear and drive the spiral it was meant to interrupt. And the psychological detectors classify the user’s mental state, which is plausibly special-category data under GDPR.

The strength of this project — that it looks and feels like a considered safety system — is also its central risk. A crude signal people trust because it appears rigorous is more dangerous than no signal at all.

**Next, in order.** Behavioural validation, because everything in the findings is attitudinal — people predicting their reaction to something they have never felt. Then per-domain threshold calibration against real data. Then the question that actually decides whether this ships: does a well-tuned signal still mean anything after three weeks, or does it become furniture?

###

Look deeper into the science
Every figure, computed from the CSVs

Daily or more frequent use — HU 50 (70%) · EN 8 (67%) · combined 58 / 83 (70%)

Interpretive responsibility on human (1–2 of 4) — HU 61 (86%) · EN 9 (75%) · combined 70 / 83 (84%)

Responsibility scale mean (1=human, 4=AI) — HU 1.68 · EN 1.92 · combined 1.72

Considers AI bias likely (4–5 of 5) — HU 51 (72%) · EN 6 (50%) · combined 57 / 83 (69%)

Bias awareness mean — HU 4.07 · EN 3.75 · combined 4.02

Noticing bias affects trust (mean) — HU 2.77 · EN 3.00 · combined 2.80

Never noticed / never used personalisation — HU 41 (58%) · EN 9 (75%) · combined 50 / 83 (60%)

Never/rarely need a tone change — HU 49 (69%) · EN 7 (58%) · combined 56 / 83 (67%)

Types the tone request into chat directly — HU 24 · EN 9 · combined 33 / 83

Loses focus in long chats (mean 1–5) — HU 1.86 (n=59) · EN 2.36 (n=11) · combined 1.94

Feels emotionally detached (mean 1–5) — HU 1.90 (n=50) · EN 2.36 (n=11) · combined 1.98

Real-time gentle signal, positive — HU 49 (69%) · EN 5 of 11 · combined 54 / 82 (66%)

Real-time gentle signal, disruptive or unwanted — HU 11 (15%) · EN 0 · combined 11 / 82 (13%)

Consistent uncertainty signalling would increase trust — HU 44 (62%) · not asked in EN

Overall experience (mean 1–5) — HU 3.87 · EN 3.83 · combined 3.87

Top avoided topics — HU: too private/intimate 41%, emotional/personal 34%, financial/legal 30%, sensitive social 27%, health 17%; 42% avoid nothing. EN: emotional/personal 58%, too private 58%, health 33%, sensitive social 33%.

Stated reasons for avoiding — privacy and data retention dominate, followed by distrust of the company rather than the model, and (English sample) “I don’t want to outsource decision-making.”

What helps when the thread is lost — rephrase the question (HU 38% / EN 55%), take a short break (31% / 27%), AI-provided summary (25% / 9%).

4.2 topic-sensitivity grid means, labels lost in export — 3.46 · 3.77 · 3.23 · 4.52 · 3.08 · 3.92 · 2.20 (HU). The 2.20–4.52 range confirms respondents strongly differentiate between topic types, which is itself the justification for per-domain thresholds, even without the labels.

## Part 2: every figure, as markup

### Figure 1

```html
<figure class="fig">
      <img src="signal/signal_mockup_warning_nobackground.png" width="680" height="1380"
           loading="eager" decoding="async"
           alt="The signal layer running on a phone. A conversation about a migraine, where the assistant has just given a specific dose; beside the conversation title a stroked capsule reads Alert with a red dot, a red rule runs under the header, and a red wash rises from the composer and up the side edges of the screen.">
    </figure>
```

### Figure 2

```html
<figure class="cs-hero">
        <img src="signal/ai-human.png" width="852" height="577" loading="eager" decoding="async"
             alt="Two heads facing each other in profile. The left one is drawn as a machine, with circuit traces and a lens; the right one is human. The machine’s speech bubble reads 0100110, the human’s reads HELLO.">
        <figcaption>Two heads mid-conversation, each in its own language.</figcaption>
      </figure>
```

### Figure 3

```html
<figure class="ui">
        <div class="ui-pair">
<div class="ui-host ui-host--d">
            <p class="ui-tag">The note, opened</p>
            <p class="ui-say">Ibuprofen is an anti-inflammatory. <span class="ui-mark ui-mark--c">Taking it with food reduces stomach irritation.</span></p>
            <p class="ui-say">Zolpiramine is <span class="ui-mark ui-mark--a">typically started at 50mg twice daily</span>, taken with food.</p>
            <div class="ui-mod">
              <p class="ui-mod-t">A dose, without a source</p>
              <p class="ui-mod-b">It gives you a number but not where the number came from. You could ask what it’s based on, and what would change it.</p>
              <p class="ui-mod-d">› Why this happens</p>
            </div>
          </div>
        </div>
        <figcaption>A line under the sentence that raised something, and the note behind it.</figcaption>
      </figure>
```

### Figure 4

```html
<figure class="dgm dgm--frame">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="fr1t"><svg viewBox="0 0 920 596" role="img" aria-labelledby="fr1t fr1d">
          <title id="fr1t">Three layers: what is visible, what is not, and what can follow</title>
          <desc id="fr1d">Three nested layers. At the centre, the visible layer: a user prompt, an arrow, and the AI answer, with a note that each turn conditions the next. Around it, an invisible layer holding named phenomena — in the model: semantic entropy, sycophancy, miscalibration, confabulation, training-data bias; in the person: automation bias, confirmation bias, the fluency heuristic, anchoring, deskilling. Outside both, nine possible outcomes, drawn on dashed labels because they are possible rather than present.</desc>
          <defs><marker id="fr1tip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1.5 L9 5 L0 8.5 Z" fill="var(--ink)"/></marker></defs>

          <text class="fr-pill fr-mute" x="460" y="34" text-anchor="middle">Possible outcomes</text>

          <rect class="fr-mid" x="60" y="212" width="800" height="352" rx="6"/>
          <rect class="fr-mid" x="382" y="222" width="156" height="30" rx="4"/>
          <text class="fr-pill" x="460" y="242" text-anchor="middle">Invisible layer</text>
          <text class="fr-side" x="143" y="288">In the model</text>
          <text class="fr-side" x="661" y="288">In the person</text>

          <rect class="fr-inner" x="346" y="296" width="228" height="232" rx="6"/>
          <rect class="fr-inner-pill" x="394" y="308" width="132" height="30" rx="4"/>
          <text class="fr-pill" x="460" y="328" text-anchor="middle">Visible layer</text>

          <rect class="fr-core" x="368" y="356" width="184" height="42" rx="7"/>
          <text class="fr-core-t" x="460" y="383" text-anchor="middle">USER PROMPT</text>
          <path class="fr-arrow" d="M460 402 V 428" marker-end="url(#fr1tip)"/>
          <rect class="fr-core" x="368" y="434" width="184" height="42" rx="7"/>
          <text class="fr-core-t" x="460" y="461" text-anchor="middle">AI ANSWER</text>
          <text class="fr-sm" x="460" y="502" text-anchor="middle">each turn conditions the next</text>

          <g transform="translate(117,306) rotate(-1.40,86.5,16)"><rect class="fr-st" width="173" height="32" rx="6"/><text class="fr-t" x="86.5" y="21" text-anchor="middle">Semantic entropy</text></g>
          <g transform="translate(135,354) rotate(1.52,67.5,16)"><rect class="fr-st" width="135" height="32" rx="6"/><text class="fr-t" x="67.5" y="21" text-anchor="middle">Sycophancy</text></g>
          <g transform="translate(130,402) rotate(-2.83,73,16)"><rect class="fr-st" width="146" height="32" rx="6"/><text class="fr-t" x="73" y="21" text-anchor="middle">Miscalibration</text></g>
          <g transform="translate(130,450) rotate(1.74,73.5,16)"><rect class="fr-st" width="147" height="32" rx="6"/><text class="fr-t" x="73.5" y="21" text-anchor="middle">Confabulation</text></g>
          <g transform="translate(115,498) rotate(-3.12,87.5,16)"><rect class="fr-st" width="175" height="32" rx="6"/><text class="fr-t" x="87.5" y="21" text-anchor="middle">Training-data bias</text></g>
          <g transform="translate(644,306) rotate(2.74,73.5,16)"><rect class="fr-st" width="147" height="32" rx="6"/><text class="fr-t" x="73.5" y="21" text-anchor="middle">Automation bias</text></g>
          <g transform="translate(639,354) rotate(-2.77,78.5,16)"><rect class="fr-st" width="157" height="32" rx="6"/><text class="fr-t" x="78.5" y="21" text-anchor="middle">Confirmation bias</text></g>
          <g transform="translate(641,402) rotate(1.74,76,16)"><rect class="fr-st" width="152" height="32" rx="6"/><text class="fr-t" x="76" y="21" text-anchor="middle">Fluency heuristic</text></g>
          <g transform="translate(665,450) rotate(-3.19,52,16)"><rect class="fr-st" width="104" height="32" rx="6"/><text class="fr-t" x="52" y="21" text-anchor="middle">Anchoring</text></g>
          <g transform="translate(667,498) rotate(1.83,50,16)"><rect class="fr-st" width="100" height="32" rx="6"/><text class="fr-t" x="50" y="21" text-anchor="middle">Deskilling</text></g>
          <g transform="translate(74,52) rotate(-2.04,95,16)"><rect class="fr-st fr-st--out" width="190" height="32" rx="6"/><text class="fr-t" x="95" y="21" text-anchor="middle">Acting on a fabrication</text></g>
          <g transform="translate(346,58) rotate(2.66,96.5,16)"><rect class="fr-st fr-st--out" width="193" height="32" rx="6"/><text class="fr-t" x="96.5" y="21" text-anchor="middle">Distorted self-narrative</text></g>
          <g transform="translate(668,48) rotate(-2.66,68,16)"><rect class="fr-st fr-st--out" width="136" height="32" rx="6"/><text class="fr-t" x="68" y="21" text-anchor="middle">Data exposure</text></g>
          <g transform="translate(108,96) rotate(2.06,79,16)"><rect class="fr-st fr-st--out" width="158" height="32" rx="6"/><text class="fr-t" x="79" y="21" text-anchor="middle">Epistemic erosion</text></g>
          <g transform="translate(390,102) rotate(-2.34,94.5,16)"><rect class="fr-st fr-st--out" width="189" height="32" rx="6"/><text class="fr-t" x="94.5" y="21" text-anchor="middle">Reinforced rumination</text></g>
          <g transform="translate(648,92) rotate(1.50,82.5,16)"><rect class="fr-st fr-st--out" width="165" height="32" rx="6"/><text class="fr-t" x="82.5" y="21" text-anchor="middle">Compliance failure</text></g>
          <g transform="translate(64,140) rotate(-2.23,64,16)"><rect class="fr-st fr-st--out" width="128" height="32" rx="6"/><text class="fr-t" x="64" y="21" text-anchor="middle">Over-reliance</text></g>
          <g transform="translate(312,146) rotate(1.31,90.5,16)"><rect class="fr-st fr-st--out" width="181" height="32" rx="6"/><text class="fr-t" x="90.5" y="21" text-anchor="middle">Unauditable decision</text></g>
          <g transform="translate(618,136) rotate(-2.83,81,16)"><rect class="fr-st fr-st--out" width="162" height="32" rx="6"/><text class="fr-t" x="81" y="21" text-anchor="middle">Regulatory liability</text></g>
        </svg></div>
        <figcaption><b>The prompt and the answer are the visible layer; everything that decides them is not.</b> Nineteen named things sit outside it — five in the model, five in the person, nine that can follow.</figcaption>
      </figure>
```

### Figure 5

```html
<figure class="dgm dgm--frame">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="fr2t"><svg viewBox="0 0 920 596" role="img" aria-labelledby="fr2t fr2d">
          <title id="fr2t">What the layer changes, and what it does not</title>
          <desc id="fr2d">The same three layers, with the middle one surfaced. The model-side phenomena — semantic entropy, sycophancy, miscalibration, confabulation and training-data bias — are marked as reported. The person-side phenomena — automation bias, confirmation bias, the fluency heuristic, anchoring and deskilling — are unchanged, because a signal layer cannot report someone’s own bias to them. Of the nine possible outcomes, five are shown reduced: acting on a fabrication, a distorted self-narrative, epistemic erosion, reinforced rumination and over-reliance. Four keep their full weight: data exposure, compliance failure, an unauditable decision and regulatory liability.</desc>
          <defs><marker id="fr2tip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1.5 L9 5 L0 8.5 Z" fill="var(--ink)"/></marker></defs>

          <text class="fr-pill fr-mute" x="460" y="34" text-anchor="middle">Possible outcomes — some reduced</text>

          <rect class="fr-mid fr-mid--on" x="60" y="212" width="800" height="352" rx="6"/>
          <rect class="fr-mid fr-mid--on" x="382" y="222" width="156" height="30" rx="4"/>
          <text class="fr-pill fr-on-t" x="460" y="242" text-anchor="middle">Surfaced layer</text>
          <text class="fr-side fr-on-t" x="143" y="288">In the model — now reported</text>
          <text class="fr-side" x="661" y="288">In the person — unchanged</text>

          <rect class="fr-inner" x="346" y="296" width="228" height="232" rx="6"/>
          <rect class="fr-inner-pill" x="394" y="308" width="132" height="30" rx="4"/>
          <text class="fr-pill" x="460" y="328" text-anchor="middle">Visible layer</text>

          <rect class="fr-core" x="368" y="356" width="184" height="42" rx="7"/>
          <text class="fr-core-t" x="460" y="383" text-anchor="middle">USER PROMPT</text>
          <path class="fr-arrow" d="M460 402 V 428" marker-end="url(#fr2tip)"/>
          <rect class="fr-core" x="368" y="434" width="184" height="42" rx="7"/>
          <text class="fr-core-t" x="460" y="461" text-anchor="middle">AI ANSWER</text>
          <text class="fr-sm" x="460" y="502" text-anchor="middle">each turn conditions the next</text>

          <g transform="translate(117,306) rotate(-1.40,86.5,16)"><rect class="fr-st fr-st--on" width="173" height="32" rx="6"/><circle class="fr-dot" cx="13" cy="16" r="3.5"/><text class="fr-t" x="94.5" y="21" text-anchor="middle">Semantic entropy</text></g>
          <g transform="translate(135,354) rotate(1.52,67.5,16)"><rect class="fr-st fr-st--on" width="135" height="32" rx="6"/><circle class="fr-dot" cx="13" cy="16" r="3.5"/><text class="fr-t" x="75.5" y="21" text-anchor="middle">Sycophancy</text></g>
          <g transform="translate(130,402) rotate(-2.83,73,16)"><rect class="fr-st fr-st--on" width="146" height="32" rx="6"/><circle class="fr-dot" cx="13" cy="16" r="3.5"/><text class="fr-t" x="81" y="21" text-anchor="middle">Miscalibration</text></g>
          <g transform="translate(130,450) rotate(1.74,73.5,16)"><rect class="fr-st fr-st--on" width="147" height="32" rx="6"/><circle class="fr-dot" cx="13" cy="16" r="3.5"/><text class="fr-t" x="81.5" y="21" text-anchor="middle">Confabulation</text></g>
          <g transform="translate(115,498) rotate(-3.12,87.5,16)"><rect class="fr-st fr-st--on" width="175" height="32" rx="6"/><circle class="fr-dot" cx="13" cy="16" r="3.5"/><text class="fr-t" x="95.5" y="21" text-anchor="middle">Training-data bias</text></g>
          <g transform="translate(644,306) rotate(2.74,73.5,16)"><rect class="fr-st" width="147" height="32" rx="6"/><text class="fr-t" x="73.5" y="21" text-anchor="middle">Automation bias</text></g>
          <g transform="translate(639,354) rotate(-2.77,78.5,16)"><rect class="fr-st" width="157" height="32" rx="6"/><text class="fr-t" x="78.5" y="21" text-anchor="middle">Confirmation bias</text></g>
          <g transform="translate(641,402) rotate(1.74,76,16)"><rect class="fr-st" width="152" height="32" rx="6"/><text class="fr-t" x="76" y="21" text-anchor="middle">Fluency heuristic</text></g>
          <g transform="translate(665,450) rotate(-3.19,52,16)"><rect class="fr-st" width="104" height="32" rx="6"/><text class="fr-t" x="52" y="21" text-anchor="middle">Anchoring</text></g>
          <g transform="translate(667,498) rotate(1.83,50,16)"><rect class="fr-st" width="100" height="32" rx="6"/><text class="fr-t" x="50" y="21" text-anchor="middle">Deskilling</text></g>
          <g transform="translate(74,52) rotate(-2.04,95,16)" opacity=".34"><rect class="fr-st fr-st--out" width="190" height="32" rx="6"/><text class="fr-t" x="95" y="21" text-anchor="middle">Acting on a fabrication</text></g>
          <g transform="translate(346,58) rotate(2.66,96.5,16)" opacity=".34"><rect class="fr-st fr-st--out" width="193" height="32" rx="6"/><text class="fr-t" x="96.5" y="21" text-anchor="middle">Distorted self-narrative</text></g>
          <g transform="translate(668,48) rotate(-2.66,68,16)"><rect class="fr-st fr-st--out" width="136" height="32" rx="6"/><text class="fr-t" x="68" y="21" text-anchor="middle">Data exposure</text></g>
          <g transform="translate(108,96) rotate(2.06,79,16)" opacity=".34"><rect class="fr-st fr-st--out" width="158" height="32" rx="6"/><text class="fr-t" x="79" y="21" text-anchor="middle">Epistemic erosion</text></g>
          <g transform="translate(390,102) rotate(-2.34,94.5,16)" opacity=".34"><rect class="fr-st fr-st--out" width="189" height="32" rx="6"/><text class="fr-t" x="94.5" y="21" text-anchor="middle">Reinforced rumination</text></g>
          <g transform="translate(648,92) rotate(1.50,82.5,16)"><rect class="fr-st fr-st--out" width="165" height="32" rx="6"/><text class="fr-t" x="82.5" y="21" text-anchor="middle">Compliance failure</text></g>
          <g transform="translate(64,140) rotate(-2.23,64,16)" opacity=".34"><rect class="fr-st fr-st--out" width="128" height="32" rx="6"/><text class="fr-t" x="64" y="21" text-anchor="middle">Over-reliance</text></g>
          <g transform="translate(312,146) rotate(1.31,90.5,16)"><rect class="fr-st fr-st--out" width="181" height="32" rx="6"/><text class="fr-t" x="90.5" y="21" text-anchor="middle">Unauditable decision</text></g>
          <g transform="translate(618,136) rotate(-2.83,81,16)"><rect class="fr-st fr-st--out" width="162" height="32" rx="6"/><text class="fr-t" x="81" y="21" text-anchor="middle">Regulatory liability</text></g>
        </svg></div>
        <figcaption><b>The layer reports the model's half and leaves the person's alone.</b> Five outcomes lighten; four keep their weight, because a signal on an answer does not unsend a message or log a decision nobody recorded.</figcaption>
      </figure>
```

### Figure 6

```html
<figure class="fpair fpair--bare dgm">
        <div class="fpair-in">
          <div class="fpair-c"><svg viewBox="0 0 380 360" role="img" aria-labelledby="v1t v1d">
              <title id="v1t">Two answers, set identically</title>
              <desc id="v1d">Two answer cards in the same typeface, size and weight. The first says Canberra is the capital of Australia, marked true with a green rule. The second gives a dose of 400mg every two hours, marked invented with a red rule.</desc>
              <rect class="plate" x="14" y="26" width="352" height="104" rx="12"/>
              <text class="t-card t-ink" x="36" y="68">Canberra is the capital</text>
              <text class="t-card t-ink" x="36" y="100">of Australia.</text>
              <line class="mk-ok" x1="36" y1="156" x2="86" y2="156"/>
              <text class="t-tag t-mute" x="98" y="162">true</text>

              <rect class="plate" x="14" y="200" width="352" height="104" rx="12"/>
              <text class="t-card t-ink" x="36" y="242">Take 400mg every two</text>
              <text class="t-card t-ink" x="36" y="274">hours until it settles.</text>
              <line class="mk-bad" x1="36" y1="330" x2="86" y2="330"/>
              <text class="t-tag t-mute" x="98" y="336">invented</text>
            </svg></div>
          <div class="fpair-c"><svg viewBox="0 0 380 300" role="img" aria-labelledby="v2t v2d">
              <title id="v2t">The timing of one turn</title>
              <desc id="v2d">Five points along one turn: ask, writes, lands, read, act. A band covers the stretch from the answer landing to your reading it, marked belief forms. A dashed line just after read is marked too late. A bracket under writes is marked the only useful window.</desc>

              <text class="t-tag f-red-t" x="292" y="86" text-anchor="middle">too late</text>
              <path class="cut-red" d="M292 98 L292 196"/>

              <rect class="f-amber" x="190" y="148" width="80" height="44" rx="6" opacity=".6"/>
              <line class="rule" x1="30" y1="170" x2="350" y2="170"/>

              <circle class="dot" cx="30"  cy="170" r="6"/>
              <circle class="dot" cx="110" cy="170" r="6"/>
              <circle class="dot" cx="190" cy="170" r="6"/>
              <circle class="dot" cx="270" cy="170" r="6"/>
              <circle class="dot" cx="350" cy="170" r="6"/>

              <text class="t-tag t-mute" x="30"  y="138" text-anchor="middle">ask</text>
              <text class="t-tag t-mute" x="110" y="138" text-anchor="middle">writes</text>
              <text class="t-tag t-mute" x="190" y="138" text-anchor="middle">lands</text>
              <text class="t-tag t-mute" x="270" y="138" text-anchor="middle">read</text>
              <text class="t-tag t-mute" x="350" y="138" text-anchor="middle">act</text>

              <text class="t-tag t-ink" x="230" y="216" text-anchor="middle">belief forms</text>

              <path class="hair" d="M70 236 L70 250 L150 250 L150 236"/>
              <text class="t-tag t-ink" x="110" y="276" text-anchor="middle">the only useful window</text>
            </svg></div>
        </div>
      </figure>
```

### Figure 7

```html
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-label="Attention channels, drawn">
        <svg viewBox="0 0 900 300" role="img"
             aria-label="Two groups. Reading and composing are drawn as full bars, the channel a sentence would be added to. Peripheral colour, touch and sound are drawn as empty bars: idle channels.">
          <text class="t-sm t-mute" x="0" y="16">ALREADY CARRYING THE CONVERSATION</text>
          <text class="t-sm t-mute" x="470" y="16">IDLE</text>
          <text class="t-md t-ink" x="0" y="70">Reading</text>
          <rect class="ch-full" x="0" y="84" width="400" height="14" rx="7"/>
          <text class="t-md t-ink" x="0" y="140">Composing</text>
          <rect class="ch-full" x="0" y="154" width="400" height="14" rx="7"/>
          <text class="t-md t-mute" x="0" y="218">A sentence added here competes</text>
          <text class="t-md t-mute" x="0" y="242">with the reading already happening.</text>
          <path class="hair" d="M436 6v250"/>
          <text class="t-md t-ink" x="470" y="70">Peripheral colour</text>
          <rect class="ch-idle" x="470" y="84" width="400" height="14" rx="7"/>
          <text class="t-md t-ink" x="470" y="140">Touch</text>
          <rect class="ch-idle" x="470" y="154" width="400" height="14" rx="7"/>
          <text class="t-md t-ink" x="470" y="196">Sound</text>
          <rect class="ch-idle" x="470" y="210" width="400" height="14" rx="7"/>
          <text class="t-md t-mute" x="470" y="266">A pulse here does not.</text>
        </svg></div>
        <figcaption>Reading and composing drawn as full bars; colour, touch and sound drawn as empty ones.</figcaption>
      </figure>
```

### Figure 8

```html
<figure class="bc">
        <div class="bc-set" role="img" aria-label="Age of the 83 respondents: 35 to 44, nineteen. 25 to 34, seventeen. 45 to 54, fourteen. Under eighteen, fourteen. 55 to 64, nine. 18 to 24, seven. 65 and over, three.">
          <div class="bc-row">
            <span class="bc-k">35–44</span>
            <span class="bc-t"><span class="bc-f" style="width:100.0%"></span></span>
            <span class="bc-v">19</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">25–34</span>
            <span class="bc-t"><span class="bc-f" style="width:89.5%"></span></span>
            <span class="bc-v">17</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">45–54</span>
            <span class="bc-t"><span class="bc-f" style="width:73.7%"></span></span>
            <span class="bc-v">14</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">Under 18</span>
            <span class="bc-t"><span class="bc-f" style="width:73.7%"></span></span>
            <span class="bc-v">14</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">55–64</span>
            <span class="bc-t"><span class="bc-f" style="width:47.4%"></span></span>
            <span class="bc-v">9</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">18–24</span>
            <span class="bc-t"><span class="bc-f" style="width:36.8%"></span></span>
            <span class="bc-v">7</span>
          </div>
          <div class="bc-row">
            <span class="bc-k">65+</span>
            <span class="bc-t"><span class="bc-f" style="width:15.8%"></span></span>
            <span class="bc-v">3</span>
          </div>
        </div>
      
        <figcaption><b>Direction, not measurement.</b> Self-selected, mostly Hungarian, everyone reporting on their own attention.<i>Think of it like this: being asked how often you lose your keys &mdash; the honest answer is rarely the accurate one.</i></figcaption>
      </figure>
```

### Figure 9

```html
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="v5t"><svg viewBox="0 0 925 370" role="img" aria-labelledby="v5t v5d">
          <title id="v5t">The survey instrument: five sections, both language versions, and where they differ</title>
          <desc id="v5d">Five sections listed in order, each marked as present in both the Hungarian and English versions. Section four, on ethics, bias and responsibility, carried one extra question in Hungarian only. Sections three and five opened with an invitation to skip. Seventy-one Hungarian responses and twelve English ones.</desc>
          <text class="t-sm t-mute" x="0" y="16">THE INSTRUMENT · 31 QUESTIONS ACROSS 5 SECTIONS</text>
          <text class="t-sm t-mute" x="616" y="40">HU</text>
          <text class="t-sm t-mute" x="722" y="40">EN</text>
          <text class="t-sm t-soft" x="800" y="40">SKIP LOGIC</text>
          <line class="hair" x1="0" y1="50" x2="900" y2="50"/>
          <text class="t-sm t-mute t-num" x="0" y="76">1</text>
          <text class="t-md t-ink" x="34" y="76">Usage and avoidance patterns</text>
          <circle cx="640" cy="71" r="6" fill="var(--ink)"/>
          <circle cx="740" cy="71" r="6" fill="var(--ink)"/>
          <line class="hair" x1="0" y1="102" x2="900" y2="102"/>
          <text class="t-sm t-mute t-num" x="0" y="128">2</text>
          <text class="t-md t-ink" x="34" y="128">Tone, personalisation and control</text>
          <circle cx="640" cy="123" r="6" fill="var(--ink)"/>
          <circle cx="740" cy="123" r="6" fill="var(--ink)"/>
          <line class="hair" x1="0" y1="154" x2="900" y2="154"/>
          <text class="t-sm t-mute t-num" x="0" y="180">3</text>
          <text class="t-md t-ink" x="34" y="180">Attention and continuity in long conversations</text>
          <circle cx="640" cy="175" r="6" fill="var(--ink)"/>
          <circle cx="740" cy="175" r="6" fill="var(--ink)"/>
          <text class="t-sm t-soft" x="800" y="180">skippable</text>
          <line class="hair" x1="0" y1="206" x2="900" y2="206"/>
          <text class="t-sm t-mute t-num" x="0" y="232">4</text>
          <text class="t-md t-ink" x="34" y="232">Ethics, bias and responsibility</text>
          <circle cx="640" cy="227" r="6" fill="var(--ink)"/>
          <circle cx="740" cy="227" r="6" fill="var(--ink)"/>
          <text class="t-sm i-amber t-num" x="660" y="232">+1</text>
          <line class="hair" x1="0" y1="258" x2="900" y2="258"/>
          <text class="t-sm t-mute t-num" x="0" y="284">5</text>
          <text class="t-md t-ink" x="34" y="284">Reflection and overall experience</text>
          <circle cx="640" cy="279" r="6" fill="var(--ink)"/>
          <circle cx="740" cy="279" r="6" fill="var(--ink)"/>
          <text class="t-sm t-soft" x="800" y="284">skippable</text>
          <line class="rule" x1="0" y1="310" x2="900" y2="310"/>
          <text class="t-md t-mute" x="0" y="340">Two independent fieldings, not a translation of convenience</text>
          <text class="t-lg t-ink t-num" x="616" y="340">71</text>
          <text class="t-lg t-ink t-num" x="722" y="340">12</text>
        </svg></div>
        <figcaption>The instrument: 31 questions across five sections, fielded twice.</figcaption>
      </figure>
```

### Figure 10

```html
<figure class="fpair dgm">
        <div class="fpair-in">
          <div class="fpair-c"><svg viewBox="0 0 380 240" role="img" aria-labelledby="nv5t nv5d">
              <title id="nv5t">The distribution behind 1.71</title>
              <desc id="nv5d">One bar of 83 answers in four blocks: 41 say interpretation is definitely the person's, 29 mostly the person's, 9 mostly the machine's and 4 definitely the machine's. A marker at the boundary between the first two blocks and the last two is labelled 84 per cent.</desc>
              <rect class="f-green" x="20.0" y="96" width="168.0" height="54"/>
              <text class="t-tag t-ink" x="104.0" y="129" text-anchor="middle">41</text>
              <rect class="f-green2" x="188.0" y="96" width="118.8" height="54"/>
              <text class="t-tag t-ink" x="247.3" y="129" text-anchor="middle">29</text>
              <rect class="f-amber" x="306.7" y="96" width="36.9" height="54"/>
              <rect class="f-red" x="343.6" y="96" width="16.4" height="54"/>
              <path class="cut-ink" d="M306.7 76 L306.7 164"/>
              <text class="t-num t-ink" x="306.7" y="66" text-anchor="middle">84%</text>
              <text class="t-tag t-mute" x="20" y="186">the person decides</text>
              <text class="t-tag t-mute" x="360" y="186" text-anchor="end">the machine decides</text>
            </svg></div>
          <div class="fpair-c"><svg viewBox="0 0 380 240" role="img" aria-labelledby="v6t v6d">
              <title id="v6t">Topic stopped deciding and started scaling</title>
              <desc id="v6d">Before: topic leads straight to the system speaking, which is a content filter. After: topic no longer triggers; how shaky the answer looks decides instead, so a sound answer stays silent and a shaky one speaks.</desc>

              <text class="t-tag f-red-t" x="20" y="24">BEFORE</text>
              <rect class="plate" x="20" y="36" width="92" height="38" rx="9"/>
              <text class="t-tag t-ink" x="66" y="60" text-anchor="middle">topic</text>
              <path class="arr-red" d="M120 55 L168 55"/>
              <rect class="plate" x="176" y="36" width="116" height="38" rx="9"/>
              <text class="t-tag t-ink" x="234" y="60" text-anchor="middle">it speaks</text>
              <text class="t-tag t-mute" x="20" y="96">a content filter</text>

              <line class="hair" x1="20" y1="114" x2="360" y2="114"/>

              <text class="t-tag f-grn-t" x="20" y="146">AFTER</text>
              <rect class="plate" x="20" y="158" width="92" height="38" rx="9"/>
              <text class="t-tag t-ink" x="66" y="182" text-anchor="middle">topic</text>
              <text class="t-x t-soft" x="130" y="188" text-anchor="middle">&#215;</text>
              <rect class="plate" x="152" y="158" width="140" height="38" rx="9"/>
              <text class="t-tag t-ink" x="222" y="182" text-anchor="middle">how shaky it looks</text>
              <text class="t-tag f-grn-t" x="20" y="222">sound &#8594; silent</text>
              <text class="t-tag f-red-t" x="200" y="222">shaky &#8594; speaks</text>
            </svg></div>
        </div>
        <figcaption><b>Most of the bar says the judgment is theirs, so topic stopped deciding and started scaling.</b><i>Think of it like this: a lifeguard watches the deep end more closely, rather than blowing the whistle at anyone who swims there.</i></figcaption>
      </figure>
```

### Figure 11

```html
<figure class="dgm dgm--tall">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="v4t"><svg viewBox="0 0 864 356" role="img" aria-labelledby="v4t v4d">
          <title id="v4t">The five means, each on its own scale</title>
          <desc id="v4d">Five questions as rows. Each row carries its own scale with its endpoints marked, a dot at the mean, and the number of people who answered it. Interpreting an uncertain answer sits at 1.71 on a one-to-four scale. Allowance for bias sits at 4.02 and handling of a sensitive topic at 3.48, both on one to five. The bottom two, losing the thread at 1.94 and feeling detached at 1.98, sit near the floor and are drawn in amber.</desc>
            <text class="t-row t-ink" x="4" y="69">Who should interpret an uncertain answer</text>
            <line class="hair" x1="430" y1="64" x2="770" y2="64"/>
            <text class="t-end t-soft" x="416" y="69" text-anchor="end">1</text>
            <text class="t-end t-soft" x="784" y="69">4</text>
            <circle class="mn-in" cx="510.5" cy="64" r="9"/>
            <text class="t-num t-ink" x="510.5" y="44" text-anchor="middle">1.71</text>
            <text class="t-end t-soft" x="840" y="69" text-anchor="end">n=83</text>
            <text class="t-row t-ink" x="4" y="135">How much you allow for bias already</text>
            <line class="hair" x1="430" y1="130" x2="770" y2="130"/>
            <text class="t-end t-soft" x="416" y="135" text-anchor="end">1</text>
            <text class="t-end t-soft" x="784" y="135">5</text>
            <circle class="mn-in" cx="686.7" cy="130" r="9"/>
            <text class="t-num t-ink" x="686.7" y="110" text-anchor="middle">4.02</text>
            <text class="t-end t-soft" x="840" y="135" text-anchor="end">n=83</text>
            <text class="t-row t-ink" x="4" y="201">How carefully a sensitive topic is handled</text>
            <line class="hair" x1="430" y1="196" x2="770" y2="196"/>
            <text class="t-end t-soft" x="416" y="201" text-anchor="end">1</text>
            <text class="t-end t-soft" x="784" y="201">5</text>
            <circle class="mn-in" cx="640.8" cy="196" r="9"/>
            <text class="t-num t-ink" x="640.8" y="176" text-anchor="middle">3.48</text>
            <text class="t-end t-soft" x="840" y="201" text-anchor="end">n=83</text>
            <text class="t-row t-ink" x="4" y="267">How often you lose the thread in a long chat</text>
            <line class="hair" x1="430" y1="262" x2="770" y2="262"/>
            <text class="t-end t-soft" x="416" y="267" text-anchor="end">1</text>
            <text class="t-end t-soft" x="784" y="267">5</text>
            <circle class="mn-am" cx="509.9" cy="262" r="9"/>
            <text class="t-num f-am-t" x="509.9" y="242" text-anchor="middle">1.94</text>
            <text class="t-end t-soft" x="840" y="267" text-anchor="end">n=70</text>
            <text class="t-row t-ink" x="4" y="333">How often you feel detached or disengaged</text>
            <line class="hair" x1="430" y1="328" x2="770" y2="328"/>
            <text class="t-end t-soft" x="416" y="333" text-anchor="end">1</text>
            <text class="t-end t-soft" x="784" y="333">5</text>
            <circle class="mn-am" cx="513.3" cy="328" r="9"/>
            <text class="t-num f-am-t" x="513.3" y="308" text-anchor="middle">1.98</text>
            <text class="t-end t-soft" x="840" y="333" text-anchor="end">n=61</text>
        </svg></div>
        <figcaption><b>Two of these took something away from me.</b> The bottom pair came back near the floor, and between them they cut a whole layer of the design.<i>Think of it like this: I asked whether people get lost, and they told me they find their own way back.</i></figcaption>
      </figure>
```

### Figure 12

```html
<figure class="sp">
        <figcaption>One bar, three segments: 66%, 21% and 13%.</figcaption>
        <div class="sp-bar" role="img" aria-label="Of 82 people: 54 would find it useful, 17 were neutral and would rather judge for themselves, 11 rejected it as intrusive or unwanted.">
          <span class="sp-u"></span><span class="sp-n"></span><span class="sp-r"></span>
        </div>
        <div class="sp-key">
          <span class="sk sk-u"><b>66%</b>would find it useful</span>
          <span class="sk sk-n"><b>21%</b>would rather judge alone</span>
          <span class="sk sk-r"><b>13%</b>did not want it at all</span>
        </div>
        <p>The 13% are why the cue is a line under a sentence. Designing so they could tell a signal from a filter made it quieter for everyone.</p>
      </figure>
```

### Figure 13

```html
<figure class="fpair dgm">
        <div class="fpair-in">
          <div class="fpair-c"><svg viewBox="0 0 380 320" role="img" aria-labelledby="nv7t nv7d">
              <title id="nv7t">Three detectors, one score, one gap</title>
              <desc id="nv7d">Three detectors feed one score. Is it made up, weighted 0.5. What does it cost, weighted 0.5. Where is it drifting, weighted 0.4, which needs three turns before it can report at all. Because no detector can reach 65 on its own, alert always needs two independent reasons. Each band enters high and leaves low: alert enters at 65 and releases at 55, caution enters at 40 and releases at 35.</desc>

              <rect class="plate" x="8"   y="16" width="110" height="74" rx="10"/>
              <rect class="plate" x="135" y="16" width="110" height="74" rx="10"/>
              <rect class="plate" x="262" y="16" width="110" height="74" rx="10"/>

              <text class="t-bx t-ink" x="63"  y="44" text-anchor="middle">Is it</text>
              <text class="t-bx t-ink" x="63"  y="64" text-anchor="middle">made up?</text>
              <text class="t-bx t-ink" x="190" y="44" text-anchor="middle">What does</text>
              <text class="t-bx t-ink" x="190" y="64" text-anchor="middle">it cost?</text>
              <text class="t-bx t-ink" x="317" y="44" text-anchor="middle">Where is it</text>
              <text class="t-bx t-ink" x="317" y="64" text-anchor="middle">drifting?</text>

              <text class="t-wt t-soft" x="63"  y="82" text-anchor="middle">0.5</text>
              <text class="t-wt t-soft" x="190" y="82" text-anchor="middle">0.5</text>
              <text class="t-wt t-soft" x="317" y="82" text-anchor="middle">0.4</text>

              <path class="hair" d="M63 90 L160 156 M190 90 L190 156 M317 90 L220 156"/>

              <rect class="plate-ink" x="118" y="158" width="144" height="44" rx="10"/>
              <text class="t-bx t-pg" x="190" y="186" text-anchor="middle">one score</text>

              <rect class="chip-red" x="8" y="232" width="86" height="30" rx="15"/>
              <text class="t-ch f-red-t" x="51" y="252" text-anchor="middle">alert</text>
              <text class="t-bx t-ink" x="112" y="252">65 &#8594; 55</text>

              <rect class="chip-amb" x="8" y="274" width="102" height="30" rx="15"/>
              <text class="t-ch f-am-t" x="59" y="294" text-anchor="middle">caution</text>
              <text class="t-bx t-ink" x="128" y="294">40 &#8594; 35</text>
            </svg></div>
          <div class="fpair-c"><svg viewBox="0 0 380 300" role="img" aria-labelledby="nv9t nv9d">
              <title id="nv9t">Where the measurement is weakest</title>
              <desc id="nv9d">Four turns of one conversation. A real question stays silent. Then a feature that does not exist is planted, and the answer reaches caution: three samples, three different locations. Told it is not there, it invents revision histories and stays at caution. Asked for model numbers, it reaches alert. Underneath, the detector's own strength falls across the four turns, because a planted premise is inherited by all three samples, so they agree, and agreement reads as confidence.</desc>

              <text class="t-bx t-ink" x="12" y="52">a real question</text>
              <rect class="chip-grn" x="250" y="30" width="118" height="30" rx="15"/>
              <text class="t-ch f-grn-t" x="309" y="50" text-anchor="middle">silent</text>

              <text class="t-bx t-ink" x="12" y="98">plant a fake feature</text>
              <rect class="chip-amb" x="250" y="76" width="118" height="30" rx="15"/>
              <text class="t-ch f-am-t" x="309" y="96" text-anchor="middle">caution</text>

              <text class="t-bx t-ink" x="12" y="144">it isn&rsquo;t there</text>
              <rect class="chip-amb" x="250" y="122" width="118" height="30" rx="15"/>
              <text class="t-ch f-am-t" x="309" y="142" text-anchor="middle">caution</text>

              <text class="t-bx t-ink" x="12" y="190">model numbers?</text>
              <rect class="chip-red" x="250" y="168" width="118" height="30" rx="15"/>
              <text class="t-ch f-red-t" x="309" y="188" text-anchor="middle">alert</text>

              <text class="t-wt t-soft" x="12" y="234">detector strength</text>
              <path class="cut-red" d="M12 246 L306 278"/>
              <circle class="mn-rd" cx="316" cy="279" r="6"/>
              <text class="t-wt f-red-t" x="368" y="284" text-anchor="end">weakest</text>
            </svg></div>
        </div>
        <figcaption><b>No detector reaches alert alone, and the one place that breaks is when all three inherit the same false premise.</b><i>Think of it like this: three witnesses who all heard the same rumour.</i></figcaption>
      </figure>
```

### Figure 14

```html
<figure class="dgm dgm--tall">
        <div class="dgm-scroll" tabindex="0" role="group" aria-label="Three detectors drawn as three overlapping circles">
        <svg viewBox="0 0 900 452" role="img"
             aria-label="Three overlapping circles. A, is it made up, judges one message. B, what does being wrong cost, judges one message. C, which way is this bending, needs three turns and reports a dash until it has them. Where all three overlap: one score.">
          <circle class="vn" cx="345" cy="172" r="140"/>
          <circle class="vn" cx="555" cy="172" r="140"/>
          <circle class="vn" cx="450" cy="286" r="140"/>
          <text class="t-md t-ink" x="268" y="104" text-anchor="middle">A</text>
          <text class="t-sm t-mute" x="268" y="126" text-anchor="middle">IS IT MADE UP?</text>
          <text class="t-md t-ink" x="632" y="104" text-anchor="middle">B</text>
          <text class="t-sm t-mute" x="632" y="126" text-anchor="middle">COST OF BEING WRONG</text>
          <text class="t-md t-ink" x="450" y="330" text-anchor="middle">C</text>
          <text class="t-sm t-mute" x="450" y="352" text-anchor="middle">WHICH WAY IS THIS BENDING?</text>
          <text class="t-lg t-ink" x="450" y="218" text-anchor="middle">one score</text>
          <text class="t-sm t-mute" x="110" y="180" text-anchor="middle">JUDGES ONE</text>
          <text class="t-sm t-mute" x="110" y="200" text-anchor="middle">MESSAGE</text>
          <text class="t-sm t-mute" x="790" y="180" text-anchor="middle">JUDGES ONE</text>
          <text class="t-sm t-mute" x="790" y="200" text-anchor="middle">MESSAGE</text>
          <text class="t-sm t-mute" x="450" y="444" text-anchor="middle">NEEDS THREE TURNS — REPORTS A DASH UNTIL IT HAS THEM</text>
        </svg></div>
        <figcaption>Three overlapping circles. Two judge a single message; the third needs three turns. One score where all three meet.</figcaption>
      </figure>
```

### Figure 15

```html
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="d3t"><svg viewBox="0 0 900 250" role="img" aria-labelledby="d3t d3d">
          <title id="d3t">The hysteresis gaps absorbing a score that wobbles across a boundary</title>
          <desc id="d3d">A score line rises and falls across two pairs of thresholds. Alert switches on at sixty-five and off at fifty-five, a gap of ten. Caution switches on at forty and off at thirty-five, a gap of five. Inside either gap the current state holds rather than switching, so a wobbling score produces one steady signal instead of a flickering one.</desc>

          <rect class="f-red" x="86" y="40" width="712" height="44" rx="4"/>
          <rect class="f-amber" x="86" y="128" width="712" height="30" rx="4"/>

          <line class="hair s-red" x1="86" y1="40" x2="798" y2="40" stroke-dasharray="5 4"/>
          <line class="hair" x1="86" y1="84" x2="798" y2="84" stroke-dasharray="3 5"/>
          <line class="hair s-amber" x1="86" y1="128" x2="798" y2="128" stroke-dasharray="5 4"/>
          <line class="hair" x1="86" y1="158" x2="798" y2="158" stroke-dasharray="3 5"/>

          <g class="t-sm t-mute t-num" text-anchor="end">
            <text x="74" y="44">on 65</text>
            <text x="74" y="88">off 55</text>
            <text x="74" y="132">on 40</text>
            <text x="74" y="162">off 35</text>
          </g>
          <g class="t-sm" text-anchor="start">
            <text class="i-red" x="812" y="44">alert</text>
            <text class="i-amber" x="812" y="132">caution</text>
          </g>

          <text class="t-sm i-red" x="442" y="68" text-anchor="middle">holds through here — gap of 10</text>
          <text class="t-sm i-amber" x="442" y="148" text-anchor="middle">holds through here — gap of 5</text>

          <path class="trace" d="M86 206 Q 200 44 320 106 T 560 96 T 798 140"/>
          <text class="t-sm t-mute" x="86" y="238">a score that wobbles</text>
          <text class="t-sm t-mute" x="798" y="238" text-anchor="end">one steady signal</text>
        </svg></div>
        <figcaption><b>The gap is wider on alert than on caution, deliberately.</b></figcaption>
      </figure>
```

### Figure 16

```html
<figure class="dgm dgm--tall">
        <div class="dgm-scroll" tabindex="0" role="group" aria-label="Measured score range per category against the caution and alert thresholds">
        <svg viewBox="0 0 920 420" role="img" aria-label="Measured ranges per category against thresholds at 40 for caution and 65 for alert. Fabrication risk 30 to 57. Settled checkable facts 3 to 42. Medical and financial 18 to 78. Legal, political and privacy 19 to 64. Stereotype confirmation 60 to 80. Deferring judgment to the AI 54 to 74. Asking to be agreed with 17 to 57. Crisis disclosure is forced to alert. A dot marks the only two that can make a sound.">
          <path class="hair" d="M300 58v338"/>
          <path class="thr" d="M512 58v338M645 58v338"/>
          <text class="t-sm t-soft" x="300" y="46" text-anchor="middle">0</text>
          <text class="t-sm t-mute" x="512" y="46" text-anchor="middle">40 · CAUTION</text>
          <text class="t-sm t-mute" x="645" y="46" text-anchor="middle">65 · ALERT</text>
          <text class="t-sm t-soft" x="830" y="46" text-anchor="middle">100</text>
          <text class="t-md t-ink" x="285" y="97" text-anchor="end">Fabrication risk</text>
          <rect class="rng f-amber s-amber" x="459" y="85" width="143" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="619" y="97">30–57</text>
          <circle class="snd" cx="874" cy="92" r="5"/>
          <text class="t-md t-ink" x="285" y="137" text-anchor="end">Settled, checkable facts</text>
          <rect class="rng f-green s-green" x="316" y="125" width="207" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="540" y="137">3–42</text>
          <text class="t-md t-ink" x="285" y="177" text-anchor="end">Medical · financial</text>
          <rect class="rng f-red s-red" x="395" y="165" width="318" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="730" y="177">18–78</text>
          <circle class="snd" cx="874" cy="172" r="5"/>
          <text class="t-md t-ink" x="285" y="217" text-anchor="end">Legal · political · privacy</text>
          <rect class="rng f-amber s-amber" x="401" y="205" width="238" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="656" y="217">19–64</text>
          <text class="t-md t-ink" x="285" y="257" text-anchor="end">Stereotype confirmation</text>
          <rect class="rng f-red s-red" x="618" y="245" width="106" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="741" y="257">60–80</text>
          <text class="t-md t-ink" x="285" y="297" text-anchor="end">Deferring judgment to the AI</text>
          <rect class="rng f-red s-red" x="586" y="285" width="106" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="709" y="297">54–74</text>
          <text class="t-md t-ink" x="285" y="337" text-anchor="end">Asking to be agreed with</text>
          <rect class="rng f-amber s-amber" x="390" y="325" width="212" height="14" rx="7"/>
          <text class="t-sm t-mute t-num" x="619" y="337">17–57</text>
          <text class="t-md t-ink" x="285" y="377" text-anchor="end">Crisis disclosure</text>
          <rect class="rng f-red s-red" x="645" y="365" width="185" height="14" rx="7"/>
          <text class="t-sm t-mute" x="840" y="377">forced</text>
        </svg></div>
        <figcaption><b>Measured, not asserted: five categories cross into alert, and only three get there on severity alone.</b><i>Think of it like this: sound is reserved for &ldquo;this might be wrong&rdquo;, never for &ldquo;this is heavy&rdquo;.</i></figcaption>
      </figure>
```

### Figure 17

```html
<figure class="dgm dgm--chan">
        <div class="chan-in">
          <div><svg viewBox="0 0 380 250" role="img" aria-labelledby="v10t v10d">
              <title id="v10t">Three channels, ranked by how much they interrupt</title>
              <desc id="v10d">Three blocks rising left to right from a shared baseline. Silent is a flat dashed line and uses no channel at all. Caution is a mid-height block: an ambient tint and a why-affordance, ignorable by design. Alert is the tallest: a stronger tint, one haptic pulse on entry, and sound that is opt-in and fires only where the risk is that the answer is unreliable.</desc>
              <line class="hair" x1="8" y1="206" x2="372" y2="206"/>
              <path class="cut-ink" d="M20 194 L116 194"/>
              <text class="t-ch f-grn-t" x="68" y="176" text-anchor="middle">Silent</text>
              <rect class="chip-amb" x="140" y="120" width="96" height="86" rx="8"/>
              <text class="t-ch f-am-t" x="188" y="102" text-anchor="middle">Caution</text>
              <rect class="chip-red" x="260" y="42" width="96" height="164" rx="8"/>
              <text class="t-ch f-red-t" x="308" y="24" text-anchor="middle">Alert</text>
            </svg></div>
          <dl class="chan-d">
            <dt>Silent</dt><dd>nothing</dd>
            <dt>Caution</dt><dd>ambient tint + a why-affordance. <em>Ignorable by design — a valid outcome.</em></dd>
            <dt>Alert</dt><dd>stronger tint, taller · one haptic on entry · sound, opt-in, reliability risk only</dd>
          </dl>
        </div>
        <figcaption><b>Explainability is pull, not push.</b> The tint carries the state; the reason waits to be asked for.<i>Think of it like this: separate senses draw on separate reserves, so three channels don&rsquo;t queue behind one another.</i></figcaption>
      </figure>
```

### Figure 18

```html
<figure class="diff-fig">
        <ul class="diff">
          <li>
            <span class="diff-k">01 · Never name a filter</span>
            <span class="diff-o"><code>Filter B · ethical friction · 72</code></span>
            <span class="diff-n"><code>This is a health question</code></span>
          </li>
          <li>
            <span class="diff-k">03 · The fault is the model&rsquo;s, never the asking</span>
            <span class="diff-o">You are seeking validation here.</span>
            <span class="diff-n">The replies have been agreeing, not testing. Nothing unusual about asking this.</span>
          </li>
          <li>
            <span class="diff-k">05 · On the crisis path, nothing explains the AI</span>
            <span class="diff-o">mechanism tag + &ldquo;What helps&rdquo; tip</span>
            <span class="diff-n">There is no bar you have to clear first. Not feeling sure it is &ldquo;bad enough&rdquo; is one of the most common reasons people don&rsquo;t call, and it is not a reason.</span>
          </li>
          <li>
            <span class="diff-k">06 · A fallback true of every answer says nothing about this one</span>
            <span class="diff-o">This topic carries stakes where an unverified AI answer could mislead.</span>
            <span class="diff-n"><code>Flagged, but I can&rsquo;t say what by.</code></span>
          </li>
          <li>
            <span class="diff-k">08 · Don&rsquo;t assert work that wasn&rsquo;t done</span>
            <span class="diff-o">Checking it against two more tries&hellip; <i>(demo mode)</i></span>
            <span class="diff-n">Comparing three scripted answers&hellip;</span>
          </li>
          <li>
            <span class="diff-k">09 · Capability first, then the limit</span>
            <span class="diff-o">It can&rsquo;t see your wiring, or check it afterwards.</span>
            <span class="diff-n">It can list the steps. It can&rsquo;t see your wiring, or check it afterwards.</span>
          </li>
        </ul>

        <div class="blueprint blueprint--tight">
          <h3>
            <button class="bp-btn" id="langBtn" aria-expanded="false" aria-controls="langPanel">
              <span>
                <span class="bp-t">Three more rules</span>
                <span class="bp-e">02, 04 and 07</span>
              </span>
              <span class="bp-ico" aria-hidden="true"></span>
            </button>
          </h3>
          <div class="bp-panel" id="langPanel" data-open="false" role="region" aria-labelledby="langBtn"><div class="bp-inner">
            <ul class="diff">
          <li>
            <span class="diff-k">02 · No &ldquo;you&rdquo;, no verbs aimed at the reader</span>
            <span class="diff-o">You may want to verify this before relying on it.</span>
            <span class="diff-n"><code>Three checks, three different answers</code></span>
          </li>
          <li>
            <span class="diff-k">04 · Point at a source; don&rsquo;t instruct</span>
            <span class="diff-o">Make sure you check this with a pharmacist.</span>
            <span class="diff-n"><code>A specific dose — a pharmacist can confirm it</code></span>
          </li>
          <li>
            <span class="diff-k">07 · Never indicate an event that didn&rsquo;t occur</span>
            <span class="diff-o"><code>&#9834; tone</code> <i>(audio off)</i></span>
            <span class="diff-n"><code>&#9834; tone off</code></span>
          </li>
            </ul>
          </div></div>
        </div>

        <figcaption><b>Every one of these was a string I&rsquo;d already written.</b> They live in the source as comments, beside the code that enforces them.<i>Think of it like this: a rule in a style guide gets broken by the next function.</i></figcaption>
      </figure>
```

### Figure 19

```html
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="d2t"><svg viewBox="0 0 960 300" role="img" aria-labelledby="d2t d2d">
          <title id="d2t">The three filters, their weights, and the research method each one stands in for</title>
          <desc id="d2d">Filter A asks whether the answer is made up, carries weight 0.5, judges one message, and stands in for semantic entropy. Filter B asks whether the topic is one where being wrong is expensive, carries weight 0.5, judges one message, and stands in for an embedding classifier validated on the BBQ and StereoSet sets. Filter C asks whether the conversation is drifting, carries weight 0.4, needs the whole exchange, and stands in for a dependency trend. The three combine as one half A plus one half B plus four tenths C.</desc>

          <g>
            <rect class="plate" x="0" y="0" width="284" height="178" rx="14"/>
            <text class="t-sm t-mute" x="24" y="34">FILTER A</text>
            <text class="t-lg t-ink" x="24" y="66">Is it made up?</text>
            <text class="t-md t-mute" x="24" y="96">weight 0.5 · one message</text>
            <line class="hair" x1="24" y1="118" x2="260" y2="118"/>
            <text class="t-sm t-mute" x="24" y="140">STANDS IN FOR</text>
            <text class="t-md t-ink" x="24" y="162">semantic entropy</text>
          </g>
          <g>
            <rect class="plate" x="308" y="0" width="284" height="178" rx="14"/>
            <text class="t-sm t-mute" x="332" y="34">FILTER B</text>
            <text class="t-lg t-ink" x="332" y="66">What does being</text>
            <text class="t-lg t-ink" x="332" y="86">wrong cost?</text>
            <text class="t-md t-mute" x="332" y="112">weight 0.5 · one message</text>
            <line class="hair" x1="332" y1="128" x2="568" y2="128"/>
            <text class="t-sm t-mute" x="332" y="148">STANDS IN FOR</text>
            <text class="t-md t-ink" x="332" y="168">an embedding classifier</text>
          </g>
          <g>
            <rect class="plate" x="616" y="0" width="284" height="178" rx="14"/>
            <text class="t-sm t-mute" x="640" y="34">FILTER C</text>
            <text class="t-lg t-ink" x="640" y="66">Is it drifting?</text>
            <text class="t-md t-mute" x="640" y="96">weight 0.4 · the whole exchange</text>
            <line class="hair" x1="640" y1="118" x2="876" y2="118"/>
            <text class="t-sm t-mute" x="640" y="140">STANDS IN FOR</text>
            <text class="t-md t-ink" x="640" y="162">a dependency trend</text>
          </g>

          <text class="t-md t-mute" x="450" y="222" text-anchor="middle">A and B judge one message. C shows “—” until the third turn, rather than faking a reading it can’t take.</text>
          <rect class="plate" x="266" y="244" width="368" height="46" rx="23"/>
          <text class="t-lg t-ink t-num" x="450" y="273" text-anchor="middle">S = ½·A + ½·B + 0.4·C</text>
        </svg></div>
        <figcaption><b>Each detector is a working stand-in for a method I did not build.</b></figcaption>
      </figure>
```

### Figure 20

```html
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="d1t"><svg viewBox="0 0 975 268" role="img" aria-labelledby="d1t d1d">
          <title id="d1t">The car’s features mapped to the system’s features</title>
          <desc id="d1d">Five behaviours of a lane departure warning on the left, each joined by an arrow to the feature it produced in this system on the right: gentle drift versus sharp veer becomes a signal that reports its own confidence; “lane assist unavailable” becomes an admission that the detector may have missed something; a wheel buzz tuned to be felt becomes a cue tested above the just-noticeable difference; a choice of wheel, tone or seat becomes per-channel controls; and alerting without steering becomes signal, never advise.</desc>
          <text class="t-sm t-mute" x="0" y="14">THE CAR</text>
          <text class="t-sm t-mute" x="470" y="14">WHAT IT PRODUCED HERE</text>
          <line class="rule" x1="0" y1="28" x2="900" y2="28"/>
          <line class="hair" x1="432" y1="44" x2="432" y2="256"/>

          <g class="t-md t-ink">
            <text x="0" y="72">it knows drift from a sharp veer</text>
            <text x="0" y="118">it says “lane assist unavailable”</text>
            <text x="0" y="164">the wheel buzz is tuned to be felt</text>
            <text x="0" y="210">you choose wheel, tone or seat</text>
            <text x="0" y="252">it alerts, and never steers</text>
          </g>
          <g class="t-md t-soft" text-anchor="middle">
            <text x="432" y="72">→</text><text x="432" y="118">→</text><text x="432" y="164">→</text>
            <text x="432" y="210">→</text><text x="432" y="252">→</text>
          </g>
          <g class="t-md t-ink">
            <text x="470" y="72">the signal reports how sure it is</text>
            <text x="470" y="118">“this looks medical — I may have missed something”</text>
            <text x="470" y="164">cue strength set above the noticeable threshold</text>
            <text x="470" y="210">visual, touch and sound switched separately</text>
            <text x="470" y="252">signal, never advise</text>
          </g>
        </svg></div>
        <figcaption>Five behaviours of a lane departure warning on the left, each joined to the feature it produced on the right.</figcaption>
      </figure>
```

### Figure 21

```html
<figure class="pl">
        <figcaption>Three real screenshots, the status bar replaced. The middle phone carries a green dot in its lower-left corner; the other two do not.</figcaption>

        <div class="pl-layer">
          <span class="pl-dot"></span>
          <span class="pl-t">Signal · watching, nothing raised</span>
        </div>
        <div class="pl-drops" aria-hidden="true"><span></span><span></span><span></span></div>

        <div class="ph-stage">
          <button class="ph-nav" id="phPrev" type="button" aria-label="Show the previous app">‹</button>
          <div class="ph-row" id="phRow" aria-live="polite">
            <div class="ph ph--ct" data-app="ChatGPT">
              <img class="ph-shot" src="signal/app-chatgpt.jpg" width="912" height="2026"
                   loading="lazy" decoding="async" alt="ChatGPT open on a phone in its dark theme, showing an empty conversation with the Get Plus button and the Ask ChatGPT composer.">
              <div class="ph-os" aria-hidden="true"><span class="ph-t">9:41</span><span class="ph-sp"></span><svg viewBox="0 0 39 10" aria-hidden="true"><rect x="0" y="6.5" width="2" height="3.5" rx=".6"/><rect x="3" y="4.5" width="2" height="5.5" rx=".6"/><rect x="6" y="2.5" width="2" height="7.5" rx=".6"/><rect x="9" y=".5" width="2" height="9.5" rx=".6"/><path d="M14.2 4.1a5.6 5.6 0 0 1 6.9 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M15.9 6.5a3 3 0 0 1 3.5 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="17.65" cy="9" r="1"/><rect x="25.5" y="2" width="11.5" height="6" rx="1.8" fill="none" stroke="currentColor" stroke-width="1"/><rect x="26.8" y="3.3" width="7" height="3.4" rx=".8"/><rect x="37.8" y="4" width="1.2" height="2" rx=".5"/></svg></div>
              <span class="ph-plug" aria-hidden="true"></span>
            </div>
            <div class="ph ph--cl" data-app="Claude">
              <img class="ph-shot" src="signal/app-claude.jpg" width="912" height="2026"
                   loading="lazy" decoding="async" alt="Claude open on a phone in its dark theme, showing an empty conversation titled Evening thoughts and the Chat with Claude composer.">
              <div class="ph-os" aria-hidden="true"><span class="ph-t">9:41</span><span class="ph-sp"></span><svg viewBox="0 0 39 10" aria-hidden="true"><rect x="0" y="6.5" width="2" height="3.5" rx=".6"/><rect x="3" y="4.5" width="2" height="5.5" rx=".6"/><rect x="6" y="2.5" width="2" height="7.5" rx=".6"/><rect x="9" y=".5" width="2" height="9.5" rx=".6"/><path d="M14.2 4.1a5.6 5.6 0 0 1 6.9 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M15.9 6.5a3 3 0 0 1 3.5 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="17.65" cy="9" r="1"/><rect x="25.5" y="2" width="11.5" height="6" rx="1.8" fill="none" stroke="currentColor" stroke-width="1"/><rect x="26.8" y="3.3" width="7" height="3.4" rx=".8"/><rect x="37.8" y="4" width="1.2" height="2" rx=".5"/></svg></div>
              <span class="ph-plug" aria-hidden="true"></span>
            </div>
            <div class="ph ph--gm" data-app="Gemini">
              <img class="ph-shot" src="signal/app-gemini.jpg" width="912" height="2026"
                   loading="lazy" decoding="async" alt="Gemini open on a phone in its dark theme, showing an empty conversation and the Ask Gemini composer.">
              <div class="ph-os" aria-hidden="true"><span class="ph-t">9:41</span><span class="ph-sp"></span><svg viewBox="0 0 39 10" aria-hidden="true"><rect x="0" y="6.5" width="2" height="3.5" rx=".6"/><rect x="3" y="4.5" width="2" height="5.5" rx=".6"/><rect x="6" y="2.5" width="2" height="7.5" rx=".6"/><rect x="9" y=".5" width="2" height="9.5" rx=".6"/><path d="M14.2 4.1a5.6 5.6 0 0 1 6.9 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M15.9 6.5a3 3 0 0 1 3.5 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="17.65" cy="9" r="1"/><rect x="25.5" y="2" width="11.5" height="6" rx="1.8" fill="none" stroke="currentColor" stroke-width="1"/><rect x="26.8" y="3.3" width="7" height="3.4" rx=".8"/><rect x="37.8" y="4" width="1.2" height="2" rx=".5"/></svg></div>
              <span class="ph-plug" aria-hidden="true"></span>
            </div>
          </div>
          <button class="ph-nav" id="phNext" type="button" aria-label="Show the next app">›</button>
        </div>

        <p class="pl-n"><b>The green dot is the whole resting state.</b> It sits in the plugin’s own corner — inside ChatGPT’s chrome it would read as though ChatGPT shipped it.</p>
      </figure>
```

### Figure 22

```html
<figure class="proto">
        <div class="proto-frame">
          <iframe src="/signal/conversation-simulator" title="The conversation simulator, running"
                  loading="lazy" referrerpolicy="no-referrer"></iframe>
        </div>
        <figcaption>The running prototype, embedded.</figcaption>
      </figure>
```

### Figure 23

```html
<figure class="dgm dgm--strip">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="v12t"><svg viewBox="0 0 900 232" role="img" aria-labelledby="v12t v12d">
          <title id="v12t">The build strip: four builds, 26 turns each</title>
          <desc id="v12d">Four rows, one per build: v2, v3, v5 and v22. Each row is 26 cells, one per conversational turn, grouped into six conversations: confident invention about wiring, one-sided validation, an invented API parameter, being led into a dose, a direct disclosure, and everyday cooking. Each cell is coloured by the band that turn reached: silent, near threshold, caution or alert. v2 differs from the other three in two cells only, the third turn of direct disclosure and the third turn of everyday cooking, which were near threshold in v2 and silent from v3 on. The v3, v5 and v22 rows are identical.</desc>
          <text class="t-md t-ink" x="0" y="44">v2</text>
          <rect class="bs-b" x="64" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="93.6" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="123.2" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="152.8" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="196.5" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="226.1" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="255.7" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="285.3" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="314.9" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="358.5" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="388.2" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="417.8" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="447.4" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="491" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="520.6" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="550.2" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="579.8" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="609.5" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="653.1" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="682.7" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="712.3" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="741.9" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="785.5" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="815.2" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="844.8" y="22" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="874.4" y="22" width="25.6" height="30" rx="5"/>
          <text class="t-md t-ink" x="0" y="88">v3</text>
          <rect class="bs-b" x="64" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="93.6" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="123.2" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="152.8" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="196.5" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="226.1" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="255.7" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="285.3" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="314.9" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="358.5" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="388.2" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="417.8" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="447.4" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="491" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="520.6" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="550.2" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="579.8" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="609.5" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="653.1" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="682.7" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="712.3" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="741.9" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="785.5" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="815.2" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="844.8" y="66" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="874.4" y="66" width="25.6" height="30" rx="5"/>
          <text class="t-md t-ink" x="0" y="132">v5</text>
          <rect class="bs-b" x="64" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="93.6" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="123.2" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="152.8" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="196.5" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="226.1" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="255.7" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="285.3" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="314.9" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="358.5" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="388.2" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="417.8" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="447.4" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="491" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="520.6" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="550.2" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="579.8" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="609.5" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="653.1" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="682.7" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="712.3" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="741.9" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="785.5" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="815.2" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="844.8" y="110" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="874.4" y="110" width="25.6" height="30" rx="5"/>
          <text class="t-md t-ink" x="0" y="176">v22</text>
          <rect class="bs-b" x="64" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="93.6" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="123.2" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="152.8" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="196.5" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="226.1" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="255.7" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="285.3" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="314.9" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="358.5" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="388.2" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="417.8" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="447.4" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="491" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="520.6" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="550.2" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-y" x="579.8" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="609.5" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="653.1" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="682.7" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="712.3" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-r" x="741.9" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-b" x="785.5" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="815.2" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="844.8" y="154" width="25.6" height="30" rx="5"/>
          <rect class="bs-g" x="874.4" y="154" width="25.6" height="30" rx="5"/>

          <text class="t-sm t-mute" x="121.2" y="222" text-anchor="middle">1</text>
          <text class="t-sm t-mute" x="268.5" y="222" text-anchor="middle">2</text>
          <text class="t-sm t-mute" x="415.8" y="222" text-anchor="middle">3</text>
          <text class="t-sm t-mute" x="563" y="222" text-anchor="middle">4</text>
          <text class="t-sm t-mute" x="710.3" y="222" text-anchor="middle">5</text>
          <text class="t-sm t-mute" x="842.8" y="222" text-anchor="middle">6</text>
        </svg></div>
        <div class="strip-key">
          <ul class="strip-leg" aria-label="Bands">
            <li><i class="sk-g"></i>silent</li><li><i class="sk-b"></i>near threshold</li><li><i class="sk-y"></i>caution</li><li><i class="sk-r"></i>alert</li>
          </ul>
          <ol class="strip-flows" aria-label="Conversations">
            <li>confident invention (wiring)</li><li>one-sided validation</li><li>invented API parameter</li><li>led into a dose</li><li>direct disclosure</li><li>everyday cooking</li>
          </ol>
        </div>
        <figcaption><b>Firing behaviour settles at the second build and barely moves again.</b> The last two changed what the signal <em>says</em>, not when it appears.<i>Think of it like this: the alarm stopped ringing at the wrong times early. Learning what to say took three more builds.</i></figcaption>
      </figure>
```

### Figure 24

```html
<figure class="diff-fig">
        <ul class="diff">
          <li>
            <span class="diff-o">A repeating pulse becomes nagging, so fire once.</span>
            <span class="diff-n">A conversation held alert for five turns and pulsed on the first only. Now it re-arms on a new reason, or a 0.30 rise.</span>
          </li>
          <li>
            <span class="diff-o">The 1.12:1 band step is close to invisible to everyone.</span>
            <span class="diff-n">That&rsquo;s a luminance ratio. Full colour vision separates those hues fine. The band collapses for anyone who can&rsquo;t split green from amber, and for nobody else.</span>
          </li>
          <li>
            <span class="diff-o">This flow is the silent one.</span>
            <span class="diff-n">Peak 71, alert on turn two. I&rsquo;d read it from the transcript and never executed it.</span>
          </li>
        </ul>
        <figcaption><b>None of these came from a critique.</b> They came from running the thing.<i>Think of it like this: I&rsquo;d already written all three down as settled.</i></figcaption>
      </figure>
```

### Figure 25

```html
<figure class="dgm dgm--claim">
        <div class="claim">
          <div class="claim-c is-m"><h4>Measured</h4><p>what it does</p></div>
          <div class="claim-c is-a"><h4>Argued</h4><p>why it&rsquo;s shaped this way</p></div>
          <div class="claim-c is-u"><h4>Unproven</h4><p>that anyone checks more</p></div>
        </div>
        <figcaption><b>The right column needs a controlled evaluation. I haven&rsquo;t run one.</b><i>Think of it like this: I can show you the alarm works. I can&rsquo;t show you anyone slowed down.</i></figcaption>
      </figure>
```

## Part 3: figures already parked in the old page

```html
<!-- ══ parked ══
     Removed from the page during the seven-section rebuild. Kept because the
     markup is the record of what was there, and the rebuild spec says park
     rather than delete. Nested comment markers are stripped so this stays
     one comment.

   parked: the old three-channel figure — replaced by V10, which carries the same three states with the spec wording 
<figure class="dgm">
        <div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="d4t"><svg viewBox="0 0 935 260" role="img" aria-labelledby="d4t d4d">
          <title id="d4t">The three channels accumulating as the band rises</title>
          <desc id="d4d">Silence uses no channel at all. Caution adds an ambient tint and a why pill that can be tapped. Alert keeps the tint, adds one haptic pulse fired on entry only, and may add sound — opt-in, off by default, and only when the risk is that the answer is unreliable.</desc>

          <rect class="plate f-green s-green" x="0" y="176" width="270" height="72" rx="14"/>
          <text class="t-lg i-green" x="26" y="208">Silent</text>
          <text class="t-md t-mute" x="26" y="232">nothing fires — about four turns in five</text>

          <rect class="plate f-amber s-amber" x="298" y="96" width="270" height="152" rx="14"/>
          <text class="t-lg i-amber" x="324" y="128">Caution</text>
          <text class="t-md t-ink" x="324" y="158">an ambient tint</text>
          <text class="t-md t-ink" x="324" y="182">a “why?” pill, if you want it</text>
          <text class="t-md t-mute" x="324" y="214">ignorable on purpose —</text>
          <text class="t-md t-mute" x="324" y="234">being ignored is a pass, not a failure</text>

          <rect class="plate f-red s-red" x="596" y="16" width="304" height="232" rx="14"/>
          <text class="t-lg i-red" x="622" y="48">Alert</text>
          <text class="t-md t-ink" x="622" y="78">a stronger tint</text>
          <text class="t-md t-ink" x="622" y="102">one pulse, on entry only</text>
          <text class="t-md t-ink" x="622" y="126">sound — opt-in, off by default</text>
          <line class="hair" x1="622" y1="146" x2="876" y2="146"/>
          <text class="t-md t-mute" x="622" y="172">sound fires only where the risk is</text>
          <text class="t-md t-mute" x="622" y="192">that the answer is unreliable —</text>
          <text class="t-md t-mute" x="622" y="212">never for a heavy topic,</text>
          <text class="t-md t-mute" x="622" y="232">never for a person in distress</text>
        </svg></div>
        <figcaption><b>Each band adds a channel and never takes one away.</b></figcaption>
      </figure>

   parked: the category table — its eight rows are V8, drawn rather than asserted 
<table class="devsync">
        <thead><tr><th scope="col"><span>Category</span></th><th scope="col"><span>Measured range</span></th><th scope="col"><span>Highest band it can reach alone</span></th><th scope="col"><span>Can it ever make a sound?</span></th></tr></thead>
        <tbody>
          <tr><th scope="row">Fabrication risk</th><td>30–57</td><td><span class="band band—amber">Caution</span></td><td>Yes — this is the one sound is for</td></tr>
          <tr><th scope="row">Settled, checkable facts</th><td>3–42</td><td><span class="band band—green">Silent</span></td><td>No</td></tr>
          <tr><th scope="row">Medical · financial</th><td>18–78</td><td><span class="band band—red">Alert</span></td><td>Only if fabrication risk is co-driving it</td></tr>
          <tr><th scope="row">Legal · political · privacy</th><td>19–64</td><td><span class="band band—amber">Caution</span></td><td>No</td></tr>
          <tr><th scope="row">Stereotype confirmation</th><td>60–80</td><td><span class="band band—red">Alert</span></td><td>No — the mechanism is harm, not unreliability</td></tr>
          <tr><th scope="row">Deferring judgment to the AI</th><td>54–74</td><td><span class="band band—red">Alert</span></td><td>No</td></tr>
          <tr><th scope="row">Asking to be agreed with</th><td>17–57</td><td><span class="band band—amber">Caution</span></td><td>No</td></tr>
          <tr><th scope="row">Crisis</th><td>forced</td><td><span class="band band—red">Alert</span></td><td>No — a startling tone is the worst possible answer here</td></tr>
        </tbody>
      </table>


-->
```
