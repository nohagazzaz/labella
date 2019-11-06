import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';


const languageKey = 'language';



@Injectable()
export class I18nService {

  renderer: Renderer2 = null;
  defaultLanguage: string;
  supportedLanguages: string[];

  private languages: any = {
    'ar': { name: 'العربية', rtl: true },
    'en': { name: 'English' }
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  constructor(private translateService: TranslateService,
    private rootRenderer: RendererFactory2) {
    // Embed languages to avoid extra HTTP requests

    this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param {!string} defaultLanguage The default language to use.
   * @param {Array.<String>} supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
    this.updatePageDirection();
    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => {
        localStorage.setItem(languageKey, event.lang);
        this.renderer.setAttribute(document.querySelector('html'), 'lang', this.translateService.currentLang);
        this.updatePageDirection();
      });
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param {string} language The IETF language code to set.
   */
  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = includes(this.supportedLanguages, language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return {string} The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }

  isRTL(lang: string): boolean {
    return this.languages[lang].rtl;
  }

  private updatePageDirection() {
    this.renderer.setAttribute(
      document.querySelector('html'),
      'dir',
      this.isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr'
    );
    this.renderer.setAttribute(
      document.querySelector('body'),
      'dir',
      this.isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr'
    );
    this.renderer.removeClass(document.querySelector('body'), this.isRTL(this.translateService.currentLang) ? 'ltr' : 'rtl');
    this.renderer.addClass(document.querySelector('body'), this.isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr');
    // this.renderer.setAttribute(
    //   document.querySelector('body'),
    //   'class',
    //   this.isRTL(this.translateService.currentLang) ? 'rtl' : 'ltr'
    // );
  }

}

