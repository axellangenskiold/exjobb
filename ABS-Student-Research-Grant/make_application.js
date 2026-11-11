const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Footer, AlignmentType, PageNumber,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, LevelFormat, PageBreak,
} = require("docx");

const OUT = process.argv[2];
const FONT = "Arial";
const SZ = 22; // 11 pt
const AFTER = 80;

// --- helpers -------------------------------------------------------------
// text with **bold** and *italic* markers
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: FONT, size: SZ, ...base }));
    const t = m[0];
    if (t.startsWith("**")) out.push(new TextRun({ text: t.slice(2, -2), bold: true, font: FONT, size: SZ, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, font: FONT, size: SZ, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: FONT, size: SZ, ...base }));
  return out;
}
const P = (text, opts = {}) => new Paragraph({ children: runs(text, opts.run || {}), spacing: { after: opts.after ?? AFTER, line: 240 }, alignment: opts.align || AlignmentType.LEFT, ...(opts.para || {}) });
const H = (text) => new Paragraph({ children: [new TextRun({ text, bold: true, font: FONT, size: SZ })], spacing: { before: 60, after: 40, line: 240 }, keepNext: true });
const TITLE = (text) => new Paragraph({ children: [new TextRun({ text, bold: true, font: FONT, size: SZ })], spacing: { after: 20, line: 240 } });
const B = (text) => new Paragraph({ children: runs(text), numbering: { reference: "bul", level: 0 }, spacing: { after: 30, line: 240 } });
const REF = (text) => new Paragraph({ children: runs(text), spacing: { after: 0, line: 240 }, indent: { left: 284, hanging: 284 } });
const BREAK = () => new Paragraph({ children: [new PageBreak()], spacing: { after: 0 } });

const border = { style: BorderStyle.SINGLE, size: 4, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };
const TW = 9026; // A4 width minus 2 x 1 inch
function table(widths, rows, headerRows = 1) {
  return new Table({
    width: { size: TW, type: WidthType.DXA }, columnWidths: widths,
    rows: rows.map((r, i) => new TableRow({
      children: r.map((c, j) => new TableCell({
        borders, width: { size: widths[j], type: WidthType.DXA },
        margins: { top: 30, bottom: 30, left: 80, right: 80 },
        shading: i < headerRows ? { fill: "E7E6E6", type: ShadingType.CLEAR, color: "auto" } : undefined,
        children: [new Paragraph({ children: runs(String(c), i < headerRows ? { bold: true } : {}), spacing: { after: 0, line: 240 }, alignment: j > 0 && /^[\d$~(]|^USD|^—/.test(String(c)) && j >= widths.length - 1 ? AlignmentType.RIGHT : AlignmentType.LEFT })],
      })),
    })),
  });
}

// --- content -------------------------------------------------------------
const C = [];

// PAGE 1-4: research proposal
C.push(TITLE("Modelling and simulating elephant movement with step selection functions: do mineral needs steer bull elephants in the Makgadikgadi, Botswana?"));
C.push(P("Applicant: Gustaf Jensen, MSc student, Lund University, Sweden. Collaborator: Axel Langenskiöld (MSc student, Lund University). Supervisors: Jonas Skeppstedt (Computer Science) and Johan Lindström (Mathematical Statistics), Lund University. Research partner: Elephants for Africa, Botswana (Dr Kate Evans).", { after: 100 }));

C.push(H("Summary"));
C.push(P("Where an animal moves reflects decisions about which resources to seek and which risks to avoid. For African savanna elephants (*Loxodonta africana*), water and forage are well-established drivers of movement, but the role of minerals is far less understood, even though elephants actively eat salty soil where their diet lacks sodium (Holdø et al. 2002) and sodium may limit megaherbivores across Africa (Abraham et al. 2025). The Makgadikgadi in Botswana, a landscape of salt pans where bull elephants have returned in large numbers since the Boteti River began flowing again in 2009, offers an unusually clear setting to ask whether mineral needs shape movement decisions. Using existing GPS data from around ten bulls tracked hourly by Elephants for Africa since 2022, I will test whether bulls select mineral-rich areas once water and vegetation are accounted for, whether this selection changes between seasons and among individuals, and whether the corridors bulls use coincide with mineral-rich sites. I will use integrated step selection functions with individual variation and a recent deep learning extension, and evaluate them by predicting each bull's location 1 to 12 months ahead on data not used for fitting. A small soil sampling campaign along the predicted corridors will test whether the literature-based mineral maps reflect conditions on the ground. The work links nutritional ecology to individual movement decisions in a long-lived social mammal, and its seasonal maps of likely elephant presence will support human-elephant coexistence."));

C.push(H("Introduction"));
C.push(P("Movement ecology treats each step an animal takes as a choice among the places it could reach. Step selection functions (SSFs) formalise this by comparing each observed step with random steps available from the same starting point, estimating how environmental conditions make a step more or less likely to be chosen (Fortin et al. 2005). Integrated SSFs (iSSFs) estimate movement and habitat selection jointly (Avgar et al. 2016), mixed-effects iSSFs capture how individuals differ (Muff et al. 2020), and fitted models can be simulated forward to map where animals are likely to be and which corridors they use (Signer et al. 2017; Osipova et al. 2019). A recent deep learning SSF (deepSSF) learns non-linear responses directly from environmental maps and predicted buffalo movement better than a conventional iSSF (Forrest et al. 2026)."));
C.push(P("Herbivores need sodium, but most plants contain little of it. Elephants compensate through geophagy, and soil eating increases where dietary sodium is low (Holdø et al. 2002). A continental analysis recently suggested that sodium constrains megaherbivore communities and warned that animals travelling far for salt may come into more frequent conflict with people (Abraham et al. 2025). Yet mineral sources are rarely included when elephant movement is modelled, so it is unknown how much they shape where elephants go relative to water and vegetation."));
C.push(P("**Study system.** Botswana holds the world's largest elephant population, and elephants increasingly move through farmland. Between 2018 and 2022, elephants caused 41% of wildlife damage to crops, boreholes, water tanks and fences (ATC News 2023). In the Makgadikgadi, Elephants for Africa has studied male elephants since 2012 (Evans 2019); its collared bulls spend about three times as much time outside protected areas as inside (Elephants for Africa 2025). One aim of its GPS project was to learn whether mineral needs drive the bulls' movements (AZA n.d.), but this has not yet been tested. Bulls suit the question well: they range widely and independently, and the salt pans provide strong spatial contrast in mineral availability."));
C.push(P("**Pilot data.** Vader (2023) analysed the first ten months (Aug 2022 to Jun 2023) of hourly GPS data from ten bulls. Home range sizes varied widely, bulls selected shrubland and roads and avoided crops and bare ground, and one bull moved faster and ranged wider during musth. This shows the data are suitable for step selection and that individual variation must be modelled. No analysis has yet included minerals or used the full 2022 to 2025 dataset."));
C.push(P("**What ABS would fund.** The models are fitted to existing data as part of my master's thesis. The ABS grant would fund the field component in Botswana: working at Elephants for Africa's research camp to build and check the environmental layers with its staff, and collecting soil samples along the predicted corridors to test the mineral maps against measurements."));

C.push(H("Hypotheses"));
C.push(B("**H1 Mineral selection:** after accounting for water and vegetation, bulls select steps towards mineral-rich areas (salt pans and soils high in sodium and calcium)."));
C.push(B("**H2 Seasonality:** the strength of mineral selection differs between wet and dry seasons."));
C.push(B("**H3 Individual variation:** bulls differ consistently in how strongly they select mineral-rich areas."));
C.push(B("**H4 Corridors:** corridors where many simulated tracks pass contain more mineral-rich areas than expected from water and vegetation alone."));
C.push(B("**H5 Prediction:** including minerals improves predictions of bull locations 1, 3, 6 and 12 months ahead, and more flexible models (deepSSF) improve on the iSSF at some but not all time horizons."));

C.push(H("Proposed Research"));
C.push(P("**Data.** GPS fixes from around ten adult bulls collared by Elephants for Africa (2022 to 2025, hourly) are cleaned and resampled to a regular step length. Environmental layers are built from open satellite data: surface water, vegetation greenness (NDVI), salt pans, distance to the Boteti River and boreholes, and farmland. Mineral layers combine 30 m African soil nutrient maps (Hengl et al. 2021) with a literature review of soil and geological maps, published studies and mining-industry data."));
C.push(P("**Analysis.** (1) A classical SSF fitted by conditional logistic regression with 10 to 20 random steps per observed step. (2) A mixed-effects iSSF (Muff et al. 2020) that adds step length and turning angle and gives each bull its own selection coefficients, with season-by-mineral interactions. (3) A deepSSF (Forrest et al. 2026). H1 is tested by the sign and 95% confidence interval of the mineral coefficients and by comparing models with and without mineral layers. H2 is tested by the season interaction and H3 by the among-individual variance of the mineral slopes, related to age class and musth where Elephants for Africa's records allow. For H4, I simulate many tracks from the fitted iSSF (Signer et al. 2017), define corridors as cells crossed by many tracks, and compare their mineral values with non-corridor cells using a permutation test that keeps water and vegetation fixed. For H5, each bull is held out in turn and the final year of data is kept as a test period; predictive skill is the log-likelihood of observed positions under the predicted maps, compared with a seasonal baseline of where bulls were in the same season before."));
C.push(P("**Field validation.** Together with Elephants for Africa staff, I will collect up to 20 topsoil samples (0 to 20 cm) at corridor sites the bulls use often and at nearby comparison sites, taking about one field day. Samples are exported under permit for laboratory analysis funded by Elephants for Africa, and the measured values are compared with the mapped ones. No animals are handled or approached."));
C.push(P("**Experience and support.** Axel Langenskiöld and I are computer science master's students with coursework in machine learning, artificial intelligence, mathematical statistics and numerical analysis. Johan Lindström works on spatial statistics, Jonas Skeppstedt supervises the computing work, and Kate Evans, founder and director of research at Elephants for Africa, contributes expertise on bull elephants. Research officer Thatayaone Motsentwa supports the GPS data and fieldwork. We are based at Elephants for Africa's camp near Khumaga, and a research permit has been applied for with the Ministry of Environment and Tourism."));
C.push(P("**Timetable.** Dec 2026 to Feb 2027: data preparation and mineral literature review (Sweden). 15 Feb to 15 May 2027: model building, field validation and soil sampling in Botswana. May to Jun 2027: evaluation and thesis writing. Jun 2027: thesis and seasonal maps delivered to Elephants for Africa and the Department of Wildlife and National Parks."));

C.push(H("Predicted Outcomes"));
C.push(B("If mineral coefficients are positive and improve held-out prediction (H1, H5), mineral needs shape bull movement decisions and mineral sites should be considered in coexistence planning, for example when placing salt licks. If they have no effect, movement is explained by water and forage, or mineral effects are masked because pans also hold water; I will then test pans with and without surface water separately."));
C.push(B("If selection peaks in the wet season (H2), mineral demand is likely highest when bulls eat fresh forage; if it peaks in the dry season, mineral visits may be a side effect of bulls concentrating near the river. No seasonal difference suggests a constant demand."));
C.push(B("If individual variance is large (H3), population maps hide distinct strategies, and individual-based predictions are needed; if small, a population model is enough."));
C.push(B("If corridors coincide with mineral-rich areas (H4), minerals help explain where bulls travel; if not, corridors are shaped by water and terrain. If soil measurements match the maps, the mineral layers are reliable; if not, mineral effects are interpreted cautiously."));

C.push(H("Importance of Proposed Research"));
C.push(P("The study tests whether a specific nutrient shapes individual movement decisions in a free-ranging megaherbivore, linking nutritional ecology and movement ecology in a way rarely done for elephants. Comparing classical and deep learning step selection on long-horizon, out-of-sample prediction shows when added model complexity helps explain behaviour. The results also matter for conservation: if minerals draw bulls out of protected areas, managing mineral sources becomes a tool for human-elephant coexistence."));

C.push(H("Diversity, Equity and Inclusion Statement"));
C.push(P("I came to animal behaviour from computer science, and this project depends on combining knowledge from different backgrounds: our statistical modelling with the long-term field knowledge of Botswana-based researchers. [Gustaf: add one or two sentences about your own educational, cultural or economic experiences that shaped your path.] The project is designed to build local capacity rather than extract data. We will work alongside Elephants for Africa's Botswana team, train its staff to use the models and maps, and share all code with documentation written for users without programming experience. Results are returned through reports to the Ministry and the Department of Wildlife and National Parks, and the maps can be used in Elephants for Africa's work with the communities around the park. After the thesis, I will keep the tools openly available and support the team in using them."));

C.push(H("References"));
[
 "Abraham AJ et al. 2025. Sodium constraints on megaherbivore communities in Africa. Nat Ecol Evol. doi:10.1038/s41559-025-02917-y",
 "ATC News 2023. Botswana holds meeting to address human-wildlife conflict concerns.",
 "Avgar T, Potts JR, Lewis MA, Boyce MS 2016. Integrated step selection analysis. Methods Ecol Evol 7:619-630.",
 "AZA n.d. A new geo-tracking project aims to demystify the movement of African elephant bulls. Association of Zoos and Aquariums.",
 "Elephants for Africa 2025. Uncovering elephant secrets in Botswana. Project report, GlobalGiving.",
 "Evans KE 2019. Elephants for Africa: male savannah elephant sociality, the Makgadikgadi and resource competition. Int Zoo Yb 53:200-207.",
 "Forrest SW et al. 2026. Predicting animal movement with deepSSF: a deep learning step selection framework. Methods Ecol Evol 17:371-391.",
 "Fortin D et al. 2005. Wolves influence elk movements: behavior shapes a trophic cascade in Yellowstone National Park. Ecology 86:1320-1330.",
 "Hengl T et al. 2021. African soil properties and nutrients mapped at 30 m spatial resolution using two-scale ensemble machine learning. Sci Rep 11:6130.",
 "Holdø RM, Dudley JP, McDowell LR 2002. Geophagy in the African elephant in relation to availability of dietary sodium. J Mammal 83:652-664.",
 "Muff S, Signer J, Fieberg J 2020. Accounting for individual-specific variation in habitat-selection studies. J Anim Ecol 89:80-92.",
 "Osipova L et al. 2019. Using step-selection functions to model landscape connectivity for African elephants. Anim Conserv 22:35-48.",
 "Signer J, Fieberg J, Avgar T 2017. Estimating utilization distributions from fitted step-selection functions. Ecosphere 8:e01771.",
 "Vader J 2023. Preliminary data on the movement ecology and behaviour of ten adult male African savannah elephants in Botswana and Zimbabwe. MSc thesis, Edinburgh Napier University.",
].forEach((r) => C.push(REF(r)));

// PAGE 5: budget
C.push(BREAK());
C.push(H("Budget and Justification"));
C.push(P("All amounts are actual out-of-pocket costs for the applicant's part of the field component, converted at about 1 USD = 13.1 BWP and 1 USD = 10 SEK. No salary, overhead or tuition is requested.", { after: 100 }));
C.push(table([3700, 3826, 1500], [
  ["Item", "Justification", "Request (USD)"],
  ["Research camp fees, Elephants for Africa (part)", "Accommodation and meals at the only base inside the study area, needed to work with the field team, check the environmental layers and reach sampling sites. Full cost BWP 57,700 (about USD 4,400) for 15 Feb to 15 May.", "1,500"],
  ["Soil sampling field day", "Vehicle with Elephants for Africa driver (BWP 3,110) and park ferry (BWP 400) for one day of sampling along predicted corridors.", "270"],
  ["Park research fee (DWNP)", "Required to work inside Makgadikgadi Pans National Park (BWP 3,000).", "230"],
  ["**Total requested from ABS**", "", "**2,000**"],
]));
C.push(P("", { after: 60 }));
C.push(H("Total budget for the research (applicant's share)"));
C.push(table([5526, 3500], [
  ["Item", "Cost (USD)"],
  ["Research camp fees, 15 Feb to 15 May 2027 (BWP 57,700)", "~4,400"],
  ["Return flight Sweden to Maun (actual fare, about SEK 10,000)", "~1,000"],
  ["Park research fee (BWP 3,000)", "~230"],
  ["Soil sampling field day (BWP 3,510)", "~270"],
  ["Laboratory analysis of soil samples", "Funded by Elephants for Africa"],
  ["**Total**", "**~5,900**"],
]));
C.push(P("", { after: 60 }));
C.push(H("Other funds available"));
C.push(P("No funds are available from the supervisors or the department. GPS data, staff knowledge and laboratory analysis are contributed in kind by Elephants for Africa. Remaining costs are paid personally. [Gustaf: confirm, e.g. savings and Swedish student loans.]"));
C.push(H("Other grant proposals submitted"));
C.push(B("Sveriges Ingenjörers Miljöfond (LTH), joint with Axel Langenskiöld, SEK 50,000 (about USD 5,000) for the thesis, submitted 10 Nov 2026, pending."));
C.push(B("ST international scholarship (Swedish union ST), joint, SEK 5,000 to 10,000 per person, submitted 11 Nov 2026, pending."));
C.push(B("Planned: Anna Whitlock Memorial Fund, Hakon Hansson Foundation travel grant, American Society of Mammalogists Grants-in-Aid. If other awards cover the same costs, the ABS funds will be used for the remaining field costs listed above."));

// PAGE 6: CV applicant
C.push(BREAK());
C.push(H("Curriculum Vitae: Gustaf Jensen"));
C.push(P("Lund University, Faculty of Engineering (LTH), Sweden. gustaf.jensen@gmail.com, +46 72 302 08 06", { after: 100 }));
C.push(H("Education"));
C.push(B("Master of Science in Engineering, Computer Science and Engineering, Lund University, 2022 to 2027 (expected Jun 2027). 213.5 credits (ECTS) completed. Thesis advisors: Jonas Skeppstedt (Computer Science) and Johan Lindström (Mathematical Statistics)."));
C.push(B("Relevant courses: Machine Learning; Artificial Intelligence; Mathematical Statistics; Numerical Analysis; Advanced Algorithms; Algorithms, Data Structures and Complexity; Signal Processing in Multimedia; Sustainability and Resource Use (grade 5, pass with distinction)."));
C.push(H("Master's thesis (spring 2027)"));
C.push(B("Modelling and simulating elephant movement with step selection functions: GPS data from bull elephants in Botswana. In collaboration with Elephants for Africa; research permit applied for with Botswana's Ministry of Environment and Tourism."));
C.push(H("Research and work experience"));
C.push(B("[Gustaf: add Saab role, department and dates, and any other relevant work, e.g. data analysis or software projects.]"));
C.push(B("Software Development in Teams, Lund University, 2024: team software project."));
C.push(H("Publications"));
C.push(P("None yet."));
C.push(H("Awards and fellowships"));
C.push(P("[Add any, or write: None yet.]"));
C.push(H("Previous and pending grant support"));
C.push(B("Sveriges Ingenjörers Miljöfond, SEK 50,000 (joint), submitted Nov 2026, pending."));
C.push(B("ST international scholarship, SEK 5,000 to 10,000 per person (joint), submitted Nov 2026, pending."));
C.push(H("Research presentations"));
C.push(P("None yet. Planned: thesis presentation at Lund University (Jun 2027) and results presented to Elephants for Africa and the Department of Wildlife and National Parks."));

// PAGE 7: CV collaborator
C.push(BREAK());
C.push(H("Curriculum Vitae: Axel Langenskiöld (collaborator)"));
C.push(P("Lund University, Faculty of Engineering (LTH), Sweden. axel@langenskiold.se, +46 73 209 70 84", { after: 100 }));
C.push(H("Education"));
C.push(B("Master of Science in Engineering, Computer Science and Engineering, Lund University, 2022 to 2027 (expected Jun 2027). Thesis advisors: Jonas Skeppstedt and Johan Lindström."));
C.push(B("Relevant courses: Mathematical Statistics; Numerical Analysis; Algorithms, Data Structures and Complexity; Concurrent Programming; Signal Processing in Multimedia; Sustainability and Resource Use (grade 5, pass with distinction). [Axel: add Machine Learning and other recent courses.]"));
C.push(H("Role in the project"));
C.push(B("Co-author of the master's thesis. Shares the data preparation, modelling and evaluation, and the fieldwork in Botswana."));
C.push(H("Research and work experience"));
C.push(B("[Axel: add relevant work and projects.]"));
C.push(H("Publications, awards and presentations"));
C.push(P("None yet."));
C.push(H("Pending grant support"));
C.push(B("Sveriges Ingenjörers Miljöfond and ST international scholarship (joint applications above)."));

// PAGE 8: animal care
C.push(BREAK());
C.push(H("Animal Care Questionnaire"));
C.push(P("Prepared after reading the ASAB/ABS Guidelines for the Treatment of Animals in Behavioural Research and Teaching.", { after: 100 }));
const Q = (q, a) => { C.push(P("**" + q + "**", { after: 20 })); C.push(P(a, { after: 100 })); };
Q("1. Does the study involve endangered or threatened species or populations?", "Yes. The African savanna elephant (Loxodonta africana) is listed as Endangered by the IUCN. The study uses only existing GPS data and does not involve contact with the animals.");
Q("2. Does the study involve trapping, netting, banding, or otherwise potentially disturbing wild populations?", "No. No animals are captured, collared, handled or approached. The GPS collars were fitted by Elephants for Africa under its own permits in an earlier project. Soil sampling takes place at sites chosen from the GPS data and is done together with experienced Elephants for Africa staff, who keep a safe distance from any elephants present.");
Q("3. Does the study require permits?", "Yes.");
C.push(B("Research permit, Ministry of Environment and Tourism, Botswana: applied for, Nov 2026."));
C.push(B("Supplementary research permit, Department of Wildlife and National Parks (for work inside Makgadikgadi Pans National Park): will be applied for once the research permit is issued."));
C.push(B("Export permit for soil samples: will be applied for before any samples leave Botswana."));
C.push(P("", { after: 40 }));
Q("4. Does the study involve maintaining animals in captivity?", "No.");
Q("5. Name of the certifying organization.", "Not applicable. No animals are kept or handled. The project is reviewed under Botswana's research permit process.");
Q("6. Describe the facilities and animal care protocols.", "Not applicable. The study is observational and uses existing GPS location data. Work in Botswana is based at Elephants for Africa's research camp near Khumaga, and all fieldwork follows Elephants for Africa's field safety protocols.");
Q("7. Will animals be subjected to pain?", "No.");

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: SZ } } } },
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 284, hanging: 284 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440, footer: 567 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: SZ })] })] }) },
    children: C,
  }],
});
Packer.toBuffer(doc).then((b) => fs.writeFileSync(OUT, b));
