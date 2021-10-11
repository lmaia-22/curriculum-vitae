import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgParticlesModule} from "ng-particles";
import {MatCardModule} from '@angular/material/card';
import  {MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { NgxTimelineAlbeModule } from 'ngx-timeline-albe';
import { MatCommonModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    NgxTimelineAlbeModule,
    MatCommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
