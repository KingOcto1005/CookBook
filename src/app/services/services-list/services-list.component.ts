import { Component, OnInit } from '@angular/core';

import { Service } from '../service.model'
@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
services: Service[] = [
  new Service('Yoga', 'Release tension and acheive re-alignment with an exhilerating Vinyasa session!', 'https://static.onecms.io/wp-content/uploads/sites/35/2020/06/01/hatha-yoga-promo.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
