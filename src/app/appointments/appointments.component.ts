import { Component } from '@angular/core';

import { ServiceDetail } from '../shared/service-detail.model';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.css']

})
export class AppointmentsComponent {
    serviceDetails: ServiceDetail[] = [
        new ServiceDetail('Payne', 'Meditation', 30),
        new ServiceDetail('EJ', 'Yoga', 60)
    ];
    
}