import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DockModule } from 'primeng/dock';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'primeng/carousel';
import { ProjectsComponent } from './projects/projects.component'
import { TimelineModule } from 'primeng/timeline'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule,
    CarouselModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
