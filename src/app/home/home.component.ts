import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  public triggerScrollTo(destination: string) {

    const config: ScrollToConfigOptions = {
      target: destination
    };

    this._scrollToService.scrollTo(config);
  }
}
