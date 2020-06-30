import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { EnumAndCastingComponent } from './components/enum-and-casting/enum-and-casting.component';
import { AttributesEventsAndNgModelComponent } from './components/attributes-events-and-ng-model/attributes-events-and-ng-model.component';
import { HaloComponent } from './components/halo/halo.component';
import { HaloVehiclesComponent } from './components/halo-vehicles/halo-vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsBasicComponent } from './components/forms-basic/forms-basic.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplatesComponent,
    EnumAndCastingComponent,
    AttributesEventsAndNgModelComponent,
    HaloComponent,
    HaloVehiclesComponent,
    FormsBasicComponent,
    MyDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
