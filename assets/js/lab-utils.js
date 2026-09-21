/**
 * Shared Utilities & Calibration for Vision Perception Laboratory
 */

const CC_WIDTH_MM = 85.6; // Standard credit card width

const LabUtils = {
  // Global calibration state
  calibration: {
    cardWidthPx: 300,
    viewDistCm: 57,
    pxPerMm: 300 / 85.6,
    isCalibrated: false
  },

  /**
   * Load calibration variables from localStorage and sync UI inputs
   */
  loadCalibration(sliderEl, cardBoxEl, distInputEl, badgeEl) {
    const isCalibrated = localStorage.getItem('lab_calibrated');
    if (isCalibrated === 'true') {
      this.calibration.cardWidthPx = parseFloat(localStorage.getItem('lab_cardWidthPx')) || 300;
      this.calibration.viewDistCm = parseFloat(localStorage.getItem('lab_viewDistCm')) || 57;
      this.calibration.pxPerMm = parseFloat(localStorage.getItem('lab_pxPerMm')) || (this.calibration.cardWidthPx / CC_WIDTH_MM);
      this.calibration.isCalibrated = true;

      if (sliderEl) sliderEl.value = this.calibration.cardWidthPx;
      if (cardBoxEl) cardBoxEl.style.width = this.calibration.cardWidthPx + 'px';
      if (distInputEl) distInputEl.value = this.calibration.viewDistCm;
      if (badgeEl) {
        badgeEl.className = 'badge bg-success p-2 ms-2';
        badgeEl.textContent = `Calibrated (${this.calibration.viewDistCm} cm)`;
      }
    }
  },

  /**
   * Save new calibration settings to localStorage
   */
  saveCalibration(sliderEl, distInputEl, badgeEl, modalEl) {
    this.calibration.cardWidthPx = parseFloat(sliderEl.value);
    this.calibration.viewDistCm = parseFloat(distInputEl.value);
    this.calibration.pxPerMm = this.calibration.cardWidthPx / CC_WIDTH_MM;
    this.calibration.isCalibrated = true;

    localStorage.setItem('lab_cardWidthPx', this.calibration.cardWidthPx);
    localStorage.setItem('lab_viewDistCm', this.calibration.viewDistCm);
    localStorage.setItem('lab_pxPerMm', this.calibration.pxPerMm);
    localStorage.setItem('lab_calibrated', 'true');

    if (badgeEl) {
      badgeEl.className = 'badge bg-success p-2 ms-2';
      badgeEl.textContent = `Calibrated (${this.calibration.viewDistCm} cm)`;
    }

    if (modalEl) {
      bootstrap.Modal.getInstance(modalEl).hide();
    }
  },

  /**
   * Convert Visual Angle (Degrees) to On-Screen Pixels based on viewing distance
   */
  degToPx(deg) {
    const pxMm = this.calibration.pxPerMm ? this.calibration.pxPerMm : (96 / 25.4);
    const distMm = this.calibration.viewDistCm * 10;
    const sizeMm = 2 * distMm * Math.tan((Math.abs(deg) * Math.PI / 180) / 2);
    return Math.sign(deg) * sizeMm * pxMm;
  },

  /**
   * Universal CSV Exporter
   */
  downloadCSV(filename, csvContent) {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
};