import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  educations: any = [
    { degree: 'Bachelor of Engineering', years: '(2018)', icon: 'fa fa-graduation-cap fa-2x', color: '#9C27B0', data: 'BNM Institute of Technology' },
    { degree: 'Pre-University', years: '(2014)', icon: 'fa fa-graduation-cap fa-2x', color: '#673AB7', data: 'SGPTA PU College' },
    { degree: 'School', years: '(2012)', icon: 'fa fa-graduation-cap fa-2x', color: '#FF9800', data: 'Sree Saraswathi Vidya Mandira' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
