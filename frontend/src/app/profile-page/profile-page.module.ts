import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageService } from './profile-page.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfilePageComponent, ProfileComponent],
  imports: [CommonModule],
  providers: [ProfilePageService],
  exports: [CommonModule, ProfilePageComponent],
})
export class ProfilePageModule {}
