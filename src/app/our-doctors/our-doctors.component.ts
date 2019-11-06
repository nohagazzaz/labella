import { OurDoctorsService } from './our-doctors.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent implements OnInit {
  public list: any;
  constructor(private db: OurDoctorsService) {

  }

  ngOnInit() {
    this.list = []
    this.list = this.db.getOurDoctors()
  }

}
