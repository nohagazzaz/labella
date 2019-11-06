import { OurDoctorsService } from './our-doctors/our-doctors.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { I18nService } from './core/i18n.service';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FooterComponent } from './footer/footer.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MedicalComponent } from './medical/medical.component';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// MDB Angular Free
import { InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'angular-bootstrap-md';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { WavesModule, DropdownModule } from 'angular-bootstrap-md';

import { ToastrModule } from 'ngx-toastr';
import { PicturesComponent } from './pictures/pictures.component';
import { SaidAboutUsComponent } from './said-about-us/said-about-us.component';
import { BookingComponent } from './booking/booking.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { NavbarModule} from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    MedicalComponent,
    HomeComponent,
    ServicesComponent,
    ContactInfoComponent,
    FooterComponent,
    OurDoctorsComponent,
    ContactUsComponent,
    PicturesComponent,
    SaidAboutUsComponent,
    BookingComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    InputsModule,
    NgImageSliderModule,
    NgxMyDatePickerModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ButtonsModule,
    WavesModule,
    CarouselModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgScrollbarModule,
  ],
  providers: [I18nService, OurDoctorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
