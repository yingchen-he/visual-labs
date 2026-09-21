# Visual Psychophysics Labs

A modular, web-based suite of interactive vision science experiments designed for educational, research, and self-testing applications. Built using standard web technologies, this platform enables precise visual perimetry, acuity measurement, and custom psychophysical data collection directly in the browser through shared visual-angle calibration tools.

---

## 🧪 Currently Available Experiments

### 1. Visual Acuity Testing (`pages/acuity.html`)
* **Objective**: Assess spatial resolution limits using standardized optotypes.
* **Features**:
  * Calibrated optotype scaling dynamically linked to viewing distance.
  * Automated scoring with logMAR and Snellen equivalents.

### 2. Blind Spot Mapping (`pages/blindspot.html`)
* **Objective**: Measure, map, and analyze the visual boundary of the optic disc.
* **Features**:
  * 8-direction radial perimetry with configurable probe size and center starting position.
  * Interactive progress tracking and real-time direction checklists.
  * Automated geometric analytics: center position (deg), width/height (deg), and estimated area (deg²).
  * Dynamic SVG polygon boundary rendering.

---

## 🌟 Core Framework Features

* **Universal Screen Calibration**: Standardized credit card-based physical-to-pixel calibration and viewing distance adjustment (e.g., 57 cm viewing distance where 1 cm ≈ 1° of visual angle).
* **Centralized Data Logging**: Integrated experiment logging tables with one-click CSV export across all modules.
* **Shared Utility Library (`lab-utils.js`)**: Reusable functions for trigonometric visual degree conversions, modal dialogs, navigation, and file exports.
* **Responsive UI/UX**: Flexible layout with Bootstrap 5 side-by-side controls and interactive perimetry canvases.

---

## 📂 Project Structure

```text
├── index.html            # Main menu / project landing page
├── pages/
│   ├── blindspot.html    # Blind Spot Mapping experiment app
│   └── acuity.html       # Visual Acuity experiment app
└── assets/
    ├── css/
    │   └── custom.css    # Custom styles and canvas layouts
    └── js/
        └── lab-utils.js  # Utility functions (calibration, unit conversion, CSV export)
```

---
## 🛠️ Tech Stack
* HTML5 & CSS3: Responsive UI structure and SVG/Canvas styling.
* JavaScript (ES6+): Trigonometric visual angle algorithms, interactive event loops, and dynamic DOM rendering.
* Bootstrap 5.3 & Icons: Layout grid, accessible modals, and status badges.
* Code & UI Development: Interactive perimetry scripts, responsive Bootstrap 5 layouts, and visual degree utility functions were developed with assistance from **Google Gemini 3.5 Flash**.

## 📄 License
This project is open-source under the GNU General Public License v3 (GPLv3). Anyone who uses this code in their software to make their entire project 100% open-source under GPLv3.
