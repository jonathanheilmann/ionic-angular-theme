import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Color from 'color';

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class IonicAngularThemeSwitchService {
  protected static STORAGE_THEME_KEY = 'IonicAngularThemeSwitch_Theme';

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private storage: Storage
  ) {
    storage.get(IonicAngularThemeSwitchService.STORAGE_THEME_KEY).then(cssText => {
      this.setGlobalCSS(cssText);
    });
  }

  // Override all global variables with a new theme
  setTheme(theme: IonicColors = {}): void {
    const cssText = this.CSSTextGenerator(theme);
    this.setGlobalCSS(cssText);
    this.storage.set(IonicAngularThemeSwitchService.STORAGE_THEME_KEY, cssText);
  }

  // Define a single CSS variable
  setVariable(name: string, value: string): void {
    this.doc.documentElement.style.setProperty(name, value);
  }

  private setGlobalCSS(css: string): void {
    this.doc.documentElement.style.cssText = css;
  }

  async getStoredTheme(): Promise<string> {
    return await this.storage.get(IonicAngularThemeSwitchService.STORAGE_THEME_KEY);
  }

  private CSSTextGenerator(colors: IonicColors = {}) {
    const shadeRatio = 0.12;
    const tintRatio = 0.1;
    const colorNames = Object.keys(colors);

    if (colorNames.length === 0) {
      return '';
    }

    let result = ``;

    colorNames.forEach(name => {
      if (colors.hasOwnProperty(name)) {
        const colorHex = colors[ name ];
        const colorColor = Color(colorHex);

        if (name.startsWith('ion-')) {
          result += `
    --${name}: ${colorHex};
    --${name}-rgb: ${this.colorToRgb(colorColor)};
      `;
        } else {
          const contrastColorHex = this.contrast(colorColor);
          result += `
    --ion-color-${name}: ${colorHex};
    --ion-color-${name}-rgb: ${this.colorToRgb(colorColor)};
    --ion-color-${name}-contrast: ${contrastColorHex};
    --ion-color-${name}-contrast-rgb: ${this.colorToRgb(contrastColorHex)};
    --ion-color-${name}-shade:  ${colorColor.darken(shadeRatio)};
    --ion-color-${name}-tint:  ${colorColor.lighten(tintRatio)};
      `;
        }
      }
    });

    if (colors.hasOwnProperty('ion-background-color') && !colors.hasOwnProperty('ion-text-color')) {
      colors['ion-text-color'] = '#fff';
    } else if (!colors.hasOwnProperty('ion-background-color') && colors.hasOwnProperty('ion-text-color')) {
      colors['ion-background-color'] = '#000';
    }
    if (colors.hasOwnProperty('ion-background-color') && colors.hasOwnProperty('ion-text-color')) {
      const colorBackground = Color(colors['ion-background-color']);
      const colorText = Color(colors['ion-text-color']);

      let i = 50;
      do {
        const colorStep = colorText.mix(colorBackground, 1 - i / 1000);
        result += `
    --ion-color-step-${i}: ${colorStep};
    --ion-color-step-${i}-rgb: ${this.colorToRgb(colorStep)};
    `;
        i += 50;
      } while (i < 1000);
    }

    return result;
  }

  private contrast(color, ratio = 0.8) {
    return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
  }

  private colorToRgb(color) {
    return color.rgb().round().array().join(', ');
  }
}

export interface IonicColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  warning?: string;
  danger?: string;
  dark?: string;
  medium?: string;
  light?: string;

  'ion-background-color'?: string;
  'ion-text-color'?: string;
  'ion-backdrop-color'?: string;
  'ion-overlay-background-color'?: string;
  'ion-border-color'?: string;
  'ion-box-shadow-color'?: string;
  'ion-tab-bar-background'?: string;
  'ion-tab-bar-background-focused'?: string;
  'ion-tab-bar-border-color'?: string;
  'ion-tab-bar-color'?: string;
  'ion-tab-bar-color-activated'?: string;
  'ion-toolbar-background'?: string;
  'ion-toolbar-border-color'?: string;
  'ion-toolbar-color'?: string;
  'ion-toolbar-color-activated'?: string;
  'ion-toolbar-color-unchecked'?: string;
  'ion-toolbar-color-checked'?: string;
  'ion-item-background'?: string;
  'ion-item-background-activated'?: string;
  'ion-item-border-color'?: string;
  'ion-item-color'?: string;
  'ion-placeholder-color'?: string;

  [key: string]: string;
}
