import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  show_class = false;
  constructor(public translate: TranslateService,
    private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  Show(){
    this.show_class = !this.show_class;
  }
  changeLanguage() {
    if (this.translate.currentLang === 'ar') {
      this.translate.use('en');
    } else {
      this.translate.use('ar');
    }
  }

  public triggerScrollTo(destination: string) {

    const config: ScrollToConfigOptions = {
      target: destination
    };

    this._scrollToService.scrollTo(config).subscribe(res => {
      console.log(res);
    },
      error => {
        console.error(error);
      });
  }
}
