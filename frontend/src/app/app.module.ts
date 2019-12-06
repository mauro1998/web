import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePageModule } from './profile-page/profile-page.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfilePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProfilePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
