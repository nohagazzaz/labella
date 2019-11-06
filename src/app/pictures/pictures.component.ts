import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  imageObject: Array<object>;
  @ViewChild('nav') slider: NgImageSliderComponent;
  constructor() { }

  ngOnInit() {
    this.imageObject = [{
      image: 'assets/img/AE0I6465.jpg',
      thumbImage: 'assets/img/AE0I6465.jpg'
    }, {
      image: 'assets/img/AE0I6509.jpg',
      thumbImage: 'assets/img/AE0I6509.jpg',
    }, {
      image: 'assets/img/AE0I6510.jpg',
      thumbImage: 'assets/img/AE0I6510.jpg'
    }, {
      image: 'assets/img/AE0I6538.jpg',
      thumbImage: 'assets/img/AE0I6538.jpg',
    }, {
      image: 'assets/img/AE0I6559.jpg',
      thumbImage: 'assets/img/AE0I6559.jpg'
    }, {
      image: 'assets/img/AE0I6599.jpg',
      thumbImage: 'assets/img/AE0I6599.jpg',
    }
      , {
      image: 'assets/img/IMG_3256.JPG',
      thumbImage: 'assets/img/IMG_3256.JPG',
    }, {
      image: 'assets/img/IMG_3257.JPG',
      thumbImage: 'assets/img/IMG_3257.JPG',
    }, {
      image: 'assets/img/IMG_3259.JPG',
      thumbImage: 'assets/img/IMG_3259.JPG',
    }, {
      image: 'assets/img/IMG_3260.JPG',
      thumbImage: 'assets/img/IMG_3260.JPG',
    }, {
      image: 'assets/img/IMG_3261-min.JPG',
      thumbImage: 'assets/img/IMG_3261-min.JPG',
    }, {
      image: 'assets/img/IMG_3262.JPG',
      thumbImage: 'assets/img/IMG_3262.JPG',
    }, {
      image: 'assets/img/IMG_3263.JPG',
      thumbImage: 'assets/img/IMG_3263.JPG',
    }
    ];
  }
  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

}
