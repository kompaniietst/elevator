import { Injectable } from "@angular/core";
import { Building } from "../components/classes/building.class";
import { BuildingInterface } from "../interfaces/building.interface";

@Injectable()
export class AppService {
    buildings: BuildingInterface[] = [];

    getBuidings(): BuildingInterface[] {
        return this.buildings;
    }

    addBuilding(floors_amount: number) {
        if (floors_amount < 0) {
            this.buildings
                .push(new Building(1));
            return;
        }

        this.buildings
            .push(new Building(floors_amount));
    }

}