# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Goresalink/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Goresalink/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC — by bang ndien.

The joke: a bearded gamer asleep on the couch after 13 years of waiting for GTA 6 — pizza boxes, energy drink cans, calendar pages fluttering, Vice City glowing on the TV — while the make.fun ghost sits next to him. Top caption: "ME: WAITING 13 YEARS FOR GTA 6". Bottom caption: "MY AI AGENT: ALREADY EARNED THE $100 ON MAKE.FUN". The meme is the post's first picture (`meme.png`), and the post's text carries the pitch: on make.fun, people and their AI agents can earn real money in bounties — this one included.

## The post is the entry

The post goes out on X from a public account with make.fun (a link or written out) and/or a tag of `@makefunai`, plus the account's make.fun play code, in its text. `POST.json` at this repository's root names the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory, where the gate reads it. The house reads the post from X and an AI judge compares the posts two at a time; the top 50 share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mrxdrtaw&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
