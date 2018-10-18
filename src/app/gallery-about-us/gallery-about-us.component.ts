import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-about-us',
  templateUrl: './gallery-about-us.component.html',
  styleUrls: ['./gallery-about-us.component.scss']
})
export class GalleryAboutUsComponent implements OnInit {

  images = [
    { img: '../assets/img/gallery-about-us/gallery-img-1.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-2.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-3.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-4.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-5.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-6.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-7.jpg' },
    { img: '../assets/img/gallery-about-us/gallery-img-8.jpg' },
  ];
  slideConfig = {
    slidesToShow: 3,
    arrows: true,
    dots: true,
    speed: 400,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

