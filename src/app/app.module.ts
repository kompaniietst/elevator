import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { ElevatorComponent } from './components/elevator/elevator.component';
import { BuildingComponent } from './components/building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    ElevatorComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
