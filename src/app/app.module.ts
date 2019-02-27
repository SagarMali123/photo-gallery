import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserComponent} from './user/user.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GalleryServiceService} from './gallery-service.service'
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'albums/:id', component: AlbumsComponent },
  { path: 'photos/:id', component: PhotosComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    AlbumsComponent,
    PhotosComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  
  providers: [GalleryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
