import { TitleCasingPipe } from './titlecase.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleCaseComponent } from './title-case/title-case.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleCaseComponent,
    TitleCasingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
