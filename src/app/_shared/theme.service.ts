import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly CURRENT_THEME = 'app-theme';
  private readonly LIGHT_THEME_NAME = 'app-light-theme';
  private readonly DARK_THEME_NAME = 'app-dark-theme';

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public isDarkTheme(): boolean {
    return localStorage.getItem(this.CURRENT_THEME) === this.DARK_THEME_NAME;
  }

  // Runs once at startup
  public enableTheme() {
    if (this.isDarkTheme()) {
      this.enableDarkTheme();
    } else {
      this.enableLightTheme();
    }
  }

  // Invoke for switching theme
  public toogleTheme() {
    if (this.isDarkTheme()) {
      this.enableLightTheme();
    } else {
      this.enableDarkTheme();
    }
  }

  private enableLightTheme() {
    localStorage.setItem(this.CURRENT_THEME, this.LIGHT_THEME_NAME);
    this.renderer.removeClass(document.body, this.DARK_THEME_NAME);
    this.renderer.addClass(document.body, this.LIGHT_THEME_NAME);
  }

  private enableDarkTheme() {
    localStorage.setItem(this.CURRENT_THEME, this.DARK_THEME_NAME);
    this.renderer.removeClass(document.body, this.LIGHT_THEME_NAME);
    this.renderer.addClass(document.body, this.DARK_THEME_NAME);
  }
}
