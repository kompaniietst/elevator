import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  @Input('floors')
  floors_amount!: any;
  activeFloor: number = 0;
  elevatorPlace: number = 0;

  constructor() { }

  ngOnInit(): void { }

  getDesiredFloor(floorElement: any, index: number) {
    this.elevatorPlace = this.calcFloorHeight(floorElement, index);
  }

  calcFloorHeight(currElement: any, index: number) {
    let floorHeight = currElement.target.parentNode.clientHeight;

    return floorHeight * index;
  }
}
