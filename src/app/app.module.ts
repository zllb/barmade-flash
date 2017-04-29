import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import { SortableModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
