import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
