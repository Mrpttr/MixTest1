import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditDataComponent } from './masterData/edit-data/edit-data.component';
import { DataComponent } from './masterData/edit-data/data/data.component';
import { DataListComponent } from './masterData/edit-data/data-list/data-list.component';
import { RouterModule } from '@angular/router';
import appMixRBEI from './router';
import {HttpClientModule} from '@angular/common/http'
import { DataserviceService } from './masterData/shared/dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    EditDataComponent,
    DataComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appMixRBEI),
    FormsModule
  ],
  exports: [DataListComponent, DataComponent],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
