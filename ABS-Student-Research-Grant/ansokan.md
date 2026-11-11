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
- The DEI statement is scored. Avoid jargon: reviewers come from all of animal behaviour.
- Optional: ABS's Graduate Liaison Early Proposal (GLEP) review gives feedback on drafts sent by **15 Nov 2026**. It is tight, but if the placeholders are filled by then it is free feedback before the real deadline.

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
- [ ] DEI statement (page 3): check the sentence about the Peru exchange and the orientation weeks, make it yours, remove the red note
- [ ] Budget (page 5): confirm how the rest is paid (savings, CSN) and remove the red note
- [ ] CV (pages 6-7): built from `CV_Gustaf_Jensen.pdf`; add any awards or keep "None yet"
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
