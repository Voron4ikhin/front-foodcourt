import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';
import {MatSliderModule} from '@angular/material/slider';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InfoProfileComponent } from './components/info-profile/info-profile.component';



@NgModule({
  declarations: [
    WallComponent,
    BaseLayoutComponent,
    EditProfileComponent,
    InfoProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSliderModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
