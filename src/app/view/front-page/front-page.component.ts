import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

type Language = {
  code: string;
  label: string;
  flagUrl: string;
};

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.html',
  styleUrls: ['./front-page.css']
})
export class FrontPageComponent {
  selectedLanguage: string = 'en-US';

  languages: Language[] = [
    { code: 'en-US', label: 'English', flagUrl: 'assets/img/us.png' },
    { code: 'fr-FR', label: 'France', flagUrl: 'assets/img/fr.png' },
    { code: 'ar-AR', label: 'عربي', flagUrl: 'assets/img/ar.png' }
  ];

  constructor(private translateService: TranslateService) {}

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translateService.use(language);
  }

  getFlagUrl(): string {
    const language = this.languages.find(lang => lang.code === this.selectedLanguage);
    if (language) {
      return language.flagUrl;
    }
    // If the language is not found, return a default image URL
    return 'assets/img/default-flag.png';
  }
}
