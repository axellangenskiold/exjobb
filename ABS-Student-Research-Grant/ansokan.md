# Animal Behavior Society: Student Research Grant

Deadline: **15 December 2026, 23:59 Pacific time** (about 08:59 Swedish time on 16 Dec).
Rules: <https://www.animalbehaviorsociety.org/web/awards-srg.php>
Submit through the ABS online system: <https://www.animalbehaviorsociety.org/abs_online/>

Applicant: **Gustaf Jensen** (draft written in his name). Amount: USD 500-2,000; we request USD 2,000.

## Important rules

- **One applicant per application, and one ABS research grant per person for life.** Axel can't be co-applicant on the same proposal. He is listed as collaborator. If Axel wants his own, he needs a separate proposal on a distinct part of the work, and ABS may not fund two near-identical projects.
- The applicant must be an **ABS member** (student USD 40/year) when applying.
- One single PDF, exactly this layout, or it is **not reviewed**:
  - Pages 1-4: proposal (Summary max 300 words, Introduction, Hypotheses, Proposed Research, Predicted Outcomes, Importance, DEI statement, References)
  - Page 5: budget, justification, other funds, other proposals
  - Pages 6-7: CV
  - Page 8: Animal Care Questionnaire
- Arial 11 pt, single spacing, 2.5 cm margins, page numbers 1-8 at the bottom centre, each heading on its own line.
- No salary, overhead or tuition. Items over USD 500 must be justified. Travel at actual cost.
- Avoid field-specific jargon: reviewers come from all of animal behaviour. ABS also advises getting input on drafts and having a senior scientist read the final version.
- Optional: ABS's Graduate Liaison Early Proposal (GLEP) service edits English (grammar and word choice only, not science) for final drafts sent by **15 Nov 2026, 23:59 PST**.

## What each section must contain (from the ABS page, checked 11 Nov 2026)

| Section | ABS asks for | Where we cover it |
|---|---|---|
| Summary | One paragraph, max 300 words: the work, the question, conceptual significance, intellectual merit and originality | 269 words |
| Introduction | Background with classic and recent papers, the study organism, pilot data, why the system suits the question, why it matters to the field and more broadly. Keep ABS-funded work separate from other research | Method history (Fortin 2005 to Forrest 2026), minerals, study system, Vader 2023 pilot data, "What ABS would fund" |
| Hypotheses | List of specific hypotheses | H1-H5 |
| Proposed Research | Methods, statistics, relevant experience, logistics, timetable | Data, Analysis, Field validation, Experience and support, Timetable |
| Predicted Outcomes | How alternative results are interpreted, as if/then statements | One if/then bullet per hypothesis |
| Importance | Conclusions the study can support and their relevance to animal behaviour | Own section |
| DEI statement | Required and scored separately (0-5). Three areas: (1) experiences that shaped your path, (2) past and planned work that increases participation of under-represented groups, (3) past and planned contributions to diversity in research, teaching or mentoring, including within ABS | Peru/Amazon, orientation weeks, leadership; workshop, co-authorship, open guide, ABS mentoring |
| References | Full citations for everything cited | 14 references |
| Budget (p5) | Itemised, justified, total research budget, other funds available, other grant applications | All five parts |
| CV (p6-7) | Concise, max 2 pages: education with degree dates and advisors, publications, awards, grants, presentations | Awards left out since there are none |
| Animal care (p8) | Yes/no on endangered species, disturbing wild populations, permits, captivity, pain, certifying organisation; read the ASAB/ABS guidelines first | All seven |

**Scoring** (<https://www.animalbehaviorsociety.org/web/downloads/ABS_Scoring_system.pdf>): research 1-10 (study design, technique choice, novelty, expected impact) and DEI 0-5. For DEI, 5 needs current activities, concrete past achievements and future plans that are creative; 4 has the same but not creative; 3 is missing one of the three; 2 is missing two. Reviewers write 2-4 sentences on DEI.

Successful past proposals: <https://spltrak.box.com/s/e0peoxzi5ds971cuckxjv102xt9xt83t>

## Files

This is an individual grant, so each of us has our own application (see "Folder convention" in `../context.md`).

- `Gustaf.tex`: Gustaf's application in LaTeX. Upload it to Overleaf and set Menu → Compiler → **XeLaTeX** so it uses Arial (or Liberation Sans, which has the same letter widths). pdfLaTeX also works but uses Helvetica.
- `Gustaf.pdf`: compiled version, exactly 8 pages, each part on its page.
- `Axel.tex` / `Axel.pdf`: to be made once Gustaf's version has been read through.

The `\gotopage{n}` command in the .tex makes the budget start on page 5, the CV on page 6 and the questionnaire on page 8. If the part before is too long, the Overleaf log warns "ABS layout: ... Shorten the part before it!". Red text marks things to fill in and must be gone before sending.

**Axel's version:** ABS gives one grant per person, and two near-identical proposals from the same project risk being judged against each other. Give Axel's proposal its own focus (for example the prediction comparison, H5, as the main question) and its own summary and hypotheses, and swap the applicant, CV and DEI statement.

Content is taken from the project plan (`Goal_Document___Project_Plan_v2.pdf`) and the permit proposal (`MENT_signed.pdf`): same title, research questions, methods, dates, sampling plan and budget figures. The hypotheses H1-H5 are RQ1-RQ3 split into testable parts, as ABS asks for hypotheses with if/then predictions.

## To do before sending

- [ ] Join ABS as a student member (USD 40)
- [ ] DEI statement (page 4): check you stand behind the plans (workshop at camp, co-authorship for Botswana staff, open guide, ABS mentoring), remove the red note
- [ ] CV: fill in years for military service and SATS Future Leader (red)
- [ ] Check exchange rates and update the USD figures if they have moved
- [ ] After every edit, check the PDF is still exactly 8 pages and the Overleaf log has no "ABS layout" warning
- [ ] Then make Axel's version (`Axel.tex`)
- [ ] Ask Kate to read it; she may know reviewers' expectations
- [ ] Update "Other proposals" if SI or ST decide before 15 Dec
- [ ] Submit, then write "Sent <date>" in `stipendier.xlsx`

## Notes on choices

- The ABS money is tied to the field part (camp fees, sampling day, park fee), because ABS funds research costs and the modelling itself runs on existing data.
- The flight (about USD 1,000) is in the total budget but not in the request, to keep the request focused and avoid overlap with ST, which is meant for travel.
- The questionnaire answers "Yes" for endangered species (IUCN Endangered) and "No" for disturbance, captivity and pain: no animals are handled, the collars belong to an earlier EfA project.
- Exchange rates used: 1 USD ≈ 13.1 BWP, 1 USD ≈ 10 SEK (Nov 2026).
