import { Component, OnInit } from '@angular/core';
import { MobilescreenService } from './mobilescreen.service';

@Component({
  selector: 'app-mobilescreen',
  templateUrl: './mobilescreen.component.html',
  styleUrls: ['./mobilescreen.component.scss'],
})

export class MobilescreenComponent implements OnInit {

    constructor (
        private mobilescreenService: MobilescreenService,
    ) { }

    ngOnInit() {
    }
}