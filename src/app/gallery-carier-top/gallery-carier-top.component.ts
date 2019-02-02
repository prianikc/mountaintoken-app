import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-carier-top',
  templateUrl: './gallery-carier-top.component.html',
  styleUrls: ['./gallery-carier-top.component.scss']
})
export class GalleryCarierTopComponent implements OnInit {

  images = [
    {img: '../assets/img/gallery-carier-top/gallery-img-1.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-2.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-3.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-4.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-5.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-6.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-7.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-8.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-9.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-10.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-11.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-12.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-13.jpg'},
    {img: '../assets/img/gallery-carier-top/gallery-img-14.jpg'},
  ];
  slideConfig = {
    autoplay: true,
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

  constructor() {
  }

  ngOnInit() {
  }

}

