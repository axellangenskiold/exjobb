# Context: Botswana thesis funding

Last updated 5 Nov 2026. Grant data was checked on 4 Nov 2026.

## Goal

Two students are doing a master's thesis in Botswana on elephant preservation and need as much funding as possible. The task was to find at least 100 different scholarships or stipends available in Sweden, prioritising the highest paying, and list each one's name, when to apply and website link in Excel.

Filter: leave out anything restricted to women or to specific ethnic groups. Male-only funds are fine and are marked as such.

## Status

The list is finished: `stipendier.xlsx` has 118 unique grants. Nobody has applied to anything yet, as far as this file records.

**Open question:** is the home university Lund/LTH? This was only inferred from the `eitn21` folder and has not been confirmed. If it's wrong, the 89 Lund/LTH rows need replacing with that university's funds.

## Progress as of 10 Nov 2026

- **Thesis:** Gustaf Jensen and Axel Langenskiöld, computer science at LTH. Supervisors are Jonas Skeppstedt (Computer Science) and Johan Lindström (Mathematical Statistics), working with Elephants for Africa. In Botswana 15 Feb – 15 May 2027.
- **Botswana research permit:** the proposal (`MENT_signed.pdf`) and the endorsement letter are signed. `Application_for_Research_Permit_Axel_V2.pdf` is in the folder.
- **Sveriges Ingenjörers Miljöfond:** due 10 Nov 2026. The application is in `miljofond-ansokan.md`, with a checklist, the final answers and the email.

## The workbook

- **`Stipends` sheet:** Name, When to apply, Link, Max amount (SEK), Amount note, Who can apply / catch, Scope. Sorted by highest stated amount. Yellow rows are open now, or open or close before 2027.
- **`Notes` sheet:** assumptions, exclusions and caveats.

| Measure | Rows |
|---|---:|
| Total | 118 |
| Lund/LTH | 89 |
| National | 22 |
| Regional (needs a local tie) | 7 |
| On one joint Lund form | 71 |
| Requires membership in a student nation | 34 |
| Publishes an amount | 29 |
| Publishes 25,000 SEK or more | 20 |

## Nearest dates

| Date | Grant | Amount (SEK) | Check first |
|---|---|---:|---|
| 10 Nov 2026 | Sveriges Ingenjörers Miljöfond (LTH) | 50,000 | KTH's version requires theses abroad to benefit Sweden, so ask stipendier@lth.lu.se whether Botswana qualifies |
| 12 Nov 2026 | ST internationellt stipendium | 40,000 | ST student membership required; the amount may be shared |
| 1–30 Nov 2026 | Felix Neubergh | not published | Maximum age 25 |
| 15 Nov 2026 – 18 Jan 2027 | Sixten Gemzéus | 26,820 | About a full academic year abroad; amount comes from a third-party guide |
| 28 Nov 2026 – 20 Feb 2027 | Markussens Studiefond | not published | Kronoberg-born applicants |
| 1 Dec 2026 – 1 Feb 2027 | Helge Ax:son Johnson | not published | See the catch column |

Also open now: Längmanska kulturfonden (75,000 SEK, until 15 Jan 2027), Uppfostringsfonderna (35,000 SEK, until 31 Mar 2027) and Karriärstipendiet (15,000 SEK, current round until 31 Mar 2027).

## Largest grants

| Grant | Amount (SEK) | When to apply | Catch |
|---|---:|---|---|
| Sten K Johnsons Stiftelse | 400,000 | 21 Jan – 18 Feb 2027 | Skåne link |
| Rotary Global Grant | ~300,000 | Rolling, start 6+ months before travel | About a full year abroad; amount is a rough conversion of US$30,000 |
| Anders Walls stipendium | 200,000 | 1 Sep – 1 Nov 2027 | Maximum age 25 |
| Anna Whitlocks Minnesfond | 100,000 | 1 Jan – 1 Mar and 1 Jul – 1 Sep 2027 | See the catch column |
| Ege-fonden | 100,000 | 15 Mar 2027 | About a full year abroad |

## Known limitations

- No Swedish grant specifically for elephants or African wildlife was found, so most rows are general grants.
- Minor Field Studies (25,000 SEK): Botswana's eligibility is unconfirmed, so ask MFS@global.lu.se. It can't be combined with the Crafoord travel grant for the same stay.
- Lund timings come from the university's list dated 31 Jan 2025, so confirm them when each round opens.
- Dates marked "expected", or given only as a season, are inferred from past rounds.
- ÅForsk paused its autumn 2026 call and said a decision on future calls would be posted in Nov 2026, so check again.
- Every link passed an automatic check on 4 Nov 2026 except rotary.org, which blocked it (HTTP 429).
- Karriärföretagen's full grant list is behind a login and wasn't searched.

## Rebuilding the list

The build scripts are in a temporary folder and may be deleted, so treat `stipendier.xlsx` as the source of truth and edit it directly if they're gone.

- Grant data: `/private/tmp/claude-501/-Users-axellangenskiold-exjobb/f03419e5-3a82-4027-9f46-f7977768d7a6/scratchpad/verified.py`
- Workbook builder with self-checks: `/private/tmp/claude-501/-Users-axellangenskiold-exjobb/f03419e5-3a82-4027-9f46-f7977768d7a6/scratchpad/build.py`
