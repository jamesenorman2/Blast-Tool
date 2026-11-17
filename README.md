# Blast Calculator

A single-file web app (`index.html`). It needs no install, no server and no internet. Open it in any browser.

## What it does
- **Impact assessment** (top of the page). Enter the explosive, the weight and the distance. Bar charts then show:
  - **Buildings**: the IATG 01.80 brick-house damage category (Scilly / Gilbert-Lees-Scilly, Tables 40–42) with a distance-zone strip; the IATG Swiss P-I window-breakage model for small, medium and large windows; and fragility curves based on commonly cited overpressure ranges (protection levels per FEMA 426 / BIPS-06 Table 3-2) for wood, masonry, metal-clad, steel and concrete buildings.
  - **People**: killed, seriously injured, minor injury and uninjured, for people in the open, next to a wall, or inside a building. Three injury models are shown side by side: IATG Table 50 / TNO (default; allows for blast duration), your spreadsheet (Eisenberg), and UFC 3-340-02. TNO head-impact and body-displacement risk, window-glass injuries (IATG Table 46) and building-collapse casualties (IATG Table 54) are included.
  - Expected numbers for N people at the target, and a crowd-density estimate for everyone in the open around the blast.
  - A plan-view hazard-zone map, a pressure gauge, and your spreadsheet and FEMA tables with the rows that apply highlighted.
- **Kingery-Bulmash** airblast model for a hemispherical surface burst. This is the method in IATG 01.80 §6.2 and the UN SaferGuard KB calculator.
- Up to **4 scenarios** side by side. Each has an explosive type, a charge mass (log slider plus exact entry, with threat-size presets) and TNT-equivalence sliders for pressure and impulse.
- **Point check** at any distance: incident and reflected pressure, incident and reflected impulse, time of arrival, positive-phase duration, shock velocity and scaled distance Z, plus the matching damage and injury effects.
- **Range table** in the same layout as the original spreadsheet (kPa | PSI per charge). The colour bands are editable. Exports to CSV.
- **Stand-off table**: the distance at which each damage or injury threshold is reached.
- Log–log **chart** of overpressure against distance, with threshold lines.
- **Explosive library** covering military, commercial and homemade (HME) explosives. The factors are editable, and edits are saved in the browser.
- Metric or imperial units, dark mode, and a print layout.

## Validation
- Reproduces IATG 01.80 Table 5 (all nine blast parameters for 1, 10 and 100 t at 50 m).
- Reproduces the IATG Table 53 TNO lung-lethality example (11%).
- TNT equivalents follow IATG Table 10 (AASTP-1 Table 5-2) and Table 11 where available.
- The KB coefficients were cross-checked against Swisdak (1994) and agree within about 1%.
- Reproduces the original spreadsheet exactly for 15 kg, 100 kg and 1000 kg TNT.

## Limitations
- The KB fits are valid for 0.0674 ≤ Z ≤ 40 m/kg^1/3. Values beyond Z = 40 are extended-range estimates and are shown in italics.
- For small charges the pressure-only thresholds (FEMA, spreadsheet) overstate structural damage. The app warns about this and the IATG brick model allows for it.
- The model does not include fragmentation, confinement, terrain, or reflections from nearby structures.
- HME TNT-equivalence factors are indicative only. Check every factor against AASTP-1 / IATG 01.80 or your organisation's reference.
