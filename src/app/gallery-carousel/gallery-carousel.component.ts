import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit {

  slides = [
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'},
    {img: '../assets/img/gallery/tets-image.jpg'}
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




  //afterChange(e) {
  //  console.log('afterChange', e);
  //}
  constructor() { }

  ngOnInit() {
  }

}
