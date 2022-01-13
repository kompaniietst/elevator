import { Component, OnInit } from '@angular/core';
import { BuildingInterface } from './interfaces/building.interface';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  buildings: BuildingInterface[] = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.addBuilding(4);
    this.service.addBuilding(3);
    this.service.addBuilding(8);
    this.service.addBuilding(1);
    this.service.addBuilding(-5);

    this.buildings = this.service.getBuidings();
  }
}
