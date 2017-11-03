import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { 
    path: 'user/:id',      
    component: UserDetailComponent 
  },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    component: HomeComponent
  },
  // { 
  //   path: '',
  //   redirectTo: '/users',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
