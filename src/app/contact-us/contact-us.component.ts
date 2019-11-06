import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { phoneNumberValidator } from './phone-validator';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private fs: AngularFireDatabase,

  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Mobile: ['', [Validators.required, phoneNumberValidator]],
      Message: ['', Validators.required]
    });
  }

  get Name() {
    return this.contactForm.get('Name');
  }

  get Email() {
    return this.contactForm.get('Email');
  }
  get Mobile() {
    return this.contactForm.get('Mobile');
  }

  get Message() {
    return this.contactForm.get('Message');
  }

  onSubmit() {
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      responseType: 'text' as 'json'
    }
    const body = new HttpParams()
      .set('form-name', 'contact') // < - this is very important
      .append('Name', this.contactForm.value.Name)
      .append('Email', this.contactForm.value.Email)
      .append('Mobile', this.contactForm.value.Mobile)
      .append('Message', this.contactForm.value.Message)

    // ...the rest of your contact forms form groups
    this.http.post('/', body.toString(), HttpUploadOptions).subscribe(
      res => {
        this.toastr.success(this.translateService.instant('Thank you! Your message has been sent successfully'));
        this.contactForm.reset();
      },
      err => {

        this.toastr.error(this.translateService.instant('There was a problem sending your message'));

      })


  }

}



