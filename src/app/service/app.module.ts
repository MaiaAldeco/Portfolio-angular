import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { BannerComponent } from '../banner/banner.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ServiceScrollrevealService } from './service-scrollreveal.service';
import { LoginComponent } from '../login/login.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

/* import { RouterModule, Routes } from '@angular/router'; */

/* const appRoutes: Routes=[m
  {path:'about', component:AboutMeComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'skills', component:SkillsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact', component:ContactComponent},
] */

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
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgsRevealModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceScrollrevealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
