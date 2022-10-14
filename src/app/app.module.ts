import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildData2Component } from './child-data2/child-data2.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component'
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildData2Component,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
