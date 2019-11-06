import { OurDoctorsService } from '../our-doctors/our-doctors.service';
import { doctor } from '../our-doctors/doctor';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { phoneNumberValidator } from '@app/contact-us/phone-validator';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  contactForm: FormGroup;
  procedureSelect: Array<any>;
  doctorSelect: Array<any>;
  timeSelect: Array<any>;
  public list_doctors: any;
  date: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };
  min: Date;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private toastr: ToastrService,
    private http: HttpClient,
    private doctors: OurDoctorsService,
  ) {
    this.list_doctors = []
    this.list_doctors = this.doctors.getOurDoctors()
  }

  ngOnInit() {
    for (let i in this.list_doctors) {
      this.doctorSelect.push({ value: i, label: i })
      console.log(i)
    }
    console.log(this.list_doctors)
    this.contactForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        sex: ['', Validators.required],
        procedure: ['', Validators.required],
        doctor: ['', Validators.required],
        dateAndTime: ['', Validators.required],
        comment: [''],
        Email: ['', [Validators.required, Validators.email]],
        Mobile: ['', [Validators.required, phoneNumberValidator]]
      }
    );

    this.timeSelect = [
      { value: '12-13', label: '12-13' },
      { value: '13-14', label: '13-14' },
      { value: '14-15', label: '14-15' },
      { value: '15-16', label: '15-16' },
      { value: '15-17', label: '15-17' },
      { value: '17-18', label: '17-18' },

    ]
    this.procedureSelect = [
      { value: 'حقن الفيلر ', label: 'حقن الفيلر ' },
      { value: 'حقن البوتكس الأمريكي والألماني', label: 'حقن البوتكس الأمريكي والألماني' },
      { value: 'خيوط النضارة والشد', label: 'خيوط النضارة والشد' },
      { value: 'حقن البلازما الغنية بالصفائح الدموية', label: 'حقن البلازما الغنية بالصفائح الدموية' },
      { value: 'حقن البلازما الذهبية', label: 'حقن البلازما الذهبية' },
      { value: 'حقن الميزو ثيرابي للبشرة والشعر', label: 'حقن الميزو ثيرابي للبشرة والشعر' },
      { value: 'حقن إذابة الدهون الموضعية', label: 'حقن إذابة الدهون الموضعية' },
      { value: 'تقنية رفع الندبات', label: 'تقنية رفع الندبات' },
      { value: 'حقن البلازما', label: 'حقن البلازما' },
      { value: 'فراكشنال ليزر', label: 'فراكشنال ليزر' },
      { value: 'جلسة انفيني', label: 'جلسة انفيني' },
      { value: 'التقشير البارد', label: 'التقشير البارد' },
      { value: 'التقشير الكيميائي والتقشير بأحماض الفاكهة', label: 'التقشير الكيميائي والتقشير بأحماض الفاكهة' },
      { value: 'جلسات خاصة لعلاج حب الشباب', label: 'جلسات خاصة لعلاج حب الشباب' },
      { value: 'حقن محفزات النمو ومستخلصات الخلايا الجذعية', label: 'حقن محفزات النمو ومستخلصات الخلايا الجذعية' },
      { value: 'فيلر الشعر DR.CYJ', label: 'فيلر الشعر DR.CYJ' },
      { value: 'تنظيف البشرة العميق بجهاز الهيدرابيوتي', label: 'تنظيف البشرة العميق بجهاز الهيدرابيوتي' },
      { value: 'جلسة اللزميد للشعر', label: 'جلسة اللزميد للشعر' },
      { value: 'جلسة اللزميد للبشر', label: 'جلسة اللزميد للبشر' },
      { value: 'جلسة الألترا فورمر', label: 'جلسة الألترا فورمر' },
      { value: 'جلسة الإنفيني', label: 'جلسة الإنفيني' },
      { value: 'جلسة الفراكشنال ليزر', label: 'جلسة الفراكشنال ليزر' },
      { value: 'إزالة الشعر بالليزر جنتل بروماكس', label: 'إزالة الشعر بالليزر جنتل بروماكس' },
      { value: 'جلسة سبكترا Spectra', label: 'جلسة سبكترا Spectra' },

    ];
    this.min = new Date();
    this.min.setDate(this.min.getDate() + 1);
    this.OnChanges()
  }
  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.contactForm.patchValue({
      myDate: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    });
  }
  OnChanges() {
    this.contactForm.valueChanges.subscribe(val => {
      this.contactForm.value.dateAndTime = "" + this.contactForm.value.dateAndTime
    }

    )
  }
  addDoctorToSelect() {
    for (let i = 0; i < this.list_doctors.length; i++) {
      this.doctorSelect.push({ value: this.list_doctors[i], label: this.list_doctors[i] })

    }
  }
  clearDate(): void {
    // Clear the date using the patchValue function
    this.contactForm.patchValue({ myDate: null });
  }

  get form(): any {
    return this.contactForm.controls;
  }
  onSubmit() {
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      responseType: 'text' as 'json'
    }

    const body = new HttpParams()
      .set('form-name', 'booking') // < - this is very important
      .append('FirstName', this.contactForm.value.firstName)
      .append('LastName', this.contactForm.value.lastName)
      .append('Sex', this.contactForm.value.sex)
      .append('Procedure', this.contactForm.value.procedure)
      .append('Doctor', this.contactForm.value.doctor)
      .append('DateAndTime', this.contactForm.value.dateAndTime)
      .append('Email', this.contactForm.value.Email)
      .append('Mobile', this.contactForm.value.Mobile)
      .append('Comment', this.contactForm.value.comment)

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
