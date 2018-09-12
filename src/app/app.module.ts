import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { StartupideasComponent } from './startupideas/startupideas.component';
import { YoutubevideoComponent } from './youtubevideo/youtubevideo.component';
import { TipsandtricsComponent } from './tipsandtrics/tipsandtrics.component';
import { PeopletechnicalthoughtComponent } from './peopletechnicalthought/peopletechnicalthought.component';
import { HowtoComponent } from './howto/howto.component';
import { EffectoftechnologyComponent } from './effectoftechnology/effectoftechnology.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    StartupideasComponent,
    YoutubevideoComponent,
    TipsandtricsComponent,
    PeopletechnicalthoughtComponent,
    HowtoComponent,
    EffectoftechnologyComponent,
    SliderComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
})
export class AppModule { }
