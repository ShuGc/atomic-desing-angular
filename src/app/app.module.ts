import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtomComponent } from './atoms/buttom/buttom.component';
import { ImagesComponent } from './atoms/images/images.component';
import { DescriptionComponent } from './atoms/description/description.component';
import { TitleComponent } from './atoms/title/title.component';
import { CardComponent } from './molecules/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtomComponent,
    ImagesComponent,
    DescriptionComponent,
    TitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
