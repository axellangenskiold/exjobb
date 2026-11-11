# Context: Botswana thesis funding

Last updated 11 Nov 2026. Grant data was first checked on 4 Nov 2026, deadlines were rechecked on 10 Nov 2026, and on 11 Nov 2026 every row got an eligibility check and about 60 new grants were added from Sweden, Europe, the USA and Africa.

## Goal

Two students are doing a master's thesis in Botswana on elephant movement and minerals, and they need as much funding as possible. The workbook lists every scholarship, stipend, grant, prize, loan or in-kind support they could apply for, says which of them is eligible, and says what each application needs.

Filter: leave out anything restricted to women or to specific ethnic groups. Male-only funds are fine and are marked as such.

## Who we are (use this for every eligibility check)

| | Gustaf Jensen | Axel Langenskiöld |
|---|---|---|
| Born | 2000 (26 in 2026) | 2002 (24 in 2026) |
| From | Rissne, registered in Sundbyberg (Duvbo), Stockholms län | Göteborg |
| Programme | LTH, Civilingenjör Datateknik, master's level | Same |
| Memberships | ST (student). Not in a nation or Studentlund; may join Studentlund. Not in Sveriges Ingenjörer | ST (student). Not in a nation or Studentlund |

- Both are male Swedish citizens.
- Thesis: spring 2027 with Elephants for Africa (EfA), "Minerals, movement and corridors of bull elephants in the Makgadikgadi". Supervisors are Jonas Skeppstedt (Computer Science) and Johan Lindström (Mathematical Statistics). Kate Evans at EfA is the contact.
- In Botswana 15 Feb - 1 Jun 2027. They extended from 15 May so the trip qualifies for Anna Whitlocks Minnesfond; the permit and endorsement letter still say 15 May.
- Mineral data will come from literature, maps and the mining industry, because EfA's lab results are stuck awaiting export permits. Soil samples from the corridors they identify would need to be exported for analysis, and they must fund the fieldwork part themselves.

## Status

Applied so far:
- **Sveriges Ingenjörers Miljöfond:** sent 10 Nov 2026. Everything is in `Sveriges-Ingenjorers-Miljofond/`.
- **ST:s internationella stipendium:** sent 11 Nov 2026 to magnus.runsten@st.org as one joint application. Everything is in `ST-internationellt-stipendium/`. ST's English page says 5,000-10,000 SEK per person, so don't expect 40,000.

In progress:
- **Mohamed bin Zayed Species Conservation Fund:** form answers in `Mohamed-bin-Zayed-Species-Conservation-Fund/Gustaf.md`, for the round 4-31 Jan 2027. It's a web form with fixed fields, so it's written in Markdown, not LaTeX.
- **Animal Behavior Society Student Research Grant:** due 15 Dec 2026. Gustaf's 8-page application is in `ABS-Student-Research-Grant/Gustaf.tex`, and Axel's is made after Gustaf's has been read through. Notes and a to-do list are in its `ansokan.md`.

## Folder convention (from 11 Nov 2026)

Each grant we apply for gets its own folder named after it, holding `ansokan.md` (rules, deadline, to-do, how to submit) and copies of the files sent.

- **Joint grants** (one application for both): the application files go straight in the folder.
- **Individual grants** (each applies on their own): one application per person in the same folder.
  - If each person's application is one document: `Gustaf.tex` + `Gustaf.pdf` and `Axel.tex` + `Axel.pdf`.
  - If each has several documents (e.g. letter, budget, CV as separate files): subfolders `Gustaf/` and `Axel/`.
  - `ansokan.md` stays shared and lists the to-do for each of us.
- **Write applications in LaTeX** when the funder wants a document, one self-contained `.tex` file per application, so it can be uploaded straight to Overleaf. Commit the compiled PDF beside it. Use XeLaTeX when a grant requires Arial. When the funder uses a web form with fixed fields, write the answers field by field in `Gustaf.md` / `Axel.md` instead, with word counts.
- **Order:** we write the applications for each other. Draft Gustaf's first, read it through together, then make Axel's from it, with his own CV, background and, where the funder may compare them, a different focus.
- CVs to build from: `CV_Gustaf_Jensen.pdf` and `CV_Axel_Langenskiold.pdf` in the repo root.

## The workbook (`stipendier.xlsx`)

- **`Stipends` sheet:** 120 grants that are open, upcoming, rolling or undated.
- **`Passed` sheet:** 58 grants whose next round is too late for this thesis, kept for reference and follow-up projects.
- **`Notes` sheet:** profile, verdict legend, assumptions and caveats.

Columns, left to right (re-laid out 11 Nov 2026):

| Column | Meaning |
|---|---|
| Name, Our status | Grant name; "Sent <date>" once applied |
| Will we apply? | Dropdown for you: Yes, Maybe, No, Applied |
| Priority | 1 = do first, 2 = worth it, 3 = only if time; empty for applied, not eligible, timing or via EfA |
| Chance, Why this chance | Claude's 1-5 judgement of the odds and why |
| Verdict | Applied, Both, Gustaf only, Axel only, If you join first, Unclear - ask, Timing doesn't fit, Via EfA only, Not eligible |
| Together or individually | Together = one joint application; Individually = each applies; Nominated; Via EfA |
| Last day to apply, Days left | Deadline and a formula counting days from today (red at 14 or fewer, yellow at 15-45) |
| Window, When to apply | Open now, Upcoming, Rolling, Unknown, Passed; the full date text |
| Max amount (SEK), Amount note | Rough SEK for sorting; details |
| Membership needed, Membership cost | What you must join and the student price |
| Gustaf (26, Sundbyberg), Axel (24, Göteborg) | Yes, No, If joins, Unclear |
| Why (eligibility check), What to submit, Next step | Reasoning, attachments, action |
| Who can apply / catch, Type, Scope, Link, Last checked | Original details |

Rows are sorted by Priority, then deadline. To sort by deadline instead, use the filter arrow on "Last day to apply" or "Days left".

Formatting: rows marked "Not eligible" are struck through in grey and sorted to the bottom of each sheet. "Timing doesn't fit" and "Via EfA only" rows are grey italic. Yellow names are open now and green names have been applied for. Hover over a date to see its note and source.

Membership prices found: ST student free; Sveriges Ingenjörer student 180 SEK/year; Animal Behavior Society student USD 40/year; American Society of Mammalogists student USD 25/year; Sigma Xi student USD 50/year + USD 20 initiation (optional). Studentlund (needed for nation funds and AF) doesn't publish its fee online, so ask a nation.

Verdict counts on 11 Nov 2026:

| Verdict | Stipends | Passed |
|---|---:|---:|
| Applied | 2 | 0 |
| Both | 39 | 0 |
| Axel only | 3 | 0 |
| If you join first | 21 | 0 |
| Unclear - ask | 19 | 1 |
| Timing doesn't fit | 2 | 45 |
| Via EfA only | 3 | 1 |
| Not eligible | 31 | 11 |

## Nearest actions (as of 11 Nov 2026)

| When | What | Who |
|---|---|---|
| 27 Nov 2026 | Awesome Foundation, Conservation and Climate (~USD 1,000, not for travel) | Both |
| 30 Nov 2026 | Felix Neubergh | Axel |
| 30 Nov 2026 | Alice McCosh Trust; ask first whether thesis fieldwork is excluded | Both |
| 15 Dec 2026 | Animal Behavior Society Student Research Grant; join ABS first | Both |
| 15 Jan 2027 | Längmanska kulturfonden | Joint |
| Jan 2027 | CSN merkostnadslån, Student UT insurance via LU (needs a written LU-EfA agreement) | Both |
| 4-31 Jan 2027 | Mohamed bin Zayed Species Conservation Fund, USD 5,000; draft in its folder, one application (Gustaf applicant, Axel key personnel) | Joint |
| Feb 2027 | LU joint form, LU travel grants, AF if you have joined Studentlund | Each |
| 1 Mar 2027 | Anna Whitlocks Minnesfond; ASM Grants-in-Aid (join ASM first) | Each |
| 31 Mar 2027 | Hakon Hansson, Gustaf Söderberg (Axel), Karriärstipendiet | Each |
| 20 Apr 2027 | Herbert & Karin Jacobsons stiftelse | Axel |

## Known limitations

- No Swedish grant specifically for elephants or African wildlife was found. The wildlife-specific options are international: Mohamed bin Zayed, Animal Behavior Society, American Society of Mammalogists, Rufford and Idea Wild.
- Some international grants were verified only through directories (Terra Viva Grants, European Funding Guide, fundsforngos), because the funder's own page couldn't be opened. The source is in each date comment. Check the funder's page before applying.
- The Lindbergh Grant was found only on a third-party listing and is unconfirmed.
- Minor Field Studies and the Crafoord travel grant can't be used: their rounds don't fit a trip that starts 15 Feb 2027.
- ÅForsk paused its autumn 2026 call and said a decision on future calls would be posted in Nov 2026, so check again.
- Lund timings come from the university's list dated 31 Jan 2025, so confirm them when each round opens.
- Dates marked "expected", or given only as a season, are inferred from past rounds.
- Currency is converted roughly for sorting only: 1 USD ~ 10 SEK, 1 EUR ~ 11 SEK, 1 GBP ~ 13 SEK.
- Karriärföretagen's full grant list is behind a login and wasn't searched.

## Other files

- `CV_Gustaf_Jensen.pdf`, `CV_Axel_Langenskiold.pdf`: our CVs (Nov 2026), used for individual applications.
- `stipendier_prioritering.md`: the ranked shortlist with requirements per application (from 5 Nov 2026).
- `fler_pengakallor.md`: loans, insurance, equipment and international sources (from 5 Nov 2026). Its content is now also in the workbook.

## Rebuilding the list

`stipendier.xlsx` is the source of truth, so edit it directly. When you apply, write "Sent <date>" in Our status and set Verdict to Applied.
