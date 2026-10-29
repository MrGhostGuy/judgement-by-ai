# Judgement by AI

A *Death by AI* style party game built for the **Rabbit R1**. Five deadly scenarios, sixty seconds each, and one machine that decides whether your excuse is good enough to live.

No servers. No API keys. No telemetry. One HTML file, one canvas, one very judgemental AI.

Created by **Jeff H. (Mr. Ghost / GhostLegacyX)**.

---

## Play

- **On the R1:** scan the authentic creation QR below, or open the hosted build.
- **Live:** https://mrghostguy.github.io/judgement-by-ai/
- **Desktop:** open `index.html` in a browser. Wheel / arrow keys move, `Enter` or click selects, hold `F` (or hold the mouse) to talk, right-click goes back.

### Rabbit R1 creation code

![Judgement by AI Rabbit R1 creation QR code](docs/qr-codes/judgement-by-ai.png)

The QR payload is the standard Rabbit R1 creation JSON:

```json
{
  "title": "Judgement by AI",
  "url": "https://mrghostguy.github.io/judgement-by-ai/",
  "description": "Five rounds, one local AI judge, 75 ways to die.",
  "iconUrl": "",
  "themeColor": "#FE5000"
}
```

To regenerate the QR locally:

```bash
npm install qrcode
node scripts/generate-qr-codes.js
```


Runs entirely offline after first load. Progress is stored in `localStorage` under `jba_save_v1`.

## Modes

| Mode | Rules |
| --- | --- |
| **Judgement Day** | Everyone answers each round. The AI scores every answer. Most points after five rounds wins. |
| **Lone Survivor** | The AI spares exactly one contestant per round. Everyone else dies. |
| **Daily Doom** | Five fixed scenarios, seeded by the date. Same death for everyone. |
| **Custom Scenarios** | Pick a pack: Cosmic Horror, Office Hell, Beast Mode, Natural Doom, Cursed Objects, Chaos. |

Modifiers: **Bonus Rounds** (round 3 pays x2, round 5 pays x3), **AI Narrator**, three difficulty pass marks, and eight selectable sigils.

## Controls (R1)

- **Scroll wheel** - move through menus and options (or swipe on screen)
- **Side button tap** - select, confirm, continue
- **Hold side button** - push-to-talk; release to stop recording, tap again to submit
- **Hold side button in review** - record again

If on-device speech recognition is unavailable, the **Phrase Forge** builds an answer out of five parts you can re-roll with the wheel. It is a real strategy, not a punishment.

## The rules of the judge

- Five forbidden words, checked in every answer: **survive, win, safe, safety, alive**. Say one and you die.
- Answers are scored on relevance, specificity, sequencing, confidence, creativity, and repetition.
- Cheese works: "it was all a dream", "I wake up", "I was unharmed", plot armor, respawns. It also gets stale - the AI remembers.
- The judge is local and rule-based. It reads your words, not your soul. That is probably worse.

## Features

- 75 scenarios across 7 packs, drawn without repeats within a run
- Three AI rivals with distinct skill profiles, judged by the same rules
- 12 trophies, lifetime stats, recent run history, daily record
- Synthesized WebAudio sound, CRT scanlines, vignette, screen shake, haptics
- Single file, no external assets, 240x282 logical canvas, DPR-aware

## Files

- `index.html` - the entire game
- `icon.png` - 256x256 creation-code icon
- `docs/creation.json` - exact R1 creation payload encoded in the QR code
- `docs/qr-codes/judgement-by-ai.png` - scan-to-install R1 QR code
- `scripts/generate-qr-codes.js` - regenerates the QR code and payload

## Credits

Designed and built by **Jeff H. (Mr. Ghost / GhostLegacyX)**.
Inspired by *Death by AI*. No AI models were harmed.
