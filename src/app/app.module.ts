import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { ElevatorComponent } from './components/elevator/elevator.component';
import { BuildingComponent } from './components/building/building.component';
import { AppService } from './services/app.service';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { RandomColorDirective } from './directives/random-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    ElevatorComponent,
    BuildingComponent,
    NumberToArrayPipe,
    ReversePipe,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
