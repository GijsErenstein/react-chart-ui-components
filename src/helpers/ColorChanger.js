
class ColorChanger {
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   {number}  h       The hue
   * @param   {number}  s       The saturation
   * @param   {number}  l       The lightness
   *
   * @return  {Array}           The RGB representation
   */
  static hslToRgb(h, s, l) {
    let r;
    let g;
    let b;

    if (s === 0) {
      r = l;
      g = l;
      b = l;
    } else {
      const hue2rgb = function hue2rgb(p, q, t) {
        let t2 = t;
        const q2 = q;
        const p2 = p;

        if (t2 < 0) t2 += 1;
        if (t2 > 1) t2 -= 1;
        if (t2 < 1 / 6) return p2 + (q2 - p) * 6 * t2;
        if (t2 < 1 / 2) return q2;
        if (t2 < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;

        return p2;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h, s, and l in the set [0, 1].
   *
   * @param   {number}  r       The red color value
   * @param   {number}  g       The green color value
   * @param   {number}  b       The blue color value
   *
   * @return  {Array}           The HSL representation
   */
  static rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b); const
      min = Math.min(r, g, b);
    let h; let s; const
      l = (max + min) / 2;

    if (max === min) {
      h = 0;
      s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h, s, l];
  }

  /**
   *
   * @param {string} color    hex color
   * @param {number} amount   added brightness amount
   *
   * @return {string|null}    new hex color
   */
  static lightenColor(color, amount = 0.5) {
    if (color && color.length >= 6) {
      const redValue = parseInt(color.slice(-6, -4), 16);
      const greenValue = parseInt(color.slice(-4, -2), 16);
      const blueValue = parseInt(color.slice(-2), 16);

      const hsl = ColorChanger.rgbToHsl(redValue, greenValue, blueValue);
      hsl[2] = Math.min(hsl[2] + amount, 1);
      const rgb = ColorChanger.hslToRgb(hsl[0], hsl[1], hsl[2]);

      return `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`;
    }

    return null;
  }

  /**
   *
   * @param {string} color    hex color
   * @param {number} amount   added darkness amount
   *
   * @return {string|null}    new hex color
   */
  static darkenColor(color, amount = 0.1) {
    if (color && color.length >= 6) {
      const redValue = parseInt(color.slice(-6, -4), 16);
      const greenValue = parseInt(color.slice(-4, -2), 16);
      const blueValue = parseInt(color.slice(-2), 16);

      const hsl = ColorChanger.rgbToHsl(redValue, greenValue, blueValue);
      hsl[2] = Math.max(hsl[2] - amount, 0);
      const rgb = ColorChanger.hslToRgb(hsl[0], hsl[1], hsl[2]);

      const RR = (rgb[0].toString(16).length < 2) ? `0${rgb[0].toString(16)}` : rgb[0].toString(16);
      const GG = (rgb[1].toString(16).length < 2) ? `0${rgb[1].toString(16)}` : rgb[1].toString(16);
      const BB = (rgb[2].toString(16).length < 2) ? `0${rgb[2].toString(16)}` : rgb[2].toString(16);

      return `#${RR}${GG}${BB}`;
    }

    return null;
  }

  /**
   * @param {string} color  hex color
   *
   * @return {string}       black or white in hex format
   */
  static getBlackOrWhiteContrastColor(color) {
    if (color && color.length >= 6) {
      const redValue = parseInt(color.slice(-6, -4), 16);
      const greenValue = parseInt(color.slice(-4, -2), 16);
      const blueValue = parseInt(color.slice(-2), 16);

      const luma = 0.2126 * redValue + 0.7152 * greenValue + 0.0722 * blueValue; // per ITU-R BT.709

      if (luma < 180) {
        return '#FFFFFF';
      }

      return '#000000';
    }
  }
}

export default ColorChanger;
