import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { EnumAndCastingComponent } from './components/enum-and-casting/enum-and-casting.component';
import { AttributesEventsAndNgModelComponent } from './components/attributes-events-and-ng-model/attributes-events-and-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplatesComponent,
    EnumAndCastingComponent,
    AttributesEventsAndNgModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
