# Blast Overpressure Calculator

A single-file web app (`index.html`). It needs no install, no server and no internet. Open it in any browser.

## What it does
- **Kingery-Bulmash** airblast model for a hemispherical surface burst. This is the method in IATG 01.80 §6.2 and the UN SaferGuard KB calculator.
- Up to **4 scenarios** side by side. Each has an explosive type, a charge mass (log slider plus exact entry, with threat-size presets) and TNT-equivalence sliders for pressure and impulse.
- **Point check** at any distance: incident and reflected pressure, incident and reflected impulse, time of arrival, positive-phase duration, shock velocity and scaled distance Z, plus the matching damage and injury effects.
- **Range table** in the same layout as the original spreadsheet (kPa | PSI per charge). The colour bands are editable. Exports to CSV.
- **Stand-off table**: the distance at which each damage or injury threshold is reached.
- Log–log **chart** of overpressure against distance, with threshold lines.
- **Explosive library** covering military, commercial and homemade (HME) explosives. The factors are editable, and edits are saved in the browser.
- Metric or imperial units, dark mode, and a print layout.

## Validation
- The KB coefficients were cross-checked against Swisdak (1994) and agree within about 1%.
- Reproduces the original spreadsheet exactly for 15 kg, 100 kg and 1000 kg TNT.

## Limitations
- The KB fits are valid for 0.0674 ≤ Z ≤ 40 m/kg^1/3. Values beyond Z = 40 are extended-range estimates and are shown in italics.
- The model does not include fragmentation, confinement, terrain, or reflections from nearby structures.
- HME TNT-equivalence factors are indicative only. Check every factor against AASTP-1 / IATG 01.80 or your organisation's reference.
