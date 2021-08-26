import { Component, OnInit } from '@angular/core';

import { Service } from '../service.model'
@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
services: Service[] = [
  new Service('Yoga', 'Release tension and acheive re-alignment with an exhilerating Vinyasa session!', 'https://drive.google.com/file/d/1vu9vQ6kcWZR0HI9yaK695exHQv7N7Tft/view?usp=drive_web')
];
  constructor() { }

  ngOnInit(): void {
  }

}
