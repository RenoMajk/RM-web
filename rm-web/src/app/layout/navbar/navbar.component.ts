import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuUrl } from 'src/app/shared/enums';

interface Lang {
  code: string;
  name: string;
  class: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public readonly MenuUrlEnum = MenuUrl;
  private readonly SELECTED_LANGUGAE: string = 'selectedLanguage';

  languageList: Lang[] = [
    { code: 'pl', name: 'Polski', class: 'logo__lang--pl' },
    { code: 'en', name: 'English', class: 'logo__lang--en' },
    { code: 'de', name: 'Deutsch', class: 'logo__lang--de' },
  ];

  selectedLang: Lang;

  constructor(private translate: TranslateService){
    const langFromLS: any = localStorage.getItem(this.SELECTED_LANGUGAE)
    this.selectedLang = langFromLS? JSON.parse(langFromLS) : this.languageList[0];
    this.translate.use(this.selectedLang.code);
  }

  changeSiteLanguage(selectedLanguage: Lang): void {
    this.selectedLang = selectedLanguage;
    this.translate.use(selectedLanguage.code);
    localStorage.setItem(this.SELECTED_LANGUGAE, JSON.stringify(this.selectedLang))
  }
}
