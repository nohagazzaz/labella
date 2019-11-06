import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { I18nService } from './core/i18n.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'La Bella';
  languages = ['ar', 'en'];

  constructor(i18nService: I18nService) {
    i18nService.init('ar', this.languages);
  }
  ngOnInit(): void {
    AOS.init();
  }
  ngAfterViewInit(): void {

    // initializes the plugin to a single element and returns its instance
    // const instance = OverlayScrollbars(document.querySelectorAll('body'), { /* your options */ });
    // const instance2 = OverlayScrollbars(document.getElementById('page-top'));
  }

}
